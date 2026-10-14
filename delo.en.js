/*
  РАССЛЕДОВАНИЕ (вкладка «Дело»): материалы уголовного дела, которые игрок вскрывает по мере игры.

  Как устроено:
  open      лист открыт сразу
  seal      «серая» печать: обычная улика, вскрывается одним нажатием
  red       красная печать: спойлер, перед вскрытием сайт переспросит
  img       путь к картинке (пусто — висит рамка «фото приложено позже»); cap — подпись под снимком
  from      из какого старта приходит улика (подсказка игроку)
  lines     абзацы текста; строки, начинающиеся с «✎ », пишутся ручкой на полях
  Что вскрыто, браузер помнит сам; кнопка внизу страницы запечатывает всё обратно.
*/
window.DELO = {
  no: '1147',
  title: 'into the murder of an unidentified man',
  name: 'Ryabtsev Anatoly Viktorovich',
  opened: '8 October 1996',
  who: 'Kirovsky District Prosecutor’s Office, Senior Investigator Trofimov G. I.',
  ops: 'Operational support: CID, GUVD St Petersburg (Major Gromov V. S.), CID, Kirovsky OVD (Major Tikhonov A. P.)',

  guide: {
    title: 'A note for whoever picked up this case',
    lines: [
      'This case runs through every start. Wherever you begin, Vitya and Lyosha have the same body by the garages on Zaitseva on their desk, and the threads leading to it are scattered across all the stories.',
      'Want to dig? Dig: question the heroes, go along with them, track people down. Don’t want to? The case will tick along in the background: phone calls, the pager, Lyosha popping out “for a minute”, a piece in the paper.',
      'The case moves by the story, not by the calendar: the body, the name, the fire, the truth. The next stage comes when the plot takes a breath: a new day, a phone call, Lyosha popping out “for a minute”. No more than one per in-game day, and never in the middle of your scenes with the heroes.',
      'Open the envelopes once you reach them in the game. Grey seals are ordinary evidence. Red ones are spoilers: they hold things the heroes don’t know yet.',
      '✎ Not everything your own people tell you is true. — V.'
    ]
  },

  fabula: {
    title: 'Sheet 1. The Facts',
    lines: [
      'On 8 October 1996 at 02:05, the Kirovsky OVD duty desk received a call from a payphone: a woman reporting a man’s body in the courtyard of a building on Zaitseva St, by the garages.',
      'At 02:15, Deputy Head of CID, Kirovsky OVD, Major Tikhonov A. P. arrived at the scene; at 02:40, Major Gromov V. S. (GUVD). The body of a man aged 30–35 lies face down by garage No. 17. A single penetrating knife wound, upward under the ribs. No documents, keys or money on the body. The left inside pocket of the jacket has been ripped out.',
      'Twelve witnesses. Each saw something different.',
      '✎ A trained blow. Not a drunken brawl. — V.'
    ]
  },

  people: {
    title: 'Sheet 2. Persons Involved',
    list: [
      {n: 'Unidentified man', r: 'victim', t: '30–35, broken nose, short haircut, tracksuit under a leather jacket. Identity being established.', reveal: 'stage2', real: 'Ryabtsev Anatoly Viktorovich, “Ryaboy”, 31, ex-boxer. Unemployed. Drives a VAZ-2109 in “wet asphalt” grey.'},
      {n: 'The caller', r: 'found the body', t: 'Called at 02:05 from the payphone on the corner. Her voice shook, but she gave the address clearly. That’s you.'},
      {n: 'Gromov Viktor Semyonovich', r: 'Major, CID, GUVD', t: 'Running the murder. Promised the press “we’ll find him”.', img: 'assets/id/viktor.webp'},
      {n: 'Tikhonov Alexei Petrovich', r: 'Major, CID, Kirovsky OVD', t: 'Got there first. It’s his patch.', img: 'assets/id/lesha.webp'},
      {n: 'Trofimov Gennady Ilyich', r: 'Senior Investigator, Prosecutor’s Office', t: 'Officially in charge of the case. Smokes Belomor, grumbles, honest.', img: 'assets/npc/trofimov.webp'},
      {n: 'Kuzmina Zinaida Pavlovna', r: 'witness, 74, flat 3', t: 'Couldn’t sleep, was looking out of the window. Saw “a tall man in a suede jacket” slipping away through the yards.'},
      {n: 'Gusev', r: 'Major, Head of CID, Kirovsky OVD', t: 'Asks to be kept in the loop. Asks very insistently.', img: 'assets/npc/gusev.webp'}
    ]
  },

  evidence: [
    {id: 'protocol', seal: true, title: 'Crime Scene Examination Report', from: 'start “Murder in the Yard”', img: 'assets/yard.webp', cap: 'Yard by the garages, Zaitseva St, 8.10.96',
      lines: ['No signs of a struggle: the victim let the killer get right up close. Knife not found.', 'In the mud by garage No. 17: a sole print, size 44, an imported boot.', 'A Marlboro butt with traces of pale lipstick. Owner not established.', '✎ The killer knew him. Or knew where to strike. Or both. — V.']},
    {id: 'witness', seal: true, title: 'Witness Statements (12)', from: 'door-to-door with residents',
      lines: ['Three saw nothing. Two heard “a scream or a dog”. One “definitely saw a black ‘Volga’”, another “a cherry-red ‘devyatka’”.', 'Kuzmina Z. P., flat 3: “Tall, thin, in a suede jacket. Walked off unhurried, towards Stachek. Looked back once.”', 'Teenager from the fifth floor: around one in the morning two men stood by the garages, “one big, the other in suede”, arguing quietly.', '✎ Suede. Remember that. — L.']},
    {id: 'barsetka', seal: true, title: 'Man-bag', from: 'start “Storm and Naida”', img: '', cap: 'Man-bag, found by the dog 9.10.96',
      lines: ['On 9 October, during a thunderstorm, Naida the shepherd dragged a soaking wet man-bag in from the yard.', 'Inside: 1 400 000 roubles in a wad held with a pharmacy rubber band. A key with a cardboard tag reading “Meat, 14”. A sheet torn from a squared exercise book: a column of sums, each marked “T.”.', 'No documents. No sign of the notebook the sheet was torn from, either.', '✎ He left the money. So it wasn’t the bag he was after. — V.']},
    {id: 'svertok', seal: true, title: 'Parcel “for Tolik”', from: 'start “Got ‘Wings’?”', img: '', cap: 'Three tapes from the kiosk at Avtovo',
      lines: ['A customer the kiosk girl called “Tolik” bought prison songs once a week. At the end of September he left a parcel: “Let it sit here, someone’ll pick it up.”', 'The parcel held three “Thieves’ Hit Parade” tapes. One case had no tape in it: inside were folded squared sheets, the same handwriting, the same column of sums and “T.”, for August and September. Market pavilion numbers.', '✎ He made copies. Smart bloke. Was. — V.']},
    {id: 'devyatka', seal: true, title: 'The “devyatka” at Mikhalych’s', from: 'start “Garage on the Highway”', img: '', cap: 'VAZ-2109 in “wet asphalt” grey, a garage on the Tallinn Highway',
      lines: ['The car was brought in for repairs at the end of September, and the owner never came back for it. Mikhalych called him Tolik.', 'In the glovebox: an Avtovo Market pass in the name of Ryabtsev A. V., a pack of Marlboro, a Motorola pager.', 'Last message on the pager, 7.10.96, 23:48: “GARAGES 2:00. BRING EVERYTHING. K.”', '✎ Who’s “K.”? — V.']},
    {id: 'fire', seal: true, title: 'Fire at Avtovo Market', from: 'night call, stage 3', img: 'assets/starts/market.webp', cap: 'Meat pavilion after the fire, 22.10.96',
      lines: ['The meat pavilion burned down. The watchman, Pyotr Ilyich Sazonov, 64, was found by the door, not on his cot.', 'The lock is intact; the door was opened with a key. Fire brigade: the fire started in the back room where market director Kravets kept his “papers”. The safe is open and empty.', '✎ The “Meat, 14” key. If only we’d twigged sooner. — V.']}
  ],

  stages: [
    {id: 'stage1', red: true, title: 'Stage 1. The Body', when: 'start of the story',
      lines: ['The victim is unidentified. Nothing on him, the pocket ripped out: someone was after something specific.', 'Vitya is angry and worn out and keeps staying late at work. Lyosha is jumpy, and nobody can tell why.', 'Lyosha recognised the dead man at first glance. He didn’t tell Vitya.']},
    {id: 'stage2', red: true, title: 'Stage 2. The Name', when: 'a couple of in-game days later',
      lines: ['Identity established: Ryabtsev Anatoly Viktorovich, “Ryaboy”. A small fry from Avtovo Market who once a week ferried someone’s money and wrote the sums in a squared exercise book. The notebook is missing.', 'Vitya notices that Lyosha knew Ryaboy and is keeping quiet. The first crack between them.', 'Lyosha asks Vitya to help with the case. He won’t say why it matters so much to him.']},
    {id: 'stage3', red: true, title: 'Stage 3. The Fire', when: 'night call',
      lines: ['At night the meat pavilion at Avtovo Market goes up in flames. The watchman was killed with the same blow as Ryaboy. Vitya leaves, even if he was with you.', 'Vitya sees it’s “the same hand”. Lyosha shuts down completely.', 'It gets dangerous: Vitya is being watched, and Lysy’s people may come at him through the ones he cares about. Including you.']},
    {id: 'stage4', red: true, title: 'Stage 4. The Truth', when: 'endgame',
      lines: ['Lyosha can’t keep quiet any longer and tells Vitya what he’s got himself mixed up in. What hurts Vitya isn’t the money, it’s that his brother kept silent.', 'They take the killer.', 'What happens to Lyosha is up to the game: cover it up, turn himself in, give up the people behind it, or something of your own. Either way, Vitya pays.']}
  ],

  secret: [
    {id: 'killer', red: true, deep: true, title: 'Who did it', lines: ['Vadim Kotelnikov, “Kot”, Lysy’s right hand, an ex-detective. The blow is “the way they taught us in CID”. Tall, thin, suede jacket.', 'Gusev knew who carried the money and tipped them off. Now he’s covering it up: stalling the paperwork, losing witnesses.', 'It was Kot who killed Moshkin in the spring, too. Moshkin was selling information to both sides.', 'The goal: grab Ryaboy’s notebook, sink Lyosha with it and hand the market to Lysy. Gusev gets Lyosha’s job, Kot gets his revenge.']},
    {id: 'lesha', red: true, deep: true, title: 'What Lyosha is hiding', lines: ['“T.” is Tikhonov. Ryaboy carried market money into his “department kitty”: wages, kids’ medical bills, funerals, car repairs. Vitya knows nothing about it.', 'In November ’95, on Zhora’s orders, Ryaboy drove Shura Lyonin out to the Obvodny Canal. Lyosha knew, and closed the case as an accident. That’s the last thing Lyosha will ever tell. If he tells at all.']}
  ]
};
