import { MailerService } from '@nestjs-modules/mailer';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) { }

  // Отправка почты
  async sendMail(/*Тут должна быть почта пользователя */) {
    await this.mailerService
      .sendMail({
        to: process.env.USER_MAIL, //User.login
        from: `"Team" <${process.env.MAIL_LOGIN}>`,
        subject: 'Welcome to Nice App! Confirm your Email',
        html: `Code ${this.generateCode()}`
      })
      .catch((e) => {
        throw new HttpException(
          `Ошибка работы почты: ${JSON.stringify(e)}`,
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      });
  }

  // Генерация проверочного кода
  generateCode(): number {
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += randomInt(0, 10)
    }
    return parseInt(code);
  }
}
