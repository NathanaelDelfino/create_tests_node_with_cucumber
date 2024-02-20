Feature: Calculadora funções
  Validando a os calculos
  
  Scenario: Somando dois números na calculadora
    Given Eu entrei o primeiro "<numero1>" na calculadora
    And Eu entrei o segundo "<numero2>" na calculadora
    When Quando se somar dois números
    Then Eu devo ver o resultado de ser "<resultado>" na tela

 Examples:
    | numero1 | numero2 | resultado |
    | 2       | 3       | 5      |
    | -2      | 2       | 0      |
    | 0       | 0       | 0      |
    | 10      | -5      | 5      |