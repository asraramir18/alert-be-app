import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { AlertService } from './alert.service';
import { Alert } from './alert.model'

@Controller('alert')
export class AlertController {
  constructor(private readonly appService: AlertService) {}

  @Get('getHello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getListOfAlert')
  getListOfAlert(): Promise<any> {
    return this.appService.listOfAlert();
  }

  @Post('postAlert')
  postAlert(@Body() alert: Alert): Promise<any> {
    return this.appService.postComment(alert);
  }

  @Put('editAlert/:id')
  editAlert(@Body() alert: Alert, @Param('id') id): Promise<any> {
    return this.appService.editAlert(id, alert);
  }
}
