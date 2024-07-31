import { MailerService } from '@nestjs-modules/mailer';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';
import { templateMail } from 'src/utils/templateMail';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) { }


  async sendMail() {
    await this.mailerService
      .sendMail({
        to: process.env.USER_MAIL,
        from: `"От" <${process.env.MAIL_LOGIN}>`,
        subject: 'Проверочный код',
        html: templateMail(this.generateCode())
      })
      .catch((e) => {
        throw new HttpException(
          `Ошибка работы почты: ${JSON.stringify(e)}`,
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      });
    }
    generateCode(): number {
        let code = '';
        for (let i = 0; i < 5; i++) {
          code += randomInt(0, 10)
        }
        return parseInt(code);
      }
}
