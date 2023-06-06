===============
Code Structure
===============

..
    .. contents:: Table of Contents


The core of the software is the :class:`RobotPrimitives`-class, which is used as the parent class of the software. 
It provides the member functions, e.g., :func:`getForwardKinematics`, :func:`getSpatialJacobian`, :func:`getHybridJacobian`, :func:`getBodyJacobian`, :func:`getMassMatrix` for deriving the robot parameters. 
By inheriting the :class:`RobotPrimitives`-class, a new robot class can be defined that shares the attributes and the member functions 
of the parent class. 


Each robot class brings its kinematic and dynamic properties (e.g., axes of rotation, link lengths, masses, etc.). 
Note that for *Exp[licit]-MATLAB*, all member functions also accept symbolic arguments. This feature is helpful for control methods that require an analytical 
formulation of the robot's equations of motion, e.g., adaptive control methods.

Structure of Exp[licit]-MATLAB
==================

While *Exp[licit]-MATLAB* supports various robots, we show here a Franka robot example (``main_franka.m``), which is inherited from the :class:`RobotPrimitives`-class. 
The initialization is shown below:

.. code-block:: MATLAB

    % Call Franka Robot
    robot = franka( );
    robot.init( );

The :func:`init`-function initializes all Joint Twists and Generalized Mass Matrices for the initial configuration. 
For visualization, the robot object can be passed to a 2D or 3D-animation object:

.. code-block:: MATLAB

    % Create animation
    anim = Animation('Dimension', 3, 'xLim', [-0.7,0.7], 'yLim', [-0.7,0.7], 'zLim', [0,1.4]);
    anim.init( );
    anim.attachRobot( robot ) 

The :class:`Animation`-class heavily relies on MATLAB graphic functions (e.g., axes, patches, lighting). 
The :class:`Animation`-class has an optional input that allows the recording of videos with adjustable playback speeds.

At run-time (simulation time ``t``), the robot object (in configuration ``q``) and the animation can be updated: 

.. code-block:: MATLAB

    % Update kinematics
    robot.updateKinematics( q );
    anim.update( t );

For first-time users, we provide a simple example simulation. By default, the simulation loop is set to be real-time:

.. code-block:: MATLAB
    
    % Cyclic code starts here
    while t <= simTime
        tic

        % YOUR CONTROLLER

        % Do not go faster than real time
        while toc < dt
            % do nothing
        end
    end

The structure of the example application is the following: (1) calculation of all kinematic and dynamic robot parameters; 
(2) trajectory generation; (3) control law; (4) integration and update. For (1), the member functions of the robot object are used. 
While (2) and (3) are generally user specific, we implemented a simple impedance controller for the Franka robot 
(``main_franka.m``) that moves the end-effector around a circular trajectory. For the integration (4), any integrator can be used, 
e.g., MATLAB’s pre-built ``ode45.m``.

.. figure:: ../images/ExAppl_Franka.png
	:align: center
	:width: 800

Structure of Exp[licit]-C++
==================

Currently, *Exp[licit]-cpp* supports one robot, the KUKA LBR iiwa 14. During the initialization, a robot object can be created,
which is inherited from the :class:`RobotPrimitives`-class. The initialization is shown below:

.. code-block:: cpp

    // Use Explicit-cpp to create your robot
    myLBR = new iiwa14( 1, "Trey");
    myLBR->init( );

    // Current joint configuration
    q = Eigen::VectorXd::Zero( myLBR->nq );

Here, the :func:`init`-member function initializes all Joint Twists and Generalized Mass Matrices for the initial configuration. The member 
functions of the ``myLBR``-object can then be used:

.. code-block:: cpp

    // Homogeneous Transformation Matrix
    H = myLBR->getForwardKinematics( q );

    // Hybrid Jacobian Matrix (6x7)
    J = myLBR->getHybridJacobian( q );

    // Mass matrix
    M = myLBR->getMassMatrix( q );