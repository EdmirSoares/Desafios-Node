const playerUm = {
    nome: "Mario",
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0
}

const playerDois = {
    nome: "Luigi",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    pontos: 0
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result = "";

    switch (true) {
        case random < 0.33:
            result = "Reta";
            break;
        case random < 0.66:
            result = "Curva";
            break;
        default:
            result = "Confronto";
            break;
    }

    return result
}
async function TotalPoints(playerUm, playerDois) {
    console.log("Fim da corrida!🏁");
    console.log(`Pontuação Final: ${playerUm.nome} ${playerUm.pontos} x ${playerDois.pontos} ${playerDois.nome}\n`);

    if (playerUm.pontos > playerDois.pontos) {
        console.log(`O jogador ${playerUm.nome} venceu a corrida com ${playerUm.pontos}! 🏆`);
    }

    if (playerDois.pontos > playerUm.pontos) {
        console.log(`O jogador ${playerDois.nome} venceu a corrida com ${playerDois.pontos}! 🏆`);
    }

    if (playerUm.pontos == playerDois.pontos) {
        console.log(`A corrida terminou empatada! 🤝`);
    }
}

async function logRollResult(characterName, totalPoinsRound, diceResult, attribute) {
    console.log(`〰${characterName} 🎲 rodou os dados e obteve ${diceResult} + ${attribute} pontos! Total: ${totalPoinsRound}`);

}

async function playRaceEngine(characterOne, characterTwo) {
    for (let i = 1; i <= 5; i++) {
        console.log("-----------------------------------\n")
        console.log(`### Rodada ${i} 🚦🏁 ###`);

        let block = await getRandomBlock();
        let emoji = block === 'Reta' ? '🛣️' : block === 'Curva' ? '🔄' : '🔥';

        console.log(`Bloco: ${emoji} ${block}\n`);
        let diceResultOne = await rollDice();
        let diceResultTwo = await rollDice();

        let totalTestSkillOne = 0;
        let totalTestSkillTwo = 0;


        if (block === 'Reta') {
            totalTestSkillOne = characterOne.velocidade + diceResultOne;
            totalTestSkillTwo = characterTwo.velocidade + diceResultTwo;

            logRollResult(characterOne.nome, totalTestSkillOne, diceResultOne, characterOne.velocidade);
            logRollResult(characterTwo.nome, totalTestSkillTwo, diceResultTwo, characterTwo.velocidade);

            if (totalTestSkillOne > totalTestSkillTwo) {
                console.log(`${playerUm.nome} venceu a rodada! 🏆\n`);
                playerUm.pontos++;
            } else if (totalTestSkillOne < totalTestSkillTwo) {
                console.log(`${playerDois.nome} venceu a rodada! 🏆\n`);
                playerDois.pontos++;
            } else {
                console.log("Empate! 🤝\n");
            }
        }

        if (block === 'Curva') {
            totalTestSkillOne = characterOne.manobrabilidade + diceResultOne;
            totalTestSkillTwo = characterTwo.manobrabilidade + diceResultTwo;

            logRollResult(characterOne.nome, totalTestSkillOne, diceResultOne, characterOne.manobrabilidade);
            logRollResult(characterTwo.nome, totalTestSkillTwo, diceResultTwo, characterTwo.manobrabilidade);

            if (totalTestSkillOne > totalTestSkillTwo) {
                console.log(`${playerUm.nome} venceu a rodada! 🏆\n`);
                playerUm.pontos++;
            } else if (totalTestSkillOne < totalTestSkillTwo) {
                console.log(`${playerDois.nome} venceu a rodada! 🏆\n`);
                playerDois.pontos++;
            } else {
                console.log("Empate! 🤝\n");
            }

        }
        if (block === 'Confronto') {
            totalTestSkillOne = characterOne.poder + diceResultOne;
            totalTestSkillTwo = characterTwo.poder + diceResultTwo;

            logRollResult(characterOne.nome, totalTestSkillOne, diceResultOne, characterOne.poder);
            logRollResult(characterTwo.nome, totalTestSkillTwo, diceResultTwo, characterTwo.poder);

            if (totalTestSkillOne > totalTestSkillTwo) {
                console.log(`${playerDois.nome} perdeu a rodada! ${playerDois.pontos == 0 ? "" : "E acaba perdendo 1 ponto!"} 😢\n`);
                playerDois.pontos == 0 ? playerDois.pontos = 0 : playerDois.pontos -= 1;

            } else if (totalTestSkillOne < totalTestSkillTwo) {
                console.log(`${playerUm.nome} perdeu a rodada! ${playerUm.pontos == 0 ? "" : "E acaba perdendo 1 ponto!"} 😢\n`);
                playerUm.pontos == 0 ? playerUm.pontos = 0 : playerUm.pontos -= 1;
            } else {
                console.log("Empate! 🤝\n");
            }
        }
    }

    await TotalPoints(playerUm, playerDois);
}

(async function main() {
    console.log(`Jogadores Escolhidos: ${playerUm.nome} e ${playerDois.nome}`);
    console.log("Início da corrida!🏁\n");

    await playRaceEngine(playerUm, playerDois);
}
)();
