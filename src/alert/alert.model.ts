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

export interface Alert {
  Timestamp: string;
  Machine: string;
  Anomaly: string;
  Sensor: string;
  soundClip: string;
  reason: string;
  action: string;
  comment: string;
}
