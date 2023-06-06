==============
KUKA LBR iiwa 7
==============

The `Kuka LBR iiwa 7`_ is a kinematically redundant robot with 7 DOF. The links and the fixed base of the robot are shown below.

.. _`KUKA LBR iiwa 7`: https://www.kuka.com/en-us/products/robotics-systems/industrial-robots/lbr-iiwa

The links and the fixed basis of the robot are shown below:

.. figure:: ../images/LBR_iiwa7_Linkage.png
	:align: center
	:width: 90%

..
  The Locations of Center of Mass 
  ==================================
  The Center of Mass locations of the 7 linkages are depicted below.

  .. figure:: ../images/LBR_iiwa7_COM.png
	:align: center
	:width: 90%


  .. list-table:: 
   :widths: 20 40 15
   :header-rows: 1
   :align: center 
   
   * - Center of Mass
     - Center of Mass Locations (m)
     - Mass (kg)
   * - COM1
     - (0, -0.0187, 0.2541)
     - 2.7426
   * - COM2
     - (-0.0002, 0.0140, 0.4225)
     - 4.9464
   * - COM3
     - (-0.0002, 0.0195, 0.6509)
     - 2.5451
   * - COM4
     - (-0.0002, -0.0091, 0.8260)
     - 4.6376
   * - COM5
     - (0.0000, -0.0135, 1.0185)
     - 1.7140
   * - COM6
     - (-0.0003, -0.0196, 1.1571)
     - 2.4272
   * - COM7
     - (0.000, 0.0001, 1.2306)
     - 0.4219

  Note that the Center of Mass locations are expressed with respect to frame :math:`\{S\}`.

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


  Principal Axes and Principal Moment of Inertia 
  ================================================
  The principal axes about the center of mass of each linkage are shown below.
  Note that the initial configuration of the robot is chosen to align the principal axes of inertia with the axes of frame :math:`\{S\}`.

  .. list-table:: 
   :widths: 50 50 
   :align: center 

   * - .. figure:: ../images/iiwa7_linkage1.png
          :width: 100%	

     - .. figure:: ../images/iiwa7_linkage2.png
          :width: 100%	

  .. list-table:: 
   :widths: 50 50 
   :align: center 

   * - .. figure:: ../images/iiwa7_linkage3.png
          :width: 100%	

     - .. figure:: ../images/iiwa7_linkage4.png
          :width: 100%	

  .. list-table:: 
   :widths: 50 50 
   :align: center 

   * - .. figure:: ../images/iiwa7_linkage5.png
          :width: 100%	

     - .. figure:: ../images/iiwa7_linkage6.png
          :width: 100%	

  .. list-table:: 
   :widths: 50 50 
   :align: center 

   * - .. figure:: ../images/iiwa7_linkage7.png
          :width: 100%	

     - 


  .. list-table:: 
   :widths: 20 40 
   :header-rows: 1
   :align: center 
   
   * - Linkage Number
     - Principal Moments of Inertia, along :math:`\hat{e}_1`, :math:`\hat{e}_2`, :math:`\hat{e}_3`
   * - Linkage 1
     - (0.2400,  0.0240, 0.0128)
   * - Linkage 2
     - (0.0468,  0.0282, 0.0101)
   * - Linkage 3
     - (0.0200,  0.0200, 0.0600)
   * - Linkage 4
     - (0.0400,  0.0270, 0.0100)
   * - Linkage 5
     - (0.0190,  0.0160, 0.0120)
   * - Linkage 6
     - (0.0070,  0.0060, 0.0050)
   * - Linkage 7
     - (0.0003,  0.0003, 0.0005)     



Example Exp[licit]-MATLAB
=========
To construct a KUKA LBR iiwa 7 in *Exp[licit]*-MATLAB, run the following code:

.. code-block:: MATLAB

  % Construct Kuka object, with high visual quality
  robot = iiwa7( 'high' );
  robot.init( );

  % Set figure size and attach robot for visualization
  anim = Animation( 'Dimension', 3, 'xLim', [-0.7,0.7], 'yLim', [-0.7,0.7], 'zLim', [0,1.4] );
  anim.init( );
  anim.attachRobot( robot ) 

The output figure should look like this:

.. figure:: ../images/LBR_iiwa7_result_view2.png
	:align: center
	:width: 600		  

An example application for the KUKA LBR iiwa 7 can be found under `/examples/main_iiwa7.m`.