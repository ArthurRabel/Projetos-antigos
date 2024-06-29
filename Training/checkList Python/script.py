atividadeResposta = []

#Cria uma nova atividade
def criarAtividade():
    global atividadeResposta
    atividadeResposta.append(input("Digite uma nova atividade: "))
    askAtividade()

#Dá pronto na atividade
def prontoAtividade():
    global atividadeResposta
    selecionado = int(input("Digite a atividade que deseja dar pronto: "))

    #verifica se tal atividade existe
    if len(atividadeResposta) > selecionado:
        #verifica se já não foi dado o pronto
        if "| Feito" not in atividadeResposta[selecionado]:
            atividadeResposta[selecionado] += " | Feito"
            askAtividade()
        else:
            valorInvalido("Essa atividade ja foi dado o pronto")
    else:
        valorInvalido("Atividade não identificada")

#Apaga ativade
def apagarAtividade():
    global atividadeResposta
    selecionado = int(input("Digite a atividade que deseja apagar: "))

    #verifica se tal atividade existe
    if len(atividadeResposta) > selecionado:
        atividadeResposta.pop(selecionado)
        askAtividade()
    else:
        valorInvalido("Atividade não identificada")

#Mensagem de erro
def valorInvalido(MensagemErro):
     #"Limpar" console
    print ("\n" * 130) 
    input(MensagemErro + "\n\n" + "Pressione enter para voltar para o menu inicial")
    askAtividade()

def askAtividade():
    contador = 0

    #"Limpar" console
    print ("\n" * 130) 

    #Mensagem de caso a lista esteja vazia
    if(atividadeResposta == []):
        print("Sem atividades! \n")
    else:
        #loop para criar a lista de atividade
        for x in atividadeResposta:
            print(str(contador) + "- "+ x)
            contador += 1
    
        print ("\n")

    #menu
    escolha = int(input("1.Criar atividade \n2.Dar pronto na atividade\n3.Apagar a atividade\n\n"))
    if(escolha == 1):
        criarAtividade()
    elif (escolha == 2):
        prontoAtividade()
    elif (escolha == 3):
        apagarAtividade()
    else:
        valorInvalido("Opção não identificada")

askAtividade()