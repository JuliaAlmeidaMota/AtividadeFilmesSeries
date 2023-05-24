import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';
import {filmeStyle} from './styles/styles'
export default function App() {

  
  const filmes = [
    {
      titulo : 'A morte do demônio a ascensão',
      sinopse : 'É um filme de terror slasher que faz parte da clássica franquia A Morte do Demônio(Evil Dead), que teve o primeiro título lançado em 1981. No filme, Beth (Lily Sullivan) vai até Los Angeles para visitar sua irmã mais velha, Ellie (Alyssa Sutherland), que mora com os três filhos em um pequeno apartamento. Com uma relação distante, essa seria a oportunidade para uma reaproximação entre as irmãs. Porém, o reencontro toma um rumo macabro quando as crianças de Ellie encontram um livro antigo que dá vida a demônios possuidores de carne. Agora, para sobreviverem, serão forçadas a enfrentar uma versão aterrorizante da família.',
      imagem : 'https://cinemacomrapadura.com.br/imagens/2023/01/20230105-a-morte-do-demonio-a-ascencao-poster-960x1200.jpg'
    },

    {
      titulo : 'Coraline e o mundo secreto',
      sinopse : 'Coraline Jones está entediada em sua nova casa, até que encontra uma porta secreta e descobre uma versão alternativa de sua própria vida do outro lado. Aparentemente esta realidade paralela é muito similar a sua vida e as pessoas com quem convive, só que é muito melhor. Quando este mundo aparentemente perfeito fica perigoso e seus pais alternativos tentam aprisioná-la para sempre, Coraline terá que contar com sua habilidade, determinação e bravura para escapar dete mundo cada vez mais arriscado, e salvar sua verdadeira familia.',
      imagem : 'https://th.bing.com/th/id/OIP.v8EibHcithQXsN0ENPPVgQHaJ4?pid=ImgDet&rs=1'
    },

    {
      titulo : 'Todo mundo em pânico',
      sinopse : 'Depois do assassinato de uma bela colega de classe, um grupo de adolescentes desorientados descobre que há um assassino entre eles. A heroína Cindy Campbell e a sua turma de amigos mauricinhos e patricinhas, tentam se proteger do perigo... Mas uma reporter irritante, Gail Hailstorm, simplesmente não os deixa em paz!.',
      imagem : 'https://i.pinimg.com/originals/c6/d3/1d/c6d31d3cd8bf15820c2d9a89bce3bb61.jpg'
    },

    {
      titulo : '#Alive',
      sinopse : 'Em #Alive, um jovem gamer precisa lutar por sua vida diante de um apocalipse zumbi, se encontrando cercado em seu apartamento. Mas a situação complica ainda mais quando a energia é cortada. Assim, ele não pode mais acessar parentes e amigos online, jogar seu game ou se conectar com o mundo exterior.',
      imagem : 'https://image.tmdb.org/t/p/original/cZ9DYfSY68PVw71IdIEpCjMPkVR.jpg'
    },

    {
      titulo : 'Hereditário',
      sinopse : 'A narrativa segue os passos de uma família que é abalada pela morte da avó, uma mulher que escondia muitos segredos. A partir desse momento, todos começam a ser alvo de acontecimentos sinistros, principalmente a neta mais nova.',
      imagem : 'https://th.bing.com/th/id/OIP.TM5AyOLSVw7t60FTnmAuxAAAAA?pid=ImgDet&rs=1'
    },

    {
      titulo : 'As Branquelas',
      sinopse : 'Em As Branquelas, os irmãos Marcus (Marlon Wayans) e Kevin Copeland (Shawn Wayans) são detetives do FBI que estão com problemas no trabalho. A última investigação da dupla foi um grande fracasso e eles estão sob a ameaça de serem demitidos. Quando um plano para sequestrar as mimadas irmãs Brittany (Maitland Ward) e Tiffany Wilson (Anne Dudek) é descoberto, o caso é entregue aos principais rivais dos irmãos Copeland, os agentes Vincent Gomez (Eddie Velez) e Jack Harper (Lochlyn Munro). Para aumentar ainda mais a humilhação da dupla, eles são escalados para escoltar as jovens mimadas do aeroporto até o local de um evento pelo qual elas esperaram por meses. Porém no trajeto um acidente de carro provoca um verdadeiro desastre: enquanto uma das irmãs arranha o nariz, a outra corta o lábio. Desesperadas, elas se recusam a ir ao evento. É quando,para salvar o emprego, Marcus e Kevin decidem por assumir as identidades das irmãs.',
      imagem : 'https://image.tmdb.org/t/p/original/tW3ovNQsn5jPDB5E9B4KeCNA6kU.jpg'
    },

    {
      titulo : 'Amor com fetiche',
      sinopse : 'Em Amor com Fetiche, no trabalho, Jung Ji Hoo é conhecido por ser franco, frio, certinho, e adorado por suas colegas de trabalho. Um dia, uma das suas colegas abre por engano um pacote dele que a deixa perplexa. No pacote, Ji Woo acha uma coleira preta com espinhos e Ji Hoo esconde a verdade da compra, dizendo que é um presente para seu animal de estimação. Mas, estranhamente, ele nunca fez menção a Ji Woo de ter um animal de estimação. Sem o conhecimento dela, Ji Woo acaba por expor o fetiche sexual do colega para todos do trabalho. Após o acaso, seguem-se longas discussões com Ji Hoo, chegando a um acordo adequado para ambos. Ji Woo embarca em um romance atrevido entregando-se às fantasias de mestre/escravo de Ji Hoo, sendo ela a mestre que dominará o seu colega de trabalho. Mas o que acontece com essa dupla excêntrica quando seu contrato termina?',
      imagem : 'https://th.bing.com/th/id/OIP.i9isDSDMeFTS7DzBwXXzvAAAAA?pid=ImgDet&rs=1'
    },

    {
      titulo : 'Mistério no Mediterrâneo',
      sinopse : 'Um policial de Nova York (Adam Sandler) finalmente consegue levar sua esposa (Jennifer Aniston) em uma tão sonhada viagem pela Europa. Após um encontro casual no voo, eles são convidados para uma reunião de família no iate do bilionário Malcolm Quince - mas Quince é assassinado e eles se tornam os principais suspeitos do crime!',
      imagem : 'https://woomagazine.com.br/wp-content/uploads/2019/06/vgZg2VmfqdfcBy8C0o5qfRXCCBK-683x1024.jpg'
    },

    {
      titulo : 'Mistério em Paris',
      sinopse : 'Mistério em Paris é a sequência de Mistério no Mediterrâneo. Prepare seu passaporte e mochila de aventuras, Nick Spitz (Adam Sandler) e Audrey Spitz (Jennifer Aniston) estão de malas prontas para resolver outro mistério internacional. Depois dos eventos do primeiro longa, Nick e Audrey sofrem com o fracasso da agência de investigações que eles abriram. Agora detetives profissionais e em tempo integral, tentando fazer a agência de investigação ficar mais popular, dessa vez uma viagem para Paris cai no colo do casal. Quando tudo parece estar desandando de vez, o amigo em comum Maharajah (Adeel Akhtar) entra em contato comunicando que irá se casar; e o casal parte para um casamento indiano milionário com todo luxo que os convidados têm direito. Mas Maharajah é sequestrado no meio de sua própria festa de casamento e é então que começa uma caçada internacional da dupla de investigadores para resgatar o amigo milionário.',
      imagem : 'https://br.web.img2.acsta.net/c_310_420/pictures/23/04/03/16/27/2188262.jpg'
    },

    {
      titulo : 'Click',
      sinopse : 'Em Click, Michael Newman (Adam Sandler) é casado com Donna (Kate Beckinsale) e tem dois filhos. Ele tem dificuldades em ver sua família, visto que passa bastante tempo no escritório de arquitetura em que trabalha, no intuito de chamar a atenção de seu chefe (David Hasselhoff). Porém, após entrar em uma loja com intuito de comprar um novo controle remoto para sua casa, parece ter encontrado uma solução para seu problema. Isso porque, ao chegar no local, conhece o excêntrico funcionário Morty (Christopher Walken), e acaba comprando um controle remoto experimental, com a promessa de facilitar sua vida. Michael logo descobre que o controle possui outras funções, como abafar o som dos latidos de seu cachorro e também adiantar os fatos de sua própria vida, o que mudará as coisas para sempre, não necessariamente para melhor',
      imagem : 'https://th.bing.com/th/id/OIP.6e-ALLMNLvdE8vQ4BP0G6QAAAA?pid=ImgDet&rs=1'
    },
 ].map((value, index) => 
 <li key={index}>
  <h2>{value.titulo}</h2>
  <img src={value.imagem} width="250px" height="350px" />
  <h3>{value.sinopse}</h3>
 </li>
 )

  const series = [
    {
      titulo : 'Dahmer um canibal americano',
      sinopse : 'Dahmer: Um Canibal Americano, essa minissérie de Ryan Murphy, acompanha a trajetória do infame serial killer Jeffrey Dahmer (Evan Peters). A produção explora a juventude do assassino até sua vida adulta e traz um retrato complexo da mente por trás do monstro que tirou a vida de 17 homens e meninos.',
      imagem : 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/67ujv4O6AalmGu3UaVSNdcw8juT.jpg'
    },
    
    {
      titulo : 'Alice in borderland',
      sinopse : 'Alice in Borderland acompanha Ryohei Arisu (Kento Yamazaki), um jovem desempregado que passa boa parte do tempo jogando videogame. Certo dia, ele acorda e se depara com uma Tóquio completamente diferente do que está acostumado. Nessa estranha versão da cidade, Arisu e seus amigos viram personagens de um perigoso jogo e precisam seguir as regras para sobreviver. Tendo conhecido Usagi (Tao Tsuchiya), uma garota que se move sozinha na disputa, Arusi decide se juntar a ela para desvendar os segredos do novo mundo paralelo. Juntos, os dois se aventuram nessa Tóquio distópica e cheia de perigos na expectativa de descobrir o que está acontecendo. Enquanto adentram essa aventuram, eles descobrem segredos impensáveis e percebem que existe muito mais por trás de toda essa bizarra situação. Enquanto navegam por esse estranho novo mundo, as situações se tornam cada vez mais extremas e perigosa.',
      imagem : 'https://th.bing.com/th/id/R.d96d946ffade0adfcead93aa76d4564a?rik=CqjSnuIVjWtoUA&pid=ImgRaw&r=0'
    },

    {
      titulo : 'Areia Movediça',
      sinopse : 'Quando um tiroteio em massa acontece em uma escola preparatória do bairro mais rico de Estocolmo, a estudante Maja Norberg é acusada de participar do crime. Durante o julgamento, muitos detalhes sobre seu relacionamento com Sebastian Fagerman e sua família são revelados. Mas seria a adolescente realmente culpada ou mais uma vítima?',
      imagem : 'https://th.bing.com/th/id/OIP.sVRggt4NKbF4-88tuJSyBwHaKu?pid=ImgDet&rs=1'
    },

    {
      titulo : 'Sweet Home',
      sinopse : 'Em Sweet Home, Cha Hyun-Soo é um estudante do ensino médio. Um dia, toda sua família, exceto ele, morre em um acidente de carro. Cha Hyun-Soo é deixado sozinho e se muda para um pequeno apartamento. Neste momento, um fenômeno misterioso de humanos se transformando em monstros ocorre em todo o mundo. Os residentes do prédio de apartamentos de Cha Hyun-Soo, incluindo Pyeon Sang-Wook, lutam contra esses monstros e tentam sobreviver.',
      imagem : 'https://th.bing.com/th/id/R.ecc2414a803173737f37b733c5cbd620?rik=smDv825mmMjN5Q&pid=ImgRaw&r=0'
    },

    {
      titulo : 'Stranger Things',
      sinopse : 'Situada no início dos anos 1980, Stranger Things se passa na cidade rural fictícia de Hawkins, Indiana. Como fachada, o laboratório da região realizava experimentos científicos para o Departamento de Energia Americano, quando na realidade, os pesquisadores ali investiram em experimentos com o paranormal e o sobrenatural, incluindo o uso de cobaias humanas. Não intencionalmente, eles criaram um portal para uma dimensão alternativa conhecida como Mundo Invertido, o que iria impactar a vida dos residentes da pequena cidade. Em 1983, quando Will Byers (Noah Schnapp), um menino de 12 anos, desaparece misteriosamente, o xerife Jim Hopper (David Harbour) inicia uma operação para encontrá-lo. Enquanto isso, Mike (Finn Wolfhard), Dustin (Gaten Matarazzo) e Lucas (Caleb McLaughlin), melhores amigos de Will, decidem procurá-lo por conta própria. Mas as investigações acabam levando o grupo em direção aos experimentos secretos do governo e a Eleven (Millie Bobby Brown), uma peculiar menina perdida na floresta. Assim como as crianças, a mãe Joyce Byers (Winona Ryder) está determinada e fará o impossível para rever o filho.',
      imagem : 'https://th.bing.com/th/id/R.9f0342c560acde410ec1e3b48223bb5e?rik=CfykZIFXUrQQVQ&pid=ImgRaw&r=0'
    },

    {
      titulo : 'All of us are dead',
      sinopse : 'Baseado no webtoon de sucesso chamado Now at Our School, a série All Of Us Are Dead narra a história de um grupo de alunos do ensino médio que precisam encarar uma situação de perigo extremo. A rotina da escola Hyosan seguia normal quando um vírus zumbi começa a se espalhar rapidamente. Os sobreviventes agora se encontram fadados a ficarem presos no perímetro da escola. Conforme as horas passam, fica mais difícil o acesso a comunicação com o mundo exterior, e o estoque de comida e armas começam a diminuir, o que consequentemente eleva o risco de cada um dos alunos remanescentes permanecerem seguros. Presos, eles buscam alguma saída enquanto precisam sobreviver à versões zumbis de seus professores e amigos que perderam ao longo do caminho. Enquanto isso, do lado de fora, as autoridades buscam maneiras de conter o avanço do vírus, ao mesmo tempo em que cientistas procuram entender a doença, como se comportam os humanos transformados em zumbis, para assim produzirem uma cura ou pelo menos desacelerar o contágio.',
      imagem : 'https://seuladogeek.com.br/wp-content/uploads/2022/02/All-of-Us-Are-Dead-netflix-350x525.jpg'
    },

    {
      titulo : 'Round 6',
      sinopse : 'Round 6, série sul-coreana original da Netflix, acompanha um grupo de pessoas desesperadas por dinheiro que recebem um misterioso convite para participar de jogos competitivos inspirados em brincadeiras infantis. Sem saber qualquer coisa sobre o convite, centenas de pessoas comparecem ao local para participar do evento.  Ao final do jogo, o vencedor poderá levar para casa um prêmio milionário e resolver todas as suas dívidas. Porém, o que eles não sabem é que os perdedores não saírão vivos desse jogo. Agora os competidores precisarão lutar para sobreviver a essa macabra disputa.',
      imagem : 'https://th.bing.com/th/id/R.b5c522e07a9ab820f6762fc2dd849788?rik=eBgWBeiwpaIUmQ&pid=ImgRaw&r=0'
    },

    {
      titulo : 'A maldição da resedência hill',
      sinopse : 'Shirley (Elizabeth Reaser/Lulu Wilson), Theo (Kate Siegel/Mckenna Grace), Nell (Victoria Pedretti/Violet McGraw), Luke (Oliver Jackson-Cohen/Julian Hilliard) e Steven (Michiel Huisman/Paxton Singleton) são cinco irmãos que cresceram na mansão Hill, a casa mal-assombrada mais famosa dos Estados Unidos. Agora adultos, eles retornam ao antigo lar e são forçados a confrontar os fantasmas do passado, após o suicídio da irmã mais nova.',
      imagem : 'https://th.bing.com/th/id/OIP.LZAFhCdrbG0cRamJSFxUvAHaLH?pid=ImgDet&rs=1'
    },

    {
      titulo : 'Orange Is the New Black',
      sinopse : 'Piper Chapman (Taylor Schilling) é uma mulher por volta de seus 30 anos que é sentenciada a 15 meses de prisão após ter cometido crimes para sua ex-namorada, a traficante Alex (Laura Prepon) — que não vê há mais de uma década. Piper troca a sua vida confortável de Nova York, com o noivo Larry (Jason Biggs), pelo macacão laranja, e cumpre sua sentença na Penitenciária Feminina de Litchfield. Para sobreviver, ela precisa aprender a conviver com as outras detentas, como Red (Kate Mulgrew), Nicky (Natasha Lyonne), Taystee (Danielle Brooks) e Crazy Eyes (Uzo Aduba). O que Piper não espera é encontrar a ex cumprindo pena no mesmo lugar.',
      imagem : 'https://fr.web.img2.acsta.net/pictures/14/05/26/14/18/466118.jpg'
    },

    {
      titulo : 'Good girls',
      sinopse : 'Beth Boland (Christina Hendricks), Annie Marks (Mae Whitman) e Ruby Hill (Retta) são três mães de família tentando lidar com problemas financeiros e maternais. Cansadas de estarem sempre perdendo, elas decidem planejar um assalto a um supermercado, mas o sucesso do plano faz com que fiquem no meio de uma operação ainda maior e mais perigosa.',
      imagem : 'https://th.bing.com/th/id/OIP.totAPhvTbruqBnuZ7w15OAAAAA?pid=ImgDet&rs=1'
    },
 ].map((value, index) => <li key={index}>
 <h2>{value.titulo}</h2>
 <img src={value.imagem} width="250px" height="350px" />
 <h3>{value.sinopse}</h3>
</li>)

  return (
    <View style={filmeStyle.container}>
        <h1>Filmes</h1>
        <div style={filmeStyle.w100}>
        <ul style={filmeStyle.w75}>{filmes}</ul>
        </div>

        <h1>Séries</h1>
        <div style={filmeStyle.w100}>
        <ul style={filmeStyle.w75}>{series}</ul>
        </div>
      <StatusBar style="auto" />
      <hr style={filmeStyle.h100}></hr>
      <footer>
        Criado por Julia Almeida Mota
      </footer>
    </View>
  );
}
