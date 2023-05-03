import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Documentation = () => {
  return (
    <div className="container lh-lg">
      <div>
        <h1 className="mt-4 mb-4"> Chapter 1</h1>
        <h3> Introduction</h3>
        <p>
          This is as guideline of how users should input the data after walking
          a route. Users are expected to enter all the data points except
          Walkability Score and Time every 250 meters of their route.Walkability
          Score and Time should be entered after ending their route.
        </p>
        <h1 className="mt-4 mb-4">Chapter 2</h1>
        <h3 className="mt-3 mb-3">Training Parameter </h3>
        <h4 className="mt-3 mb-3"> 2.1 Obstacles </h4>
        <h6 className="mt-3 mb-3">2.1.1 Permanent Obstacles </h6>

        <p>
          This is a count based metric. Obstacles that will or may not be
          removed within a considerable period of time, say 3 years. Such
          obstacles include:
        </p>
        <ol>
          <li>Lamp posts</li>
          <li>Trees</li>
          <li>Misplaced buildings</li>
          <li>Trash heaps</li>
          <li>Tongs</li>
        </ol>
        <p>
          Data collectors can add other such items which are not included in the
          list. Collectors will need to note down these obstacles after
          finishing their routes.
        </p>

        <h4 className="mt-4 mb-4">2.2 Temporary Obstacles</h4>
        <p>
          This is a count based metric. Obstacles that will be removed after
          some time or are periodic. Such obstacles include:
        </p>
        <ol>
          <li>Hawkers</li>
          <li>Construction materials and sites</li>
          <li>Mobile toilets</li>
        </ol>
        <p>
          Data collectors can add other such items which are not included in the
          list. Collectors will need to note down these obstacles after
          finishing their routes.
        </p>

        <h4 className="mt-5 mb-4"> 2.3 Hazard</h4>
        <p>
          This is a count based metric. Things or materials that can cause
          bodily harm. Such things include:
        </p>
        <ol>
          <li>Open manholes</li>
          <li>Fallen trees</li>
          <li>Live electric wires</li>
          <li>Vehicles that travel on the footpath</li>
        </ol>
        <p>
          Data collectors can add other such items which are not included in the
          list.Collectors will need to note down these obstacles after finishing
          their routes.
        </p>

        <h4 className="mt-5 mb-4">2.4 Cleanliness</h4>
        <p>This metric is a perception based rating. The ratings are:</p>
        <ol>
          <li>Dirtiest</li>
          <li>Dirty</li>
          <li>Passable</li>
          <li>Clean</li>
          <li>Cleanest </li>
        </ol>
        <p>
          Users need to rate the roads they’ve walked on based on the following
          samples. Note: these are rough samples, but collectors should rate the
          roads that resembles the closest to them.
        </p>
        {/* <img src="images/cleaniness1.png" alt="image not found " /> */}

        <div className="text-center">
          <img src="images/cleanliness1.png" alt="cleaness 1 " />
          <p className="text-center"> Fig: 2.1 Cleanliness 1</p>
        </div>
        <div className="text-center">
          <img
            src="images/cleanliness2.png"
            alt="cleaness 2"
            width="1155"
            height="273"
          />

          <p className="text-center"> Fig: 2.2 Cleanliness 2</p>
        </div>
        <div className="text-center">
          <img
            src="images/cleanliness3.png"
            alt="cleaness 3 "
            width="1150"
            height="273"
          />
          <p className="text-center"> Fig: 2.3 Cleanliness 3</p>
        </div>
        <div className="text-center">
          <img
            src="images/cleanliness4.png"
            alt="cleaness 4 "
            width="1155"
            height="273"
          />
          <p className="text-center"> Fig: 2.4 Cleanliness 4</p>
        </div>
        <div className="text-center">
          <img
            src="images/cleanliness5.png"
            alt="cleaness 5"
            width="1155"
            height="273"
          />
          <p className="text-center"> Fig: 2.5 Cleanliness 5</p>
        </div>

        <h4 className="mt-4 mb-4"> 2.5 Safety (Sense of Security) </h4>
        <p>
          This metric is a perception based rating. Users need to note down
          their relative perceptions of how safe they feel while walking on a
          certain road. This may be affected by their age, their gender, the
          time when they are walking and other aspects that concern the user
          themselves.
        </p>
        <p>3 levels have been defined for the cause:</p>
        <ol>
          <li>The user felt no danger whatsoever</li>
          <li>
            The user was not harmed in any way, but felt a sense of danger
          </li>
          <li>
            The user had anecdotal experience of feeling very unsafe while
            walking
          </li>
        </ol>

        <h4 className="mt-4 mb-3"> 2.6 Congestion</h4>
        <p>This metric is a perception based rating. The ratings are:</p>
        <ol>
          <li>No congestion</li>
          <li>Low congestion</li>
          <li>Passable</li>
          <li>High congestion but walkable at a regular pace</li>
          <li>Too congested to walk. Slows you down.</li>
        </ol>
        <p>
          Users need to rate the roads they’ve walked on based on the following
          samples. Note: these are rough samples, but collectors should rate the
          roads that resembles the closest to them.
        </p>
        <div className="text-center">
          <img src="images/congestion1.png" alt="congestion1 " />
          <p className="text-center"> Fig: 2.6 Congestion 1</p>
        </div>
        <div className="text-center">
          <img
            src="images/congestion2.png"
            alt="congestion2 "
            width="1137"
            height="638"
          />
          <p className="text-center"> Fig: 2.7 Congestion 2</p>
        </div>
        <div className="text-center">
          <img
            src="images/congestion3.png"
            alt="congestion3 "
            width="1137"
            height="638"
          />
          <p className="text-center"> Fig: 2.8 Congestion 3</p>
        </div>
        <div className="text-center">
          <img
            src="images/congestion4.png"
            alt="congestion4 "
            width="1137"
            height="638"
          />
          <p className="text-center"> Fig: 2.9 Congestion 4</p>
        </div>
        <div className="text-center">
          <img
            src="images/congestion2.png"
            alt="congestion5 "
            width="1137"
            height="638"
          />
          <p className="text-center"> Fig: 2.10 Congestion 5</p>
        </div>

        <h4 className="mt-4 mb-3"> 2.7 Road Width</h4>
        <p>
          This metric is a perception based rating. Users need to estimate how
          many people can walk side-by-side. This rating will be between 1 - 3.
        </p>
        <h4 className="mt-4 mb-3"> 2.8 Walkability Score </h4>
        <p>
          This is an inferred score of the route that the collector has walked
          on. This rating will be between 1 - 5. This will depend on all of the
          input parameters mentioned.
        </p>
        <h4 className="mt-4 mb-3">2.9 Target Parameters </h4>
        <h6>2.9.1 Time </h6>
        <p>
          Users need to start a stopwatch from the beginning of their route till
          the end to calculate the total time taken.
        </p>
        <h4 className="mt-4 mb-3">2.10 Apps/tools required</h4>
        <ul>
          <li>Gaia GPS</li>
          <li>Stopwatch</li>
          <li>Water</li>
        </ul>
        <h4 className="mt-4 mb-3"> 2.11 Data Entry Format</h4>
        <p>Copy the following text when entering data:</p>
        <ul className="list-unstyled">
          <li>Permanent Obstacles:</li>
          <li>Temporary Obstacles:</li>
          <li>Hazards:</li>
          <li>Cleanliness: /5</li>
          <li>Safety: /3</li>
          <li>Congestion: /5</li>
          <li>Road Width : /3</li>
          <li>Walkability Score: /5</li>
          <li>Time: sec</li>
        </ul>
      </div>
    </div>
  );
};

export default Documentation;
