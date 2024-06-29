def main():
    expressão = input("Digite a expressão matematica:").split(" ")
    
    #Remover os envolvidos da operação da lista e inserir o resultado
    def inserirResultado(index, resultado): 
        
        #Remove os dois numeros e o operador
        for x in range(3):
            expressão.pop(index-1)
            
        #Insere o resultado no lugar
        expressão.insert(index-1, resultado)
        
        #Invoca a função para procurar operadores
        operacoes()

    def calculo(operador):
        index = expressão.index(operador)
        
        #Faz a conta usando String e eval(), como essa função retorna valor int foi preciso converter em string para poder feito novamente sem erro
        resultado = str(eval(expressão[index-1] + operador + expressão[index+1]))
        inserirResultado(index, resultado)

    #Localiza operadores na lista
    def operacoes():
        if "*" in expressão: calculo("*")
        if "/" in expressão: calculo("/")
        if "+" in expressão: calculo("+")
        if "-" in expressão: calculo("-")

    operacoes()
    
    print(expressão)

main()