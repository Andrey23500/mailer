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
        subject: 'Confirm your Email',
        html: `<div style="
        text-align: center;
        max-width: 400px;
        width: 100%;
        font-size: 13pt;
        font-family: Arial, Helvetica, sans-serif;
        color: #000000;
        background-color: #fafafa;">
            <table border="0" cellpadding="0" cellspacing="0" style="
                margin:0;
                padding:0">
                <tr>
                    <td>
                        <div style="
                            background-color: #f5f5f5;
                            padding: 10px;">
                            <b style="
                                font-size: 15pt;">
                                Подтверждение авторизации
                            </b>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>
                            Для потверждения вашего email введите код потверждения:
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b id="code-place" style="
                            font-size:26pt;
                            color: #1d60d1;">
                            ${this.generateCode()}
                        </b>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>
                            Срок действия кода истекает через 5 минут.
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div style="
                            padding: 10px;">
                            <i style="
                                color: #d4d4d4;
                                font-size:8pt">
                                Это письмо сформировано автоматически.<br/>
                                Пожалуйста, не отвечайте на него.
                            </i>
                        </div>
                    </td>
                </tr>
            </table>
        </div>`
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
