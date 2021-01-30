import { Migration } from '@mikro-orm/migrations';

export class Migration20210130124243 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "patient" ("id" serial primary key, "name" varchar(255) not null);');

    this.addSql('create table "consultation" ("id" serial primary key, "pain_level" int4 not null, "patient_id" int4 not null);');

    this.addSql('alter table "consultation" add constraint "consultation_patient_id_foreign" foreign key ("patient_id") references "patient" ("id") on update cascade;');
  }

}
