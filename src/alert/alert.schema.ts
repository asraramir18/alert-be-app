import * as mongoose from 'mongoose';

export const AlertSchema = new mongoose.Schema({
  Timestamp: { type: String, required: true },
  Machine: { type: String, required: true },
  Anomaly: { type: String, required: true },
  Sensor: { type: String, required: true },
  soundClip: { type: String, required: true },
  reason: { type: String, required: false },
  action: { type: String, required: false },
  comment: { type: String, required: false },
});

export class Alert {
  constructor(
    public Timestamp: string,
    public Machine: string,
    public Anomaly: string,
    public Sensor: string,
    public soundClip: string,
    public reason: string,
    public action: string,
    public comment: string
  ) {
    console.log('TES');
  }
}
