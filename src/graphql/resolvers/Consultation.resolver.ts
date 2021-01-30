import { Arg, Ctx, Mutation, Int,ID, Resolver } from "type-graphql";
import { ApolloContext } from "../apolloContext";
import { Consultation } from "../../models/Consultation";

@Resolver(Consultation)
export class ConsultationResolver {

  @Mutation(() => Consultation)
  async createConsultation(
    @Arg("painLevel", () => Int) painLevel : number,
    @Arg("patient", () => ID) patient : number,
    @Ctx() { em }: ApolloContext
  ) {
    const consultation = em.create(Consultation, {painLevel, patient});
    await em.persistAndFlush(consultation);
    return consultation;
  }

}
