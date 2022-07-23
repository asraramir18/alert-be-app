import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowList = ['https://riza-asrar-wedding.herokuapp.com/']
  const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (allowList.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
  }
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
