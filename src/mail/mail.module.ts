import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    MailerModule.forRoot({
      transport: {
        host: "smtp.yandex.ru",
        port: 465,
        secure: true,
        auth: {
          user: process.env.MAIL_LOGIN,
          pass: process.env.MAIL_PASSWORD
        }
      }
    })
  ],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService]
})
export class SendMailModule { }
