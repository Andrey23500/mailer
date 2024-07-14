import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendMailModule } from './mail/mail.module';

@Module({
  imports: [
    SendMailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
