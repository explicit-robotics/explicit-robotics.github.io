===========
SnakeBot
===========
To create a robot with arbitrary DOF, the SnakeBot can be used.

The SnakeBot consists of ``n`` linkages, where ``n`` is a parameter passed to the constructor of the robot. 
Here, we assume each link has uniform mass distribution.

.. figure:: ../images/snake_bot_inertia.png
	:align: center
	:width: 400

In the figure above, the :math:`i`-th link consists of mass :math:`m_i` and length :math:`l_i`.
	
Initial Configuration and Joint Parameters
===========================================
Below, the robot in initial configuration with stationary coordinate frame :math:`\{S\}` and origin :math:`\{O\}`
is shown:

.. figure:: ../images/snake_bot_joint.png
	:align: center
	:width: 400


.. list-table:: 
   :widths: 10 30 25 25 100
   :header-rows: 1
   :align: center 

   * - Joint
     - Type 
     - Point on Joint Twist Axis (m)
     - Joint Direction
     - Joint Twist 
   * - J1
     - Rev. (1)
     - (0, 0, 0)
     - (0, 0, 1)
     - (1, 0, 0, 0, 0, 0)
   * - J2
     - Rev. (1)
     - (:math:`l_1`, 0, 0)
     - (0, 0, 1)
     - (0, :math:`-l_1`, 0, 0, 0, 1)
   * - J3
     - Rev. (1)
     - (:math:`l_1+l_2`, 0, 0)
     - (0, 0, 1)
     - (0, :math:`-l_1-l_2`, 0, 0, 0, 1)
   * - :math:`\vdots`
     - :math:`\vdots`
     - :math:`\vdots`
     - :math:`\vdots`
     - :math:`\vdots`
   * - Jn
     - Rev. (1)
     - (:math:`\sum_{i=1}^{n-1}l_i`, 0, 0)
     - (0, 0, 1)
     - (0, :math:`-\sum_{i=1}^{n-1}l_i`, 0, 0, 0, 1)

Example code
=========
To construct a 5-DOF SnakeBot, run the following code:

.. code-block:: MATLAB

	% Geometric and Inertial Parameters of SnakeBot
	nq = 5;         % The number of linkages of the Snakebot
	m  = 1;         % The   mass of the each link
	l  = 1;         % The length of the each link

	m_arr = m * ones( 1, nq );  % The mass   array to construct SnakeBot
	l_arr = l * ones( 1, nq );  % The length array to construct SnakeBot 

	% Construct a 5-DOF SnakeBot
	robot = SnakeBot( nq, m_arr, l_arr );
	robot.init( )

	% Attach the 5-DOF SnakeBot to animation for visualization
	anim = Animation( 'Dimension', 2, 'xLim', [-1.5,6.5], 'yLim', [-4,4] );
	anim.init( )
	anim.attachRobot( robot )    

The output figure should look like this:

.. figure:: ../images/snake_bot_result.png
	:align: center
	:width: 400

..
  Documentation
  ==============
  .. mat:autoclass:: robots.SnakeBot
