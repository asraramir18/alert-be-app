/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { dummyComment } from '../dummy';
import { Alert } from './alert.model'

@Injectable()
export class AlertService {

  constructor(@InjectModel('alert_list') private alertModel: Model<Alert>) {}

  getHello(): string {
    return 'Hello World!';
  }

  async postComment(input: Alert): Promise<any> {
    try {
    const newAlert = new this.alertModel({
      Timestamp: input.Timestamp,
      Machine: input.Machine,
      Anomaly: input.Anomaly,
      Sensor: input.Sensor,
      soundClip: input.soundClip
    })
    const result = await newAlert.save();
    const response = {
      status: 'Success',
      message: `Succesfully post machine of ${result.Machine}`
    }
    return response;
  } catch(err){
    throw new HttpException({
        status: 'Failed',
        message: err.message
    }, 500)
    }
  }

  async editAlert(id: string, input: Alert): Promise<any> {
    try {
    const updatedAlert = {
      Timestamp: input.Timestamp,
      Machine: input.Machine,
      Anomaly: input.Anomaly,
      Sensor: input.Sensor,
      soundClip: input.soundClip,
      reason: input.reason,
      action: input.action,
      comment: input.comment
    }
    const result = await this.alertModel.updateOne({_id: id}, updatedAlert)
    const response = {
      status: 'Success',
      message: `Succesfully update machine of ${result}`
    }
    return response;
  } catch(err){
    throw new HttpException({
        status: 'Failed',
        message: err.message
    }, 500)
    }
  }

  async listOfAlert(): Promise<any> {
    const alertList = await this.alertModel.find({}).sort({_id: -1})
    const allList = alertList;
    return allList;
  }
}
