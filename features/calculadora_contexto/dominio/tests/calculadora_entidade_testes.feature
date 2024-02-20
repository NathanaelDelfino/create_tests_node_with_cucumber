Feature: Calculadora funções
  Descrição das funcionalidades e cenários que a calculadora deve ter
  
  Scenario: Somando dois números na calculadora
    Given Eu entrei o primeiro "<numero1>" na calculadora
    And Eu entrei o segundo "<numero2>" na calculadora
    When Quando se somar dois números
    Then Eu devo ver o resultado de ser "<resultado>" na tela

 Examples:
    | numero1 | numero2 | resultado |
    | 2       | 3       | 5         |
    | -2      | 2       | 0         |
    | 0       | 0       | 0         |
    | 10      | -5      | 5         |