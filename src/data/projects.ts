import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "japan-2025",
    name: "Viagem Japão 2025",
    description: "Preparação da sua próxima viagem",
    progress: 35,
    isPriority: true,

    milestones: [
      {
        id: "passport",
        title: "Passaporte",
        status: "completed",
      },
      {
        id: "visa",
        title: "Visto",
        status: "pending",
      },
      {
        id: "flights",
        title: "Passagens",
        status: "pending",
      },
      {
        id: "accommodation",
        title: "Hospedagem",
        status: "pending",
      },
    ],
  },

  {
    id: "patagonia",
    name: "Patagônia",
    description: "Planejamento da viagem",
    progress: 20,
    isPriority: false,

    milestones: [
      {
        id: "patagonia-flights",
        title: "Passagens",
        status: "pending",
      },
      {
        id: "patagina-acomodations",
        title: "Hospedagem",
        status: "pending",
      },
    ],
  },

  {
    id: "eurotrip",
    name: "Eurotrip",
    description: "Planejamento da viagem pela Europa",
    progress: 15,
    isPriority: false,

    milestones: [
      {
        id: "eurotrip-passport",
        title: "Passaporte",
        status: "completed",
      },
      {
        id: "eurotrip-flights",
        title: "Passagens",
        status: "pending",
      },
    ],
  },
];
