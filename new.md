#Speach on the topic of computer architecture

##RS-shcool 2021
##Aleksei Zhuchkov

0. Preview

Hi, my name is Alexey Zhuchkov.

In this presentation, I want to cover the topic of computer architecture, consider the components that make up a computer and how they are interconnected.

 
0. A computer is a system of interconnected components.

These components can be divided into the following categories:
- Data input devices (keyboard, computer mouse);
- Data output devices (display, printer)
- Data processing device

Processing of incoming data and it’s further output take place in the system unit. So what is in the system unit? And we will consider how the components located in it interact further.

0. There are several form factors of the system unit.

The size is directly proportional to the capabilities of the future computer as it determines the amount of the components that can fit into it. And modern components are often large (for example, powerful video cards). Therefore, the more powerful the PC is planned, the larger the case.

We can distinguish following form factors of system blocks:
- ultra tower;
- full tower;
- mid tower;
- mini tower;
- small form factor;
- htpc

Let's move on to examining the internal components of the system unit.

0. Power supply

Its main purpose is to convert high voltage alternating current (110–230 V) into direct and stable  low voltage current (12 V and 5 V), which powers all computer devices.

The main requirements for the power supply are sufficient power and stability, as well as low fan noise.

The capacity of the power supply directly affects the maximum number of connected devices and the ability to overclock components.  After all, each device uses a certain power reserve of the power supply, which is not limitless and very quickly depleted. And given the "gluttony" of modern processors, graphics adapters, RAM and other devices, the power of the power supply is a very crucial factor.

A powerful and stable power supply is a mandatory requirement for a personal computer today. If the voltage of the power supply are unstable (or differ significantly from the reference voltages), system components can be damaged. In particular, motherboards and processors are very sensitive to unstable power supplies.

0. Motherboard

The motherboard is the main component of a personal computer. Not only is it the main element, but also an independent device that manages the connections between the expansion cards installed on it, the processor, RAM and other components.

Motherboards are not the same. They differ in functionality, in particular in the supported types of processors and RAM, the presence of high-speed ports, the presence and capabilities of various kinds of controllers, the number of slots, etc.

The motherboard contains a processor socket, slots for an operating board, expansion slots.

The motherboard carries out the interconnection of the internal components of the system unit.

The north and south bridges of a computer (or, more correctly, a motherboard) are two main functional controllers that are responsible for the operation of all components of the motherboard and are called a chipset. 

One of the main functions of the north bridge is to ensure the interaction between the motherboard and the processor, as well as determine the operating speed. Part of the northbridge in many modern motherboards is an integrated video adapter. Thus, the functional feature of the north bridge is also the control of the video adapter bus and its speed. Also, the north bridge provides communication of all of the above devices with the south bridge.

South Bridge - connects to the North Bridge, it is slower than the North Bridge. Busses such as PCI, USB, SATA, IDE controllers, etc. are connected to it.

0. Central processing unit

A central processing unit (CPU), also called a central processor, main processor or just processor, is the electronic circuitry that executes instructions comprising a computer program. The CPU performs basic arithmetic, logic, controlling, and input / output operations specified by the instructions in the program. This contrasts with external components such as main memory and input / output circuitry, and specialized processors such as graphics processing units.

The form, design, and implementation of CPUs have changed over time, but their fundamental operation remains almost unchanged. Principal components of a CPU include the arithmetic logic unit that performs arithmetic and logic operations, processor registers that supply operands to the arithmetic logic unit and store the results of arithmetic logic unit operations, and a control unit that orchestrates the fetching (from memory) and execution of instructions by directing the coordinated operations of the arithmetic logic unit, registers and other components.

0. Random-access memory

Relatively fast volatile computer random access memory, in which most of the data exchange between devices is carried out. It is volatile, that is, when the power is turned off, all data on it is erased.

Random access memory is a storage of all information flows that need to be processed by the processor or they are waiting in the main memory for their turn. All devices communicate with the RAM via the system bus, and with it, in turn, are exchanged through the cache or directly.

0. Video card

Video card, GPU ("vidyuha", graphics adapter, graphics card, graphics adapter, display card, video card - eng.) - a computer device designed to process and output video (sometimes audio) signal to a display device (monitor, TV ). Has the necessary ports for image output. For example VGA, DVI, DisplayPort, HDMI.

The prepared data (OpenGL, DirectX) from the central processor that needs to be processed goes into the video (or RAM) memory and the video processor begins to process it in a certain way to convert it into a signal that is understandable for the monitor. Video memory (or RAM) is also a frame buffer for smoother picture.

There are 2 types of video cards:

- built-in
- discrete (external)

The discrete graphics card is inserted into a special slot on the motherboard of a computer or other device. Has its own power and cooling system. It differs from the built-in by significantly higher performance and heat dissipation.

0. hard drive

A hard disk drive (HDD) is an electro-mechanical data storage device that stores and retrieves digital data using magnetic storage and one or more rigid rapidly rotating platters coated with magnetic material. The platters are paired with magnetic heads, usually arranged on a moving actuator arm, which read and write data to the platter surfaces. Data is accessed in a random-access manner, meaning that individual blocks of data can be stored and retrieved in any order. HDDs are a type of non-volatile storage, retaining stored data even when powered off. Modern HDDs are typically in the form of a small rectangular box.

0. Sound card

A sound card (also known as an audio card) is an internal expansion card that provides input and output of audio signals to and from a computer under control of computer programs. The term sound card is also applied to external audio interfaces used for professional audio applications.

Sound functionality can also be integrated onto the motherboard, using components similar to those found on plug-in cards. The integrated sound system is often still referred to as a sound card. 

Sound processing hardware is also present on modern video cards with HDMI to output sound along with the video using that connector; previously they used a S / PDIF connection to the motherboard or sound card.

Typical uses of sound cards or sound card functionality include providing the audio component for multimedia applications such as music composition, editing video or audio, presentation, education and entertainment (games) and video projection. Sound cards are also used for computer-based communication such as voice over IP and teleconferencing.

0. Network card

A network card is a peripheral device that allows a computer to communicate with other devices on a network. Nowadays, especially in personal computers, network cards are quite often integrated into motherboards for convenience and to reduce the cost of the entire computer as a whole.

By constructive implementation, network cards are divided into:

- internal - separate cards inserted into the ISA, PCI or PCI-E slot;
- external, connected via USB or PCMCIA interface, mainly used in laptops;
- built into the motherboard.
