import { Arg, Ctx, Mutation, Int,ID, Resolver, Query } from "type-graphql";
import { ApolloContext } from "../apolloContext";
import { Consultation } from "../../models/Consultation";

@Resolver(Consultation)
export class ConsultationResolver {

  @Query(() => [Consultation])
  async allConsultations ( @Ctx() { consultations }: ApolloContext) {
    return consultations.find({}, { populate: ['patient']})
  }

  @Mutation(() => Consultation)
  async createConsultation(
    @Arg("painLevel", () => Int) painLevel : number,
    @Arg("patient", () => ID) patient : number,
    @Ctx() { consultations }: ApolloContext
  ) {
    const consultation = consultations.create({painLevel, patient});
    await consultations.persistAndFlush(consultation);
    return consultation;
  }

}
