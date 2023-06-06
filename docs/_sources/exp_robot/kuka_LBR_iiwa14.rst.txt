===============
KUKA LBR iiwa 14
===============
 
The `KUKA LBR iiwa 14`_ is a kinematically redundant robot with 7 DOF. The links and the fixed base of the robot are shown below.

.. _`KUKA LBR iiwa 14`: https://www.kuka.com/en-us/products/robotics-systems/industrial-robots/lbr-iiwa

The links and the fixed basis of the robot are shown below:

.. figure:: ../images/LBR_iiwa14_Linkage.png
	:align: center
	:width: 90%

..
  The Locations of Center of Mass (CoM)
  =================================
  The CoM locations of the 7 links are depicted below.

  .. figure:: ../images/LBR_iiwa14_COM.png
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
      - (0, -0.0140, 0.2545)
      - 6.4040
    * - COM2
      - (0, 0.0030, 0.4240)
      - 7.8900
    *  - COM3
     - (0, 0.0190, 0.6905)
     - 2.5400
   * - COM4
     - (0, -0.0090, 0.8660)
     - 4.8200
   * - COM5
     - (0, -0.0130, 1.0585)
     - 1.7600
   * - COM6
     - (0, -0.0020, 1.1960)
     - 2.5000
   * - COM7
     - (0, 0, 1.2706)
     - 0.4200

  Note that the CoM locations are all expressed with respect to coordinate frame :math:`\{S\}`.

  Initial Configuration and Joint Parameters
  ===========================================
  Below, the robot in initial configuration with stationary coordinate frame :math:`\{S\}` and origin :math:`\{O\}`
  is shown:

  .. figure:: ../images/LBR_iiwa14_joint.png
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
     - (0, -0.0130, 0.3600)
     - (0, 1, 0)
     - (-0.36, 0, 0, 0, 1, 0)
   * - J3
     - Revolute (1)
     - (0, 0, 0.5925)
     - (0, 0, 1)
     - (0, 0, 0, 0, 0, 1)
   * - J4
     - Revolute (1)
     - (0, 0.0110, 0.7800)
     - (0, -1, 0)
     - (0.78, 0, 0, 0, -1, 0)
   * - J5
     - Revolute (1)
     - (0, 0, 0.9925)
     - (0, 0, 1)
     - (0, 0, 0, 0, 0, 1)
   * - J6
     - Revolute (1)
     - (0, -0.0620, 1.1800)
     - (0, 1, 0)
     - (-1.18, 0, 0, 0, 1, 0)	 
   * - J7
     - Revolute (1)
     - (0, 0, 1.2596)
     - (0, 0, 1)
     - (0, 0, 0, 0, 0, 1)	 


  Principal Axes and Principal Moment of Inertia 
  ================================================
  The principal axes about the CoM of each link are shown below.
  Note that the initial configuration of the robot is chosen such that the principal axes 
  of inertia are alligned with the axes of coordinate frame :math:`\{S\}`.


  .. list-table:: 
   :widths: 50 50 
   :align: center 

   * - .. figure:: ../images/iiwa14_linkage1.png
          :width: 100%	

     - .. figure:: ../images/iiwa14_linkage2.png
          :width: 100%	

  .. list-table:: 
   :widths: 50 50 
   :align: center 

   * - .. figure:: ../images/iiwa14_linkage3.png
          :width: 100%	

     - .. figure:: ../images/iiwa14_linkage4.png
          :width: 100%	

  .. list-table:: 
   :widths: 50 50 
   :align: center 

   * - .. figure:: ../images/iiwa14_linkage5.png
          :width: 100%	

     - .. figure:: ../images/iiwa14_linkage6.png
          :width: 100%	

  .. list-table:: 
   :widths: 50 50 
   :align: center 

   * - .. figure:: ../images/iiwa14_linkage7.png
          :width: 100%	

     - 


  .. list-table:: 
   :widths: 20 40 
   :header-rows: 1
   :align: center 
   
   * - Linkage Number
     - Principal Moments of Inertia, along :math:`\hat{e}_1`, :math:`\hat{e}_2`, :math:`\hat{e}_3`
   * - Linkage 1
     - (0.0690, 0.0710, 0.0200)
   * - Linkage 2
     - (0.0800, 0.0800, 0.0100)
   * - Linkage 3
     - (0.0200, 0.0200, 0.0600)
   * - Linkage 4
     - (0.0400, 0.0300, 0.0100)
   * - Linkage 5
     - (0.0100, 0.0100, 0.0100)
   * - Linkage 6
     - (0.0070, 0.0060, 0.0050 )
   * - Linkage 7
     - (0.0003, 0.0003, 0.0005)  

Example Exp[licit]-MATLAB
=========
To construct a KUKA LBR iiwa 14 in *Exp[licit]*-MATLAB, run the following code:

.. code-block:: MATLAB

  % Construct Kuka object, with high visual quality
  robot = iiwa14( 'high' );
  robot.init( );

  % Set figure size and attach robot for visualization
  anim = Animation( 'Dimension', 3, 'xLim', [-0.7,0.7], 'yLim', [-0.7,0.7], 'zLim', [0,1.4] );
  anim.init( );
  anim.attachRobot( robot )

The output figure should look like this:

.. figure:: ../images/LBR_iiwa7_result_view2.png
	:align: center
	:width: 600	  

An example application for the KUKA LBR iiwa 14 can be found under `/examples/main_iiwa14.m`.

Example Exp[licit]-FRI
=========
To construct a KUKA LBR iiwa 14 in the Client Application of FRI (C++), run the following code in the constructor of ``MyLBRClient``.

.. code-block:: cpp

    // Use Explicit-cpp to create your robot
    myLBR = new iiwa14( 1, "Trey");
    myLBR->init( );

    // Current joint configuration
    q = Eigen::VectorXd::Zero( myLBR->nq );

The member functions of the ``myLBR``-object can then be used in the ``MyLBRClient:command()``-method:

.. code-block:: cpp

    // Homogeneous Transformation Matrix
    H = myLBR->getForwardKinematics( q );

    // Hybrid Jacobian Matrix (6x7)
    J = myLBR->getHybridJacobian( q );

    // Mass matrix
    M = myLBR->getMassMatrix( q );

The basic application calculates the Forward Kinematics, Jacobian Matrix, and Mass matrix of the robot 
and prints the calculational effort.

To get started with FRI (C++), we provide a "basic application." The source file includes an iir-filter, with coefficients 
determined via `winfilter`_. The filter is needed to activate the robot's build-in friction compensation. 
Before sending the torques, we add a simple mean filter to smooth out the torque signals.  

.. _`winfilter`: http://www.winfilter.20m.com/