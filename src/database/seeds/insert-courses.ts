import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("courses").insert([
       { name: "CSS" },
       { name: "ReactJS" },
       { name: "React Native"},
       { name: "Banco de Dados"},
       { name: "Git" },
       { name: "GitHub" },
       { name: "TypeScript" },
       { name: "Express.js" },
       { name: "NodeJS" },
    ]);
};
