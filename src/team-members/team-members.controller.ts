import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { teamMembersDto } from './dto/teamMembersDto';
import { TeamMembersService } from './team-members.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { editeFileName } from './editeFileName/editeFileName';
import { imageFileFilter } from './filters/imageFilters';
import { diskStorage } from 'multer';

@Controller('team-members')
export class TeamMembersController {

    private Destination: string = "images/team/"
    constructor(private readonly TeamService: TeamMembersService){}


    @Post()
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: 'images/team',
            filename: editeFileName,
        }),
        fileFilter: imageFileFilter,
    }), )
    async createTeam(@UploadedFile() file:Express.Multer.File, @Body() teamMembersDto:teamMembersDto){ 
        // return this.TeamService.createTeam(file.filename, teamMembersDto);
        return this.TeamService.createTeam(this.Destination+file.filename, teamMembersDto);
    }


    @Get(':id') 
    getTeamById(@Param('id') id:number){

        return this.TeamService.getTeamById(id);

    }

    @Get()
    getAllTeam(){
        return this.TeamService.getAllTeam();
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: 'images/team',
            filename: editeFileName,
        }),
        fileFilter: imageFileFilter,
    }), )
    updateTeam(@UploadedFile() file: Express.Multer.File,@Param('id') id:number, teamDtos: teamMembersDto){
        return this.TeamService.updateTeam(file.filename, id, teamDtos);
        
    }

    @Delete(':id')
    deleteTeam(@Param('id') id:number){
        return this.TeamService.deleteTeam(id);
    }

}
