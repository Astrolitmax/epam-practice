import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({required: true, default: ''})
  title: string;

  @Prop({default: ''})
  description: string;

  @Prop({default: 0})
  count: number;

  @Prop({default: 0})
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);