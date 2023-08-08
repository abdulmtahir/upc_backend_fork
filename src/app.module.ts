import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MembershipModule } from './membership/membership.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { QuickContactModule } from './quick-contact/quick-contact.module';
import { GalleryModule } from './gallery/gallery.module';
import { RegisterAdminModule } from './register-admin/register-admin.module';
import { PostBlogModule } from './post-blog/post-blog.module';
import { BlogModule } from './blog/blog.module';
import { EventModule } from './event/event.module';
import { QuickContact } from './quick-contact/entities/quick-contact.entity';
import { Catelog } from './gallery/entities/gallery.entity';
import { Event } from './event/entities/event.entity';
import { Blog } from './post-blog/entities/post-blog.entity';
import { News } from './news-latter/entities/news-latter.entity';
import { DonationEntity } from './donations/entities/donation.entity';
import { BlogEntity } from './blog/entities/blog.entity';
import { Admin } from './register-admin/entities/register-admin.entity';
import { DonationModule } from './donations/donations.module';
import { NewsModule } from './news-latter/news-latter.module';
import { MembershipEntity } from './membership/entities/membership.entity';
import { CampaignModule } from './campaign/campaign.module';
import { DonationOptionsModule } from './donation-option/donation-option.module';
import { GoalModule } from './goal/goal.module';
import { HeroModule } from './hero/hero.module';
import { ManifestoModule } from './manifesto/manifesto.module';
import { SocialMediaModule } from './social-media/social-media.module';
import { TeamMembersModule } from './team-members/team-members.module';
import { UpperNavModule } from './upper-nav/upper-nav.module';
import { VideoModule } from './video/video.module';
import { WelcomeModule } from './welcome/welcome.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: +configService.get<number>('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        entities: [
          MembershipEntity,
          DonationEntity,
          BlogEntity,
          Admin,
          QuickContact,
          Blog,
          News,
          // Catelog,
          Event,
        ],
        autoLoadEntities: true,
        synchronize: true,
      }), 
      inject: [ConfigService],
    }),
    MembershipModule, AuthModule, CampaignModule, DonationOptionsModule, EventModule, GoalModule, HeroModule, ManifestoModule, SocialMediaModule, TeamMembersModule,UpperNavModule, VideoModule, WelcomeModule, QuickContactModule, GalleryModule, RegisterAdminModule,PostBlogModule, NewsModule, BlogModule, DonationModule, EventModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
