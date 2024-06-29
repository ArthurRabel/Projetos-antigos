import random

def initGame():
    games = ["roblox","valorant","League of Legends","minecraft","brawlhalla","counter strike","smite","paladins","overwatch","terraria"]
    gameEscolhido = games[random.randint(0,9)]
    palavra = "_" * len(gameEscolhido)
    vidas = 5

    game()

def game():
    global palavra
    global vidas

    print("Jogo da forca \n")

    print(palavra)

    
    letraEscolhida = input("Você tem " + str(vidas) + " vidas, tente uma letra:")

    if(vidas > 1):

        if letraEscolhida not in gameEscolhido:
            vidas -= 1
            print ("\n" * 130) 
            print("perdeu uma vida")

        contador = 0

        for caractere in gameEscolhido: 
            if caractere == letraEscolhida:
                index = int(gameEscolhido.find(caractere, contador))

                palavra = palavra[:index] + palavra[index+1:]
                palavra = palavra[:index] + letraEscolhida + palavra[index:]

            contador += 1   

        game()
    
    else:
        print ("\n" * 130) 
        input("Você perdeu o jogo, pressione enter para reiniciar")
        initGame()

initGame()