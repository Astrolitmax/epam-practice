import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Config } from 'config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

	let ConfigProject = Config.project;
	const config = new DocumentBuilder()
		.setTitle(ConfigProject.name)
		.setDescription(`A some description «${ConfigProject.name}» Swagger API`)
		.setVersion('1.0')
		.addTag('product')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

  await app.listen(Config.project.port);
}
bootstrap();
