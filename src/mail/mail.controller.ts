import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller()
export class MailController {
  constructor(private readonly mailService: MailService) { }

  @Get("mail/send")
  sendMail() {
    return this.mailService.sendMail();
  }
}
