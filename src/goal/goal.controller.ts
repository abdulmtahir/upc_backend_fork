import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { GoalService } from './goal.service';
import { Goal } from './entity/goal-entity';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { Role } from 'src/register-admin/role.enum';
import { RolesGuard } from 'src/auth/guards/roles.guards';
import { Roles } from 'src/auth/decorator/roles.decorator';

@Controller('goal')
export class GoalController {
  constructor(private readonly goalService: GoalService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Super, Role.Admin)
  @Post()
  createGoal(@Body() createGoalDto: CreateGoalDto): Promise<Goal> {
    return this.goalService.createGoal(createGoalDto);
  }

  @Get()
  getAllGoals(): Promise<Goal[]> {
    return this.goalService.getAllGoals();
  }

  @Get(':id')
  getGoalById(@Param('id') id: number): Promise<Goal> {
    return this.goalService.getGoalById(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Patch(':id')
  updateGoal(
    @Param('id') id: number,
    @Body() updateGoalDto: UpdateGoalDto,
  ): Promise<Goal> {
    return this.goalService.updateGoal(id, updateGoalDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Delete(':id')
  deleteGoal(@Param('id') id: number): Promise<void> {
    return this.goalService.deleteGoal(id);
  }
}
