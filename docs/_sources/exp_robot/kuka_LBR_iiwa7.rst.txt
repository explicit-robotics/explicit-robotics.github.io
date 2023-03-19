===========
Kuka iiwa7
===========

We introduce `Kuka LBR iiwa 7`_. Kuka LBR iiwa 7 has 7 degrees of freedom. Note that iiwa 7 indicates the payload of the robot, rather than the degrees of freedom.

.. _`Kuka LBR iiwa 7`: https://www.kuka.com/en-us/products/robotics-systems/industrial-robots/lbr-iiwa

The Locations of Center of Mass 
==================================
The Center of Mass locations of 7 links are depicted below.

.. figure:: ../images/LBR_iiwa7_COM.png
	:align: center
	:width: 90%


.. list-table:: 
   :widths: 30 30
   :header-rows: 1
   :align: center 
   
   * - Center of Mass
     - Center of Mass Locations (m)
   * - COM1
     - (0, -0.0187, 0.2541)
   * - COM2
     - (-0.0002, 0.0140, 0.4225)
   * - COM3
     - (-0.0002, 0.0195, 0.6509)
   * - COM4
     - (-0.0002, -0.0091, 0.8260)
   * - COM5
     - (0.0000, -0.0135, 1.0185)
   * - COM6
     - (-0.0003, -0.0196, 1.1571)
   * - COM7
     - (0.000, 0.0001, 1.2306)


Initial Configuration and Joint Parameters
===========================================
The stationary coordinate frame :math:`\{S\}`, the origin, the initial configuration and degrees of freedom of the robot:


.. figure:: ../images/LBR_iiwa7_joint.png
	:align: center
	:width: 90%

.. list-table:: 
   :widths: 10 25 25 20 45 
   :header-rows: 1
   :align: center 
   
   * - Joint
     - Type 
     - Point on Joint Twist Axis (m)
     - Joint Direction
     - Joint Twist 
   * - J1
     - Revolute (1)
     - (0, 0, 0.1525)
     - (0, 0, 1)
     - (0, 0, 0, 0, 0, 1)
   * - J2
     - Revolute (1)
     - (0, -0.011, 0.340)
     - (0, 1, 0)
     - (-0.34, 0, 0, 0, 1, 0)
   * - J3
     - Revolute (1)
     - (0, 0, 0.5525)
     - (0, 0, 1)
     - (0, 0, 0, 0, 0, 1)
   * - J4
     - Revolute (1)
     - (0, 0.011, 0.740)
     - (0, -1, 0)
     - (0.74, 0, 0, 0, -1, 0)
   * - J5
     - Revolute (1)
     - (0, 0, 0.952)
     - (0, 0, 1)
     - (0, 0, 0, 0, 0, 1)
   * - J6
     - Revolute (1)
     - (0, -0.062, 1.140)
     - (0, 1, 0)
     - (-1.14, 0, 0, 0, 1, 0)	 
   * - J7
     - Revolute (1)
     - (0, 0, 1.2196)
     - (0, 0, 1)
     - (0, 0, 0, 0, 0, 1)	 

The details of each values and the related theoretical backgrounds are presented in this post.


Example
=========
To construct the double-pendulum robot, simply run the following code:

.. code-block:: MATLAB

	FILL_IN

.. figure:: ../images/LBR_iiwa7_result_view2.png
	:align: center
	:width: 600	