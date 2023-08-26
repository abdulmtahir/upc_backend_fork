import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  UseGuards,
  InternalServerErrorException,
  NotFoundException,
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

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin, Role.Super)
  // @Patch(':id')
  // updateGoal(
  //   @Param('id') id: number,
  //   @Body() updateGoalDto: UpdateGoalDto,
  // ): Promise<Goal> {
  //   return this.goalService.updateGoal(id, updateGoalDto);
  // }


  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Patch(':id')
  async updateGoal(
    @Param('id') id: number,
    @Body() updateGoalDto: UpdateGoalDto,
  ): Promise<Goal> {
    try {
      const updatedGoal = await this.goalService.updateGoal(id, updateGoalDto);
      if (!updatedGoal) {
        throw new NotFoundException(`Goal with id ${id} not found`);
      }
      return updatedGoal;
    } catch (error) {
      // Handle other potential errors (e.g., database errors)
      throw new InternalServerErrorException(error.message);
    }
  }



  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin, Role.Super)
  @Delete(':id')
  deleteGoal(@Param('id') id: number) {
    return this.goalService.deleteGoal(id);
  }
}
