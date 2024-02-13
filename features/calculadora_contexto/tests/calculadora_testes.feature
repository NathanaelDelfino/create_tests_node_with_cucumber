Feature: Calculadora funções
  Validando a os calculos
  
  Scenario: Somando dois números na calculadora
    Given Eu entrei o primeiro "1" na calculadora
    And Eu entrei o segundo "2" na calculadora
    When Quando se somar dois números
    Then Eu devo ver o resultado de ser "3" na tela

 Examples:
    | numero1 | numero2 | resultado |
    | 2       | 3       | 5      |
    | -2      | 2       | 0      |
    | 0       | 0       | 0      |
    | 10      | -5      | 5      |


