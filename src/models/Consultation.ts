import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType, Int } from "type-graphql";
import { Patient } from "./Patient";

@ObjectType()
@Entity()
export class Consultation {

  @Field(() => Int)
  @PrimaryKey()
  id!: number;

  @Field(() => Int)
  @Property()
  painLevel!: number;

  @Field(() => Patient)
  @ManyToOne(() => Patient)
  patient!: Patient;
}
