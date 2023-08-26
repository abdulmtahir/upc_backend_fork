import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { teamMembersDto } from "./dto/teamMembersDto";
import { Injectable, NotFoundException } from "@nestjs/common";
import  {Team} from "./entities/teamMembers.entity";



@Injectable()
export class TeamMembersService{

    constructor(@InjectRepository(Team) private readonly teamRepo: Repository<Team>,){}

   async createTeam(teamDtos: teamMembersDto): Promise<Team>{
        const teamM = new Team();
        teamM.statement = teamDtos.statement;
        teamM.image = teamDtos.image;
        teamM.name = teamDtos.name;
        teamM.Title = teamDtos.Title;
        teamM.bio = teamDtos.bio;
        // teamM.position = teamDtos.position;
        const team =  this.teamRepo.create(teamM);
        return this.teamRepo.save(team);
    }

   async getTeamById(id:number){
        const getById = await this.teamRepo.findOne({where:{id}});

        if(!getById){
            throw new NotFoundException('no result found');
        }else{
            return getById;
        }

    }

    async getAllTeam(){
        const getAll = await this.teamRepo.find({
            order: { 
              id: "ASC"
            }
          });
        if(!getAll){
            throw new NotFoundException('Empty');
        }else{
            return getAll;
        }
    }

    async updateTeam(id:number, teamDtos: teamMembersDto){
        const teamM = new Team();
        teamM.statement = teamDtos.statement;
        teamM.image = teamDtos.image;
        teamM.name = teamDtos.name;
        teamM.Title = teamDtos.Title;
        teamM.bio = teamDtos.bio;
        // teamM.position = teamDtos.position;
        const updateTeam = await this.teamRepo.update(id, teamM);
        if(updateTeam.affected > 0){
            return ('Update successfully');

        }else{
            throw ('Cant Update');
        }
    }

    async deleteTeam(id:number){
        try{
        await this.teamRepo.delete(id);
        return ('deleted successfully');
        
        }catch(error){
            throw new NotFoundException('cant delete this post')
        }
    }


}
