from time import sleep
import pygame
from pygame.locals import *
from sys import exit
from random import randint

pygame.init()

perdeu_font = pygame.font.SysFont('arial', 100, True, True)
def game_over():
    # Renderiza o Texto
    game_over_text = perdeu_font.render(f"GAME OVER", True, (200, 200, 200))

    # Desenhando os elementos
    tela.fill((0, 0, 0))
    tela.blit(game_over_text, (largura/2 - (game_over_text.get_width()/2),
              altura/2 - game_over_text.get_height()/2))

    pygame.display.update()
    sleep(3)
    pygame.quit()
    exit()


# Construindo a tela
largura = int(620)
altura = int(620)
img = pygame.image.load('./assets/background.jpg')
tela = pygame.display.set_mode((largura, altura))
pygame.display.set_caption('Jogo')

# Movimentar personagem / Spawn do personagem  
movimento_x = randint(40, 600)
movimento_y = randint(40, 600)

# Spawn dos inimigo
x_inimigo1 = randint(40, 600)
y_inimigo1 = randint(50, 600)

x_inimigo2 = randint(40, 600)
y_inimigo2 = randint(50, 600)


x_inimigo3 = largura/2
y_inimigo3 = altura/2

x_inimigo4 = largura/2
y_inimigo4 = altura/2

x_comida = randint(40, 600)
y_comida = randint(50, 600)

# Font dos pontos
font = pygame.font.SysFont('arial', 20, True, True)

# Para controlar os pontos
pontos = int(0)

# Velocidade do jogo
fps = pygame.time.Clock()

janela_aberta = True
while janela_aberta:

  for event in pygame.event.get():
    if event.type == QUIT:
      pygame.quit()
      exit()

  # Velocidade do jogo
  fps.tick(60)

  # Tela de fundo
  tela.blit(img, (0,0))

  # Altera o placar
  placar = f'Pontos: {pontos}'

  # Renderiza o placar
  placar_formatado = font.render(placar, True, (255, 255, 255))

  # Teclas para controlar o personagem
  if pygame.key.get_pressed()[K_LEFT]:
    movimento_x -= 5
  if pygame.key.get_pressed()[K_RIGHT]:
    movimento_x += 5
  if pygame.key.get_pressed()[K_UP]:
    movimento_y -= 5
  if pygame.key.get_pressed()[K_DOWN]:
    movimento_y += 5

  #cria o personagem
  personagem = pygame.draw.rect(tela, (0, 255, 0), (movimento_x, movimento_y, 20, 20))

  #cria a comida
  comida = pygame.draw.rect(tela, (0, 0, 255), (x_comida, y_comida, 20, 20))

  #cria os inimigos
  inimigo1 = pygame.draw.rect(tela, (255, 0, 0), (x_inimigo1, y_inimigo1, 50, 50))
  inimigo2 = pygame.draw.rect(tela, (255, 255, 0), (x_inimigo2, y_inimigo2, 50, 50))
  inimigo3 = pygame.draw.circle(tela, (0, 255, 255), (x_inimigo3, y_inimigo3),50)
  inimigo4 = pygame.draw.circle(tela, (0, 255, 255), (x_inimigo4, y_inimigo4),50)

  #circulo vertical
  if y_inimigo3 >= altura:
    y_inimigo3 = 0
  else:
    y_inimigo3 += 3
  
  #circulo horizontal
  if x_inimigo4 >= altura:
    x_inimigo4 = 0
  else:
    x_inimigo4 += 3
  
  if movimento_x >= 600:
    game_over()

  # detecta a colisão do inimigo 1
  if inimigo1.colliderect(personagem):
    x_inimigo1 = randint(40, 600)
    y_inimigo1 = randint(50, 600)
    pontos -= 5
    if pontos < 0:
      tela.fill((0, 0, 0))
      game_over()

  # detecta a colisão do inimigo 2
  if inimigo2.colliderect(personagem):
    x_inimigo2 = randint(40, 600)
    y_inimigo2 = randint(50, 600)
    pontos -= 1
    if pontos < 0:
      tela.fill((0, 0, 0))
      game_over()

  # detecta a colisão do inimigo 3
  if inimigo3.colliderect(personagem):
    pontos -= 2
    if pontos < 0:
      tela.fill((0, 0, 0))
      game_over()

  # detecta colisão da comida
  if comida.colliderect(personagem):
    x_comida = randint(40, 600)
    y_comida = randint(50, 600)
    pontos += 2

  tela.blit(placar_formatado, (10, 0))
  pygame.display.update()
