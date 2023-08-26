import { Injectable, NotFoundException } from '@nestjs/common';
import { Goal } from './entity/goal-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';

@Injectable()
export class GoalService {
  constructor(
    @InjectRepository(Goal)
    private readonly goalRepository: Repository<Goal>,
  ) {}

  async createGoal(createGoalDto: CreateGoalDto): Promise<Goal> {
    const newGoal = this.goalRepository.create(createGoalDto);
    return this.goalRepository.save(newGoal);
  }

  async getAllGoals(): Promise<Goal[]> {
    const goals = await this.goalRepository.find({
      order: { 
        id: "ASC"
      }
    });
    try {
      return goals;
    } catch (error) {
      throw new NotFoundException('The donations list is empty for now.');
    }
  }

  async getGoalById(id: number): Promise<Goal> {
    const goal = await this.goalRepository.findOne({ where: { id } });
    try {
      return goal;
    } catch (error) {
      throw new NotFoundException('Result not found!!.');
    }
  }

  // async updateGoal(id: number, updateGoalDto: UpdateGoalDto): Promise<Goal> {
  //   const goalToUpdate = await this.goalRepository.findOne({ where: { id } });
  //   if (!goalToUpdate) {
  //     throw new Error('Goal not found.');
  //   }

  //   // Update the fields from the DTO
  //   Object.assign(goalToUpdate, updateGoalDto);
  //   return this.goalRepository.save(goalToUpdate);
  // }

  async updateGoal(id: number, updateGoalDto: UpdateGoalDto): Promise<Goal> {
    const goalToUpdate = await this.goalRepository.findOne({ where: { id } });
    if (!goalToUpdate) {
      throw new NotFoundException('Goal not found');
    }

    // Update the fields from the DTO
    Object.assign(goalToUpdate, updateGoalDto);
    await this.goalRepository.save(goalToUpdate);

    return goalToUpdate; // Return the updated goal
  }

  async deleteGoal(id: number) {
    await this.goalRepository.delete(id);
  }
}
