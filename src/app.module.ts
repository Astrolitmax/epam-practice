import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { Config } from 'config';

let ConfigDB = Config.database;

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${ConfigDB.host}:${ConfigDB.port}/${ConfigDB.name}`,
			{
				useNewUrlParser: true,
				useFindAndModify: false,
				useUnifiedTopology: true
			}
    ),
    ProductsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
