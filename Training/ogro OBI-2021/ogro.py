def askNumber():
    numberResponse = int(input("Digite o numero: "))

    #verificar se está dentro do limite de numero
    if(numberResponse > 10 or numberResponse < 0):
        print("Digite um numero de 0 a 10!")
        askNumber()
    else:
        main(numberResponse)

def main(numberResponse):
    leftHand = ""
    rightHand = ""

    #caso seja zero resulta em ambas mãos fechadas e acaba aqui
    if numberResponse == 0:
        leftHand += "*"
        rightHand += "*"
        print("{leftHand}\n{rightHand}".format(leftHand=leftHand, rightHand=rightHand))
        return
    
    #caso seja 5 ou menos ja fecha a mão direita
    if numberResponse <= 5:
        rightHand = "*"
        
    #levantar os dedos de acordo com numero    
    i = 1
    while i <= numberResponse:
        
        #caso seja 5 ou menos os valores será colocado na mão esquerda, se for maior na mão direita
        if i <= 5:
            leftHand += "I"
        else:
            rightHand += "I"
        i += 1
    
    print("{leftHand}\n{rightHand}".format(leftHand=leftHand, rightHand=rightHand))
    
askNumber()