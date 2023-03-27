
import CharacterDescription from "../character-description/character-description";
import EmptyCharacterDescription from "../empty-description/empty-description";
 export default function CharacterDescriptionBlock(props) {
    const {clickOnCharacter, character } = props;
    if (clickOnCharacter === true) {
        return <CharacterDescription character={character}/>
    }
    if (clickOnCharacter === false) {
        return <EmptyCharacterDescription/>
    }
 }