===============
Double Pendulum
===============

Double pendulum robot, also known as Acrobot, is one of the examples often used in robotics. 
In this simulation, we simulate a planar 2-DOF double pendulum robot.
The file contained in robots directory. 

Geometric and Inertial Parameters
==================================
The double pendulum consists of:

.. figure:: ../images/double_pendulum_inertia.png
	:align: center
	:width: 400

- The first link with mass :math:`m_1` and length :math:`l_1`.
- The second link with mass :math:`m_2` and length :math:`l_2`.

Note that both links have uniform mass distribution.


Initial Configuration and Joint Parameters
===========================================
The stationary coordinate frame :math:`\{S\}`, the origin, the initial configuration and degrees of freedom of the robot:

.. figure:: ../images/double_pendulum_joint.png
	:align: center
	:width: 400

.. list-table:: 
   :widths: 15 25 25 25 35 
   :header-rows: 1
   :align: center 

   * - Joint
     - Type 
     - Point on Joint Twist Axis (m)
     - Joint Direction
     - Joint Twist 
   * - Joint 1
     - Revolute (1)
     - (0, 0, 0)
     - (0, 0, 1)
     - (1, 0, 0, 0, 0, 0)
   * - Joint 2
     - Revolute (1)
     - (0, :math:`-l_1`, 0)
     - (0, 0, 1)
     - (:math:`-l_1`, 0, 0, 0, 0, 1)

The details of each values and the related theoretical backgrounds are presented in this post.

Example
=========
To construct the double-pendulum robot, simply run the following code:

.. code-block:: MATLAB

	% Geometric and Inertial Parameters of the double pendulum robot
	m1 = 1;		% The   mass of the  first link
	l1 = 1;		% The length of the  first link
	m2 = 1;		% The   mass of the second link
	l2 = 1;		% The length of the second link

	% Construct the cart-pole robot and initialize
	robot = DoublePendulum( m1, l1, m2, l2 );
	robot.init( )

	% Attach the double-pendulum robot to animation for visualization
	anim = Animation( 'Dimension', 2, 'xLim', [-1.5,1.5], 'yLim', [-2.5,0.5] );
	anim.init( )
	anim.attachRobot( robot )

.. figure:: ../images/double_pendulum_result.png
	:align: center
	:width: 400	

Documentation
==============
.. mat:autoclass:: robots.DoublePendulum
