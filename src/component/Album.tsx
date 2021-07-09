import { Modal } from "@material-ui/core";
import { Cutscene } from "./Cutscene";

const ALBUMS = [
  {
    title: "Mastering Rhythm",
    dialogue: [
      {
        speaker: "neon",
        text: "Master Cadence, I’ve traveled too far to come here. I *demand* that you teach me rhythm."
      },
      {
        speaker: "cadence",
        text: "Well **that's** a fine ‘good morning’. What's your name?"
      },
      {
        speaker: "neon",
        text: "It's Neon, lady."
      },
      {
        speaker: "cadence",
        text: "Well, Neon, I’m afraid I can't teach you anything new without fixing what you already have."
      },
      {
        speaker: "neon",
        text: "Wh… huh?"
      },
      {
        speaker: "cadence",
        text: "Step inside, we’ve got a lot of work to do."
      },
    ]
  }
];

function Album({index, acknowledge} : {index: number, acknowledge: any}) {
  const album = ALBUMS[index];
  return <Modal open={true} onClose={acknowledge} onClick={acknowledge}>
    <Cutscene skip={acknowledge} dialogue={album.dialogue} header={<h1>Album {index}: {album.title}</h1>}/>
  </Modal>;
}

export default Album;