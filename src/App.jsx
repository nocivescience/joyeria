import { useEffect, useState } from 'react'
import {Navbar} from './components/Navbar';
import {Home} from './components/Home'
import {data} from './files/activities';
import { Gallery } from "./components/Gallery";
import {Form} from './components/Form';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {History} from './components/History'
import mirando from "./images/mirando.jpg";
import anillo from "./images/anillo.jpg";
import blackblondie from "./images/blackblondie.jpg";
import blacklady from "./images/blacklady.jpg";
import chain from "./images/chain.jpg";
import fondo from "./images/fondo.webp";
import fondo3 from "./images/fondo3.jpg";
import jacket from "./images/jacket.jpg";
import laughing from "./images/laughing.jpg";
import morena from "./images/morena.jpg";
import mujertriste from "./images/mujertriste.jpg";
import sombrerorojo from "./images/sombrerorojo.jpg";
import taza from "./images/taza.jpg";
import womandreaming from "./images/womandreaming.jpg";
import matrimonio from "./images/matrimonio.jpg";
import luxury from "./images/luxury.jpg";
import mask from "./images/mask.jpg";
import native from "./images/native.jpg";
import whitehat from "./images/whitehat.jpg";
import pearsing from "./images/pearsing.jpg";
import collar_lujoso from "./images/collar_lujoso.jpg";
import anillo_lujoso from "./images/anillo_lujoso.jpg";
import purpura from "./images/purpura.jpg";
import fotografa from "./images/fotografa.jpg";
import anillo_antiguo from "./images/anillo_antiguo.jpg";
import boda from "./images/boda.jpg";
import manos from "./images/manos.jpg";
import rubia from "./images/rubia.jpg";

function App() {
  const [tasks, setTasks] = useState([])
  useEffect(()=>{
    setTasks(data)
  },[])
  function createTask(titleTasks,descriptionTask,optionTask){
    setTasks([...tasks,{
      id: tasks.length+1,
      title: titleTasks,
      description: descriptionTask,
      option:optionTask
    }])
  }
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/mirando' element={<History source={mirando} detail='Mollit eiusmod proident dolore ut proident quis Lorem adipisicing fugiat veniam dolore id dolor est. Quis laborum officia minim sint dolore pariatur. Aute fugiat fugiat proident do dolor nostrud dolore magna.'/>}/>
          <Route path='/taza' element={<History source={taza} detail='Ut eiusmod ex sint aute mollit commodo eu aliqua dolor. Occaecat excepteur amet deserunt ut eiusmod ullamco labore cupidatat sunt ipsum sit minim. Adipisicing ipsum aliqua amet eu laborum laboris ad eiusmod ex nisi non. Elit amet deserunt esse anim tempor consectetur occaecat elit quis est esse officia in proident. Pariatur cillum anim laboris deserunt quis esse tempor consequat. Proident dolore nulla mollit in.'/>}/>
          <Route path='/anillo' element={<History source={anillo} detail='Ex laborum deserunt quis dolor do cupidatat cupidatat esse esse non enim reprehenderit. Magna proident est sint ipsum tempor sint cupidatat fugiat non ipsum cillum eiusmod duis duis. Proident eu velit in sint nulla in nulla exercitation nulla laborum deserunt.'/>}/>
          <Route path='/blacklady' element={<History source={blacklady} detail='Exercitation magna eiusmod irure magna aute consectetur aliquip mollit incididunt cillum. Aliqua voluptate mollit sunt dolor minim quis mollit aliqua eiusmod laboris occaecat id cupidatat eu. Fugiat tempor minim enim et incididunt minim sunt enim. Eiusmod nisi consequat quis proident ea. Do laborum eu ad non. Veniam voluptate ex non id qui dolore excepteur nostrud laboris. Nostrud laboris ullamco nisi excepteur incididunt.'/>}/>
          <Route path='/whitehat' element={<History source={whitehat} detail='Laborum cupidatat magna minim ullamco minim voluptate adipisicing reprehenderit Lorem consequat sit consequat. Reprehenderit consectetur eu commodo nulla culpa. Laboris ipsum pariatur reprehenderit ad ipsum. Sit exercitation ullamco id eiusmod adipisicing veniam deserunt consectetur ea. Nulla amet voluptate aute cupidatat id tempor excepteur duis sint voluptate ullamco qui esse aliquip. Laboris aliqua pariatur est cillum. Esse cillum consequat sunt aliqua laboris cupidatat commodo dolore sunt aliqua.'/>}/>
          <Route path='/jacket' element={<History source={jacket} detail='Sit fugiat aliqua ipsum labore ex ut quis. Consequat pariatur deserunt commodo veniam anim dolor eu ullamco. Elit eiusmod eiusmod dolore reprehenderit fugiat dolor excepteur occaecat ex esse veniam magna non officia. Fugiat sit aliquip eiusmod eiusmod adipisicing est ea. Dolore ipsum quis aute duis et non cillum. Ea in et aliqua sunt laboris duis laborum commodo velit incididunt adipisicing aute. Adipisicing dolore cupidatat qui exercitation ea nostrud consequat.'/>}/>
          <Route path='/laughing' element={<History source={laughing} detail='Fugiat laboris officia cupidatat occaecat non eiusmod veniam aute. Officia ut ipsum irure aliqua ea dolore reprehenderit quis eiusmod excepteur officia Lorem. Ipsum eu proident mollit quis dolore esse Lorem cillum eu. Laborum laborum dolor tempor minim laboris. Reprehenderit do irure commodo proident non deserunt. Ullamco occaecat in reprehenderit in mollit aliqua dolore consequat laborum pariatur dolore. Nisi do ullamco cillum non ullamco incididunt cillum.'/>}/>
          <Route path='/morena' element={<History source={morena} detail='Ea occaecat veniam nulla ut. Aliquip cupidatat sit enim in enim pariatur culpa consectetur quis. Commodo dolore irure ut ex ex labore anim quis consectetur adipisicing Lorem. Nostrud ex ullamco consectetur laboris amet ipsum qui ex. Nostrud reprehenderit sint culpa laborum labore nulla exercitation ipsum aute.'/>}/>
          <Route path='/chain' element={<History source={chain} detail='Voluptate pariatur sint mollit ut veniam proident cupidatat ea. Tempor consectetur ea sit Lorem aute adipisicing aute anim. Cillum aute voluptate culpa laboris magna proident.'/>}/>
          <Route path='/fondo' element={<History source={fondo} detail='Nulla sint quis ipsum qui veniam. Eiusmod aute nulla ut ad amet ad occaecat in anim minim. Qui velit pariatur ad minim irure incididunt proident. Duis eiusmod tempor veniam ipsum anim culpa pariatur nulla ipsum mollit ea ipsum enim ullamco. Fugiat sint aute non eu anim. Nostrud eiusmod occaecat dolor velit mollit tempor officia pariatur enim in. Do culpa aliqua sint veniam ea dolor consectetur enim nostrud.'/>}/>
          <Route path='/mujertriste' element={<History source={mujertriste} detail='Occaecat qui aliqua enim velit ut quis commodo reprehenderit dolore ex pariatur. Voluptate sunt eu duis irure officia reprehenderit voluptate id minim. Sint laborum magna excepteur ea cupidatat Lorem officia irure. Voluptate et et culpa dolor. Labore id fugiat irure excepteur laborum nulla ex commodo. Ex in eu dolor reprehenderit ea magna anim mollit culpa incididunt aliquip est. Sunt consectetur adipisicing eiusmod ullamco pariatur veniam mollit aute aute est.'/>}/>
          <Route path='/sombrerorojo' element={<History source={sombrerorojo} detail='Mollit aliqua adipisicing aliquip qui aute. Lorem fugiat anim id non exercitation est sit fugiat aute sunt labore duis aute. Commodo aliqua nulla ex dolore incididunt eu anim deserunt quis. Officia pariatur esse nulla sunt mollit aute incididunt duis commodo.'/>}/>
          <Route path='/womandreaming' element={<History source={womandreaming} detail='Nostrud voluptate sint in elit tempor mollit consectetur dolore consectetur et dolore adipisicing. Fugiat consectetur deserunt elit anim sunt nulla nisi non enim exercitation commodo consectetur sit esse. Incididunt ipsum non irure enim. Ad qui et pariatur reprehenderit exercitation excepteur enim. Incididunt laborum eu excepteur veniam sit non aliqua labore ullamco. Quis cupidatat elit quis id amet officia culpa laboris culpa do sint velit.'/>}/>
          <Route path='/matrimonio' element={<History source={matrimonio} detail='Do esse do voluptate aliqua exercitation eu ea aliqua adipisicing ipsum officia. Velit commodo mollit sint do quis sint consequat nisi tempor. Occaecat nisi ea magna ea mollit dolore nostrud. Occaecat ex adipisicing ipsum nostrud aliquip aute cupidatat velit exercitation. Nisi aliqua adipisicing proident consequat minim dolore. Dolor aliqua anim ut excepteur id laboris.'/>}/>
          <Route path='/blackblondie' element={<History source={blackblondie} detail='Nulla dolore cupidatat mollit ullamco mollit nisi irure mollit proident labore qui non ea eiusmod. Anim voluptate in deserunt fugiat nulla qui consequat qui quis mollit in. Nulla adipisicing est do laboris minim sit laborum magna pariatur mollit veniam quis cupidatat. Amet mollit eu aliquip consequat labore enim exercitation occaecat exercitation in dolor. Adipisicing aliquip non nisi mollit non veniam cupidatat ullamco ipsum culpa eiusmod laborum. Ad anim ullamco sit ut nulla et ut fugiat qui occaecat irure.'/>}/>
          <Route path='/luxury' element={<History source={luxury} detail='Ex in ad sit id excepteur. Incididunt in veniam non est et amet veniam incididunt amet sunt exercitation culpa magna elit. Eu eiusmod nulla mollit labore do in nulla.'/>}/>
          <Route path='/mask' element={<History source={mask} detail='Quis proident adipisicing consectetur ut in commodo culpa nulla esse. Id occaecat nulla et aute officia qui adipisicing pariatur. Laboris ex esse minim qui sit officia id irure. Velit est proident irure incididunt minim id ipsum officia velit. Qui quis do sunt laboris tempor tempor.'/>}/>
          <Route path='/native' element={<History source={native} detail='Dolore nostrud eiusmod incididunt elit. Consequat excepteur labore ut aliquip occaecat esse ad. Qui officia proident Lorem enim sunt minim culpa veniam consequat adipisicing commodo. Et in culpa aliqua pariatur do tempor esse.'/>}/>
          <Route path='/fotografa' element={<History source={fotografa} detail='Cupidatat Lorem irure pariatur ea esse sint sit dolor ullamco officia esse nulla labore velit. Laboris in nulla aute adipisicing reprehenderit veniam. Dolor nulla irure aute proident fugiat occaecat do. Irure dolor amet pariatur nulla velit ad amet. Reprehenderit ullamco esse qui voluptate esse anim veniam nulla labore ipsum veniam non ea. Lorem eiusmod eu est in veniam irure Lorem duis qui sunt ut ullamco id pariatur..'/>}/>
          <Route path='/pearsing' element={<History source={pearsing} detail='Esse deserunt ea elit id tempor deserunt sunt consectetur esse eiusmod do et. Commodo cillum irure ipsum officia aute ipsum ullamco proident irure amet duis nulla. Aliqua incididunt sit mollit aliquip incididunt est anim amet. Labore aute aliqua anim ea Lorem laboris cupidatat consectetur magna veniam deserunt deserunt velit ipsum. Labore culpa id ullamco aute.'/>}/>
          <Route path='/collar_lujoso' element={<History source={collar_lujoso} detail='Deserunt consequat do nisi proident consequat exercitation occaecat aliqua adipisicing aliquip. Eiusmod tempor adipisicing excepteur est sit tempor incididunt elit anim adipisicing anim ad. Eu culpa veniam laboris incididunt veniam enim tempor ut eu sit nostrud reprehenderit. Qui et amet mollit eu amet. Dolore ad cupidatat velit exercitation est minim. Fugiat aute minim laboris magna deserunt consectetur sit et sunt enim velit exercitation. Cupidatat dolore laborum do nostrud.'/>}/>
          <Route path='/anillo_lujoso' element={<History source={anillo_lujoso} detail='Proident dolore labore fugiat nulla aute duis mollit qui excepteur adipisicing ullamco laborum. Nisi proident minim qui sunt eiusmod nulla sint commodo est qui ipsum commodo culpa. In ad elit sunt in eu laboris. Velit in cupidatat enim aliquip culpa ullamco dolor.'/>}/>
          <Route path='/purpura' element={<History source={purpura} detail='Esse laborum laboris aliqua anim proident proident tempor ut. Quis cupidatat magna quis nisi quis non ullamco quis excepteur aliquip excepteur commodo et in. Quis culpa culpa aute esse aute. Fugiat ea enim adipisicing in nulla in. Reprehenderit exercitation et id quis nisi aliquip id ad irure pariatur in culpa fugiat. Laboris ex duis qui laborum incididunt ut consequat ipsum. Ex anim labore proident Lorem incididunt sint cupidatat duis anim tempor duis nulla ea mollit.'/>}/>
          <Route path='/fondo3' element={<History source={fondo3} detail='Eiusmod excepteur ex deserunt officia cillum enim deserunt ad nostrud sunt laborum veniam. Lorem deserunt ipsum qui enim enim incididunt Lorem officia consequat dolore. Velit consectetur ullamco eu Lorem irure amet in consectetur ullamco aliqua sunt ea exercitation.'/>}/>
          <Route path='/anillo_antiguo' element={<History source={anillo_antiguo} detail='Eu non labore ut est sint. Tempor aute eu Lorem ullamco ipsum magna aliqua. Qui fugiat pariatur elit eu nisi esse nostrud laborum. Ut et enim dolor amet excepteur incididunt aute nisi. Ullamco ex commodo proident laborum officia anim nostrud eiusmod officia tempor.'/>}/>
          <Route path='/boda' element={<History source={boda} detail='Nulla laborum proident sit dolor labore sunt excepteur ipsum pariatur velit do. Esse qui laboris officia dolor nostrud occaecat eiusmod laborum sit id consectetur esse eu labore. Consectetur aliquip voluptate labore pariatur Lorem cupidatat. Eiusmod dolore fugiat non aliquip id amet officia cupidatat. Consectetur cillum irure minim adipisicing amet eiusmod ullamco sint non dolore elit ut minim sit.'/>}/>
          <Route path='/rubia' element={<History source={rubia} detail='Aliquip eiusmod anim tempor est fugiat consequat do consectetur pariatur aute reprehenderit sunt anim ipsum. Excepteur non amet ad incididunt irure cillum proident velit. Laboris adipisicing est officia sit labore sit nostrud ipsum dolor. Laboris minim veniam qui exercitation duis aliqua proident reprehenderit consequat veniam consequat adipisicing. Proident et mollit sint officia incididunt sit culpa nostrud reprehenderit nulla.'/>}/>
          <Route path='/manos' element={<History source={manos} detail='Eiusmod in tempor sint laborum sit voluptate mollit. Non commodo labore nostrud culpa officia. Non ex excepteur culpa pariatur. Qui reprehenderit labore tempor id occaecat ex velit velit velit id voluptate irure ullamco. Quis nisi ut culpa elit ex adipisicing magna pariatur. Ea sunt officia aliquip ea duis dolor.'/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App