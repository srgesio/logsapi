import { Database } from "../types/Logs";

export const database: Database = {
    logs: [
        // Log do tipo "task" com status "todo"
        {
            message: "Finalizar relatório semanal",
            type: "task",
            status: "todo",
            notes: ["Prioridade alta", "Revisar com equipe"]
        },
        // Log do tipo "task" com status "partialDone"
        {
            message: "Implementar nova funcionalidade",
            type: "task",
            status: "partialDone",
            notes: ["Funcionalidade X concluída", "Faltam testes"]
        },
        // Log do tipo "task" com status "done"
        {
            message: "Corrigir bug no sistema",
            type: "task",
            status: "done",
            notes: ["Bug crítico", "Resolvido na versão 1.0.1"]
        },
        // Log do tipo "task" com status "closed"
        {
            message: "Migrar banco de dados",
            type: "task",
            status: "closed",
            notes: ["Banco antigo: MySQL", "Banco novo: PostgreSQL"]
        },
        // Log do tipo "task" com status "impediment"
        {
            message: "Atualizar documentação",
            type: "task",
            status: "impediment",
            notes: ["Aguardando aprovação do cliente"]
        },
        // Log do tipo "task" com status "todo" e notas vazias
        {
            message: "Reunião com o cliente",
            type: "task",
            status: "todo",
            notes: [""]
        },
        // Log do tipo "task" com status "todo" e notas vazias
        {
            message: "Anotações da reunião",
            type: "task",
            status: "todo",
            notes: [""]
        },
        // Log do tipo "task" com status "todo" e notas vazias
        {
            message: "Revisar código",
            type: "task",
            status: "todo",
            notes: [""]
        },
        // Log do tipo "task" com status "todo"
        {
            message: "Preparar ambiente de teste",
            type: "task",
            status: "todo",
            notes: ["Configurar Docker", "Criar scripts de inicialização"]
        },
        // Log do tipo "task" com status "done"
        {
            message: "Enviar e-mail de atualização",
            type: "task",
            status: "done",
            notes: ["Incluir progresso da última semana", "Mencionar próximos passos"]
        }
    ]
}