===========
Cart-Pole
===========

In this simulation, we simulate a planar 2-DOF cart-pole robot.
The file is contained in robots directory. 

Geometric and Inertial Parameters
==================================
The cart-pole system consists of:

.. figure:: ../images/cart_pole_inertia.png
	:align: center
	:width: 400

- A cart with point mass :math:`m_c`, depicted in orange square. 
- A pole with length :math:`l_p`, with point mass :math:`m_p` attached to the end of the pole. The point mass :math:`m_p` is depicted in black circle.


Initial Configuration and Joint Parameters
===========================================
The stationary coordinate frame :math:`\{S\}`, the origin, the initial configuration and degrees of freedom of the robot:

.. figure:: ../images/cart_pole_joint.png
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
     - Prismatic (2)
     - (0, 0, 0)
     - (1, 0, 0)
     - (1, 0, 0, 0, 0, 0)
   * - Joint 2
     - Revolute (1)
     - (0, 0, 0)
     - (0, 0, 1)
     - (0, 0, 0, 0, 0, 1)

The details of each values and the related theoretical backgrounds are presented in this post.

Example
=========
To construct the cart-pole robot, simply run the following code:

.. code-block:: MATLAB

	% Geometric and Inertial Parameters of the cart-pole robot
	mc = 1;		% The mass of the cart
	lp = 1;		% The length of the pole 
	mp = 1;		% The mass of the pole

	% Construct the cart-pole robot and initialize
	robot = CartPole( mc, lp, mp );
	robot.init( )

	% Attach the cart-pole robot to animation for visualization
	anim = Animation( 'Dimension', 2, 'xLim', [-1.5,1.5], 'yLim', [-1.5,1.5]);
	anim.init( )
	anim.attachRobot( robot )

.. figure:: ../images/cart_pole_result.png
	:align: center
	:width: 400	

Documentation
==============
.. mat:autoclass:: robots.CartPole
