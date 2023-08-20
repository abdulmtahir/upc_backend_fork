import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuModule } from './menu/menu.module';
import { RegisterAdminModule } from './register-admin/register-admin.module';
import { EventModule } from './event/event.module';
import { GalleryModule } from './gallery/gallery.module';
import { GoalModule } from './goal/goal.module';
import { NewsModule } from './news/news.module';
import { QuickContactModule } from './quick-contact/quick-contact.module';
import { LikesModule } from './likes/likes.module';
import { NewsLetterModule } from './news-latter/news-latter.module';
import { UpperNavModule } from './upper-nav/upper-nav.module';
import { ManifestoModule } from './manifesto/manifesto.module';
import { MembershipModule } from './membership/membership.module';
import { HeroModule } from './hero/hero.module';
import { TeamMembersModule } from './team-members/team-members.module';
import { DonationModule } from './donations/donations.module';
import { CommentsModule } from './comments/comments.module';
import { CampaignModule } from './campaign/campaign.module';
import { BlogModule } from './blog/blog.module';
import { AuthModule } from './auth/auth.module';
import { PostBlogModule } from './post-blog/post-blog.module';
import { SocialMediaModule } from './social-media/social-media.module';
import { VideoModule } from './video/video.module';
import { WelcomeModule } from './welcome/welcome.module';
import { DonationOptionsModule } from './donation-options/donation-options.module';
import { MissionModule } from './mission/mission.module';
import { PromisesModule } from './about-us/promises.module';
import { MotivationModule } from './motivation/motivation.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: +configService.get<number>('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        entities: [],
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    MissionModule,
    MenuModule,
    RegisterAdminModule,
    EventModule,
    GalleryModule,
    GoalModule,
    NewsModule,
    QuickContactModule,
    LikesModule,
    NewsLetterModule,
    UpperNavModule,
    ManifestoModule,
    MembershipModule,
    HeroModule,
    TeamMembersModule,
    DonationModule,
    CommentsModule,
    CampaignModule,
    BlogModule,
    AuthModule,
    PostBlogModule,
    SocialMediaModule,
    VideoModule,
    WelcomeModule,
    DonationOptionsModule,
    PromisesModule,
    MotivationModule,
    AddressModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
