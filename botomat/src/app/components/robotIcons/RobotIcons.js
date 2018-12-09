import React, { Component } from 'react';
import '../../Globals.css';
import './RobotIcons.css';

class RobotIcons extends Component {
 
  render() {
    return (
      <div className="RobotIcons">

        <div className="robotIconContainer">
          <div className="robotCard">
            <img alt="Unipedal" src="/imgs/robot/Unipedal.png" />
            <h3>Unipedal</h3>
            <p>Tasks they can do</p>
            <ul>
              <li>1. Do the laundry</li>
              <li>2. Take out the recycling</li>
              <li>3. Mow the lawn</li>
              <li>4. Rake the leaves</li>
              <li>5. Give the dog a bath</li>
              <li>6. Bake some cookies</li>
            </ul>
          </div>

          <div className="robotCard">
            <img alt="Unipedal" src="/imgs/robot/Bipedal.png" />
            <h3>Bipedal</h3>
            <p>Tasks they can do</p>
            <ul>
              <li>1. Do the dishes</li>
              <li>2. Sweep the house</li>
              <li>3. Take out the recycling</li>
              <li>4. Make a sammich</li>
              <li>5. Give the dog a bath</li>
              <li>6. Wash the car</li>
            </ul>
          </div>

          <div className="robotCard">
            <img alt="Unipedal" src="/imgs/robot/Quadrupedal.png" />
            <h3>Quadrupedal</h3>
            <p>Tasks they can do</p>
            <ul>
              <li>1. Do the dishes</li>
              <li>2. Sweep the house</li>
              <li>3. Do the laundry</li>
              <li>4. Take out the recycling</li>
              <li>5. Bake some cookies</li>
              <li>6. Wash the car</li>
            </ul>
          </div>

          <div className="robotCard">
            <img alt="Unipedal" src="/imgs/robot/Arachnid.png" />
            <h3>Arachnid</h3>
            <p>Tasks they can do</p>
            <ul>
              <li>1. Do the dishes</li>
              <li>2. Make a sammich</li>
              <li>3. Mow the lawn</li>
              <li>4. Rake the leaves</li>
              <li>5. Bake some cookies</li>
              <li>6. Wash the car</li>
            </ul>
          </div>

          <div className="robotCard">
            <img alt="Unipedal" src="/imgs/robot/Radial.png" />
            <h3>Radial</h3>
            <p>Tasks they can do</p>
            <ul>
              <li>1. Sweep the house</li>
              <li>2. Do the laundry</li>
              <li>3. Take out the recycling</li>
              <li>4. Make a sammich</li>
              <li>5. Mow the lawn</li>
              <li>6. Rake the leaves</li>
              <li>7. Give the dog a bath</li>
              <li>8. Bake some cookies</li>
              <li>9. Wash the car</li>
            </ul>
          </div>

          <div className="robotCard">
            <img alt="Unipedal" src="/imgs/robot/Aeronautical.png" />
            <h3>Aeronautical</h3>
            <p>Tasks they can do</p>
            <ul>
              <li>1. Do the dishes</li>
              <li>2. Sweep the house</li>
              <li>3. Do the laundry</li>
              <li>4. Make a sammich</li>
              <li>5. Mow the lawn</li>
              <li>6. Rake the leaves</li>
              <li>7. Give the dog a bath</li>
            </ul>
          </div>                                                            
        </div>

      </div>
    );
  }
}

export default RobotIcons;
