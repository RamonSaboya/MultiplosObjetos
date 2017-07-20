# Tema P3-1: Múltiplos objetos

## Parte geral
Implementar o método de visualização de objetos triangulados, através do algoritmo de conversão por varredura, com métodos de interpolação de Phong, com a visibilidade garantida pelo algoritmo do “z-buffer”.

## Parte específica
Visualizar múltiplos objetos.

## Descrição
O usuário, através de arquivos-texto ou interface gráfica, entra com a quantidade de objetos, e na sequência, os dados dos objetos, os atributos dos objetos (para cada um, ka, kd e ks, pontos flutuantes entre 0 e 1, ponto flutuante positivo e Od, tripla de pontos flutuantes entre 0 e 1), atributos da cena (Ia, IL, triplas de ponto flutuante entre 0 e 255, PL, tripla de ponto flutuante) e os atributos da câmera virtual (C, N e V, triplas de pontos flutuantes, d, hx, e hy, pontos flutuantes positivos). O seu sistema começa preparando a câmera, ortogonalizando V e gerando U, e depois os normalizando, fazer a mudança de coordenadas para o sistema de vista de todos os vértices dos objetos e da posição da fonte de luz PL, gerar as normais dos triângulos e gerar as normais dos vértices (como recomendado em sala de aula). Para cada triângulo de cada objeto, calculam-se as projeções dos seus vértices e inicia-se a sua conversão por varredura. Para cada pixel (x, yscan), calculam-se suas coordenadas baricêntricas com relação aos vértices projetados, e multiplicam-se essas coordenadas pelos correspondentes vértices do triângulo 3D original para se obter uma aproximação para o ponto 3D original correspondente ao pixel atual. Após uma consulta ao z-buffer, se for o caso, calcula-se uma aproximação para a normal do ponto utilizando-se mesmas coordenadas baricêntricas multiplicadas pelas normais dos respectivos vértices originais. Calculam-se também os demais vetores (L, V e R) e os substitui na equação do modelo de iluminação de Phong produzindo a cor do pixel atual.

### Curso
"-" Universidade Federal de Pernambuco <br />
"-" Centro de Informática <br />
"-" Gradução em Ciência da Computação <br />
"-" Processamento Gráfico

### Autores
- Douglas Soares Lins | dsl@cin.ufpe.br
- Luiz Henrique Tavares Caúla | lhtc@cin.ufpe.br
- Rodrigo Cunha da Silva | rcs8@cin.ufpe.br
