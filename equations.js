// ============================================================
// FEM Dynamic Wetting - Complete Equation Data
// ============================================================
// Generated from fem.tex - 805 equations
// ============================================================

export const sections = [
  { id: 'governing_equations', title: 'Governing equations' },
  { id: 'boundary_conditions_at_the_axis_of_symme', title: 'Boundary conditions at the axis of symmetry', subtitle: 'Governing equations' },
  { id: 'the_free_surface', title: 'The free surface', subtitle: 'Governing equations' },
  { id: 'the_liquid_solid_surface', title: 'The liquid-solid surface', subtitle: 'Governing equations' },
  { id: 'boundary_conditions_at_contact_line', title: 'Boundary conditions at contact line', subtitle: 'Governing equations' },
  { id: 'the_split_domain_formulation', title: 'The split-domain formulation', subtitle: 'Governing equations' },
  { id: 'bulk_equations', title: 'Bulk equations', subtitle: 'Governing equations' },
  { id: 'the_axis_of_symmetry', title: 'The axis of symmetry', subtitle: 'Governing equations' },
  { id: 'the_liquid_solid_interface', title: 'The liquid-solid interface', subtitle: 'Governing equations' },
  { id: 'contact_line_conditions', title: 'Contact-line conditions', subtitle: 'Governing equations' },
  { id: 'momentum_continuity_and_kinematic_condit', title: 'Momentum, continuity and kinematic conditions in Cartesian coordinates' },
  { id: 'the_r_momentum_residuals', title: 'The r-momentum residuals' },
  { id: 'derivatives_of_m_i_r_with_respect_to_u_q', title: 'Derivatives of M_i^r with respect to u_q', subtitle: 'The r-momentum residuals' },
  { id: 'derivatives_of_m_i_r_with_respect_to_w_q', title: 'Derivatives of M_i^r with respect to w_q' },
  { id: 'derivatives_of_m_i_r_with_respect_to_p_q', title: 'Derivatives of M_i^r with respect to p_q', subtitle: 'Derivatives of M_i^r with respect to w_q' },
  { id: 'derivatives_of_m_i_r_with_respect_to_sig', title: 'Derivatives of M_i^r with respect to sigma_q^1', subtitle: 'Derivatives of M_i^r with respect to w_q' },
  { id: 'derivatives_of_m_i_r_with_respect_to_var', title: 'Derivatives of M_i^r with respect to varepsilon_q^2', subtitle: 'Derivatives of M_i^r with respect to w_q' },
  { id: 'derivatives_of_m_i_r_with_respect_to_lam', title: 'Derivatives of M_i^r with respect to lambda_q^3', subtitle: 'Derivatives of M_i^r with respect to w_q' },
  { id: 'derivatives_of_m_i_r_with_respect_to_gam', title: 'Derivatives of M_i^r with respect to gamma_q^3', subtitle: 'Derivatives of M_i^r with respect to w_q' },
  { id: 'derivatives_of_m_i_r_with_respect_to_h_q', title: 'Derivatives of M_i^r with respect to h_q', subtitle: 'Derivatives of M_i^r with respect to w_q' },
  { id: 'the_z_momentum_equation', title: 'The z-momentum equation' },
  { id: 'derivatives_of_m_i_z_with_respect_to_u_q', title: 'Derivatives of M_i^z with respect to u_q', subtitle: 'The z-momentum equation' },
  { id: 'derivatives_of_m_i_z_with_respect_to_w_q', title: 'Derivatives of M_i^z with respect to w_q', subtitle: 'The z-momentum equation' },
  { id: 'derivatives_of_m_i_z_with_respect_to_p_q', title: 'Derivatives of M_i^z with respect to p_q', subtitle: 'The z-momentum equation' },
  { id: 'derivatives_of_m_i_z_with_respect_to_sig', title: 'Derivatives of M_i^z with respect to sigma_q^1', subtitle: 'The z-momentum equation' },
  { id: 'derivatives_of_m_i_z_with_respect_to_var', title: 'Derivatives of M_i^z with respect to varepsilon_q^2', subtitle: 'The z-momentum equation' },
  { id: 'derivatives_of_m_i_z_with_respect_to_lam', title: 'Derivatives of M_i^z with respect to lambda_q^3', subtitle: 'The z-momentum equation' },
  { id: 'derivatives_of_m_i_z_with_respect_to_gam', title: 'Derivatives of M_i^z with respect to gamma_q^3', subtitle: 'The z-momentum equation' },
  { id: 'derivatives_of_m_i_z_with_respect_to_h_q', title: 'Derivatives of M_i^z with respect to h_q', subtitle: 'The z-momentum equation' },
  { id: 'the_continuity_equation', title: 'The continuity equation' },
  { id: 'derivatives_of_c_i_with_respect_to_u_q', title: 'Derivatives of C_i with respect to u_q', subtitle: 'The continuity equation' },
  { id: 'derivatives_of_c_i_with_respect_to_w_q', title: 'Derivatives of C_i with respect to w_q', subtitle: 'The continuity equation' },
  { id: 'derivatives_of_c_i_with_respect_to_h_q', title: 'Derivatives of C_i with respect to h_q', subtitle: 'The continuity equation' },
  { id: 'the_slip_condition_on_the_liquid_solid_i', title: 'The slip condition on the liquid-solid interface (SC2)' },
  { id: 'derivatives_of_s_i_2_with_respect_to_u_q', title: 'Derivatives of S_i^2 with respect to u_q', subtitle: 'The slip condition on the liquid-solid interface (SC2)' },
  { id: 'derivatives_of_s_i_2_with_respect_to_w_q', title: 'Derivatives of S_i^2 with respect to w_q', subtitle: 'The slip condition on the liquid-solid interface (SC2)' },
  { id: 'derivatives_of_s_i_2_with_respect_to_var', title: 'Derivatives of S_i^2 with respect to varepsilon_q^2', subtitle: 'The slip condition on the liquid-solid interface (SC2)' },
  { id: 'derivatives_of_s_i_2_with_respect_to_h_q', title: 'Derivatives of S_i^2 with respect to h_q', subtitle: 'The slip condition on the liquid-solid interface (SC2)' },
  { id: 'impermeability_condition_i2', title: 'Impermeability condition (I2)' },
  { id: 'derivatives_of_i_i_with_respect_to_u_q_s', title: 'Derivatives of I_i with respect to u_q^s2', subtitle: 'Impermeability condition (I2)' },
  { id: 'derivatives_of_i_i_with_respect_to_w_q_s', title: 'Derivatives of I_i with respect to w_q^s2', subtitle: 'Impermeability condition (I2)' },
  { id: 'derivatives_of_i_i_with_respect_to_h_q', title: 'Derivatives of I_i with respect to h_q', subtitle: 'Impermeability condition (I2)' },
  { id: 'the_slip_condition_equation_on_boundary_', title: 'The slip condition equation on boundary 1 (SC1)' },
  { id: 'derivatives_of_s_i_1_with_respect_to_u_q', title: 'Derivatives of S_i^1 with respect to u_q', subtitle: 'The slip condition equation on boundary 1 (SC1)' },
  { id: 'derivatives_of_s_i_1_with_respect_to_w_q', title: 'Derivatives of S_i^1 with respect to w_q', subtitle: 'The slip condition equation on boundary 1 (SC1)' },
  { id: 'derivatives_of_s_i_1_with_respect_to_sig', title: 'Derivatives of S_i^1 with respect to sigma_q^1', subtitle: 'The slip condition equation on boundary 1 (SC1)' },
  { id: 'derivatives_of_s_i_1_with_respect_to_h_q', title: 'Derivatives of S_i^1 with respect to h_q', subtitle: 'The slip condition equation on boundary 1 (SC1)' },
  { id: 'kinematic_boundary_condition_kbc', title: 'Kinematic boundary condition (KBC)' },
  { id: 'derivatives_of_k_i_with_respect_to_u_q_s', title: 'Derivatives of K_i with respect to u_q^s1', subtitle: 'Kinematic boundary condition (KBC)' },
  { id: 'derivatives_of_k_i_with_respect_to_w_q_s', title: 'Derivatives of K_i with respect to w_q^s1', subtitle: 'Kinematic boundary condition (KBC)' },
  { id: 'derivatives_of_k_i_with_respect_to_h_q', title: 'Derivatives of K_i with respect to h_q', subtitle: 'Kinematic boundary condition (KBC)' },
  { id: 'r_momentum_residuals', title: 'r-momentum residuals', subtitle: 'Summary of residual equations' },
  { id: 'z_momentum_residuals', title: 'z-momentum residuals', subtitle: 'Summary of residual equations' },
  { id: 'continuity_residuals', title: 'Continuity residuals', subtitle: 'Summary of residual equations' },
  { id: 'kinematic_boundary_condition_residuals', title: 'Kinematic boundary condition residuals', subtitle: 'Summary of residual equations' },
  { id: 'impermeability_residuals', title: 'Impermeability residuals', subtitle: 'Summary of residual equations' },
  { id: 'system_jacobian', title: 'System Jacobian' },
  { id: 'entries_on_the_first_block_row', title: 'Entries on the first block-row', subtitle: 'System Jacobian' },
  { id: 'entries_on_the_second_block_row', title: 'Entries on the second block-row', subtitle: 'System Jacobian' },
  { id: 'entries_on_the_third_block_row', title: 'Entries on the third block-row', subtitle: 'System Jacobian' },
  { id: 'entries_on_the_fourth_block_row', title: 'Entries on the fourth block-row', subtitle: 'System Jacobian' },
  { id: 'entries_on_the_fifth_block_row', title: 'Entries on the fifth block-row', subtitle: 'System Jacobian' },
  { id: 'jacobian_with_explicit_zero_blocks', title: 'Jacobian with explicit zero-blocks', subtitle: 'System Jacobian' },
  { id: 'basis_functions', title: 'Basis functions' },
  { id: 'derivatives_of_the_basis_functions', title: 'Derivatives of the basis functions', subtitle: 'Basis functions' },
  { id: 'integrals_over_triangular_elements', title: 'Integrals over triangular elements' },
  { id: 'a_terms', title: 'a terms', subtitle: 'Integrals over triangular elements' },
  { id: 'b_terms', title: 'b terms', subtitle: 'Integrals over triangular elements' },
  { id: 'derivatives_of_integrals_over_triangle_e', title: 'Derivatives of integrals over triangle elements', subtitle: 'Integrals over triangular elements' },
  { id: 'derivatives_of_a_terms', title: 'Derivatives of a terms', subtitle: 'Integrals over triangular elements' },
  { id: 'derivatives_of_b_terms', title: 'Derivatives of b terms', subtitle: 'Integrals over triangular elements' },
  { id: 'the_free_surface_line_elements', title: 'The free-surface line elements', subtitle: 'Integrals over line elements' },
  { id: 'the_liquid_solid_surface_line_elements', title: 'The liquid-solid surface line elements', subtitle: 'Integrals over line elements' },
  { id: 'the_inflow_boundary_line_elements', title: 'The inflow boundary line elements', subtitle: 'Integrals over line elements' },
  { id: 'derivatives_of_line_element_integrals', title: 'Derivatives of line-element integrals', subtitle: 'Integrals over line elements' },
  { id: 'derivatives_of_c_terms', title: 'Derivatives of c terms', subtitle: 'Integrals over line elements' },
  { id: 'derivatives_of_d_terms', title: 'Derivatives of d terms', subtitle: 'Integrals over line elements' },
  { id: 'derivatives_of_f_terms', title: 'Derivatives of f terms', subtitle: 'Integrals over line elements' },
  { id: 'derivatives_of_r_and_z_with_respect_to_h', title: 'Derivatives of r and z with respect to h' },
];

export const equations = [
  {
    id: '2.1',
    section: 'governing_equations',
    label: "ALE Momentum Equation",
    latex: String.raw`\partial_{t}\boldsymbol{u}^{\prime} + (\boldsymbol{u}^{\prime} - \boldsymbol{c}^{\prime})\cdot \nabla^{\prime}\boldsymbol{u}^{\prime} = \frac{\nabla^{\prime}\cdot\boldsymbol{P}^{\prime}}{\rho} +g\hat{g}`,
    description: "The equations for conservation of momentum in an arbitrary Lagrangian-Eulerian (ALE) frame of reference are given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '2.2',
    section: 'governing_equations',
    label: "Stress Tensor",
    latex: String.raw`\boldsymbol{P}^{\prime} = \left\{-p^{\prime}I + \rho \nu \left[\nabla^{\prime}\boldsymbol{u}^{\prime} + (\nabla^{\prime}\boldsymbol{u}^{\prime})^{T}\right]\right\}`,
    description: "Where is the velocity of the fluid, is the velocity of the ALE coordinates, is the fluid density (which we assume is uniform and constant), is the modulus of the acceleration of gravity, is the unit",
    references: ["2.1"],
    transform: "From (2.1)",
    hidden: false,
  },
  {
    id: '2.3',
    section: 'governing_equations',
    label: "Continuity (Mass Conservation)",
    latex: String.raw`\nabla^{\prime}\cdot \boldsymbol{u}^{\prime} = 0`,
    description: "Conservation of mass is given by",
    references: ["2.1"],
    transform: "From (2.1)",
    hidden: false,
  },
  {
    id: '2.4',
    section: 'boundary_conditions_at_the_axis_of_symme',
    label: "Axis Impermeability",
    latex: String.raw`u^{\prime}\cdot n^{3} = 0`,
    description: "Conservation of mass is given by Flow at the axis of symmetry is subject to impermeability",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '2.5',
    section: 'boundary_conditions_at_the_axis_of_symme',
    label: "Axis No-Tangential-Stress",
    latex: String.raw`n^3\cdot P^{\prime}\cdot (I - n^3 n^3) = 0`,
    description: "Conservation of mass is given by Flow at the axis of symmetry is subject to impermeability where is the unit normal to boundary 3 which points into the domain, and to no tangential stress",
    references: ["2.4"],
    transform: "From (2.4)",
    hidden: false,
  },
  {
    id: '2.6',
    section: 'the_free_surface',
    label: "Free Surface KBC",
    latex: String.raw`(v^{s_1'} - c') \cdot n^1 = 0`,
    description: "On the free surface, the flow is subject to the kinematic boundary condition (KBC)",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '2.7',
    section: 'the_free_surface',
    label: "Tangential DBC (Free Surface)",
    latex: String.raw`n^1\cdot P^{\prime}\cdot (I - n^1 n^1) = -\nabla^{s_1'}\sigma^{1'}`,
    description: "And to tangential and normal dynamic boundary conditions (DBC), given respectively by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '2.8',
    section: 'the_free_surface',
    label: "Normal DBC (Free Surface)",
    latex: String.raw`\left(n^1\cdot P\cdot n^1\right)n^1 = \left(\sigma^{1'}\nabla^{s'}\cdot n^1\right)n^1 -p^{g'n^1}`,
    description: "And to tangential and normal dynamic boundary conditions (DBC), given respectively by and",
    references: ["2.7"],
    transform: "From (2.7)",
    hidden: false,
  },
  {
    id: '2.9',
    section: 'the_free_surface',
    label: "Surface Divergence Identity",
    latex: String.raw`\begin{array}{r}\nabla^{s'}\cdot \left[\sigma '(I - n^1 n^1)\right] = \nabla^{s'}\cdot (\sigma 'I) - \nabla^{s'}\cdot \left[\sigma '(n^1 n^1)\right]\\ = (\nabla^{s'}\sigma 'I - \sigma '\nabla^{s'}\cdot J - (\nabla^{s'}\sigma ')\cdot n^1 n^1 - \sigma '(\nabla^{s'}\cdot n^1)n^1 \end{array}`,
    description: "The latter two equations can be combined into a single one (henceforth called DBC1) by noticing that",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '2.10',
    section: 'the_free_surface',
    label: "Combined DBC1",
    latex: String.raw`P^{\prime}\cdot n^{1} = -p^{g^{\prime}}n^{1} - \nabla^{s^{\prime}}\cdot \left[\sigma^{1^{\prime}}(I - n^{1}n^{1})\right]`,
    description: "The latter two equations can be combined into a single one (henceforth called DBC1) by noticing that and that adding equations (2.7) and (2.8) we have the DBC1",
    references: ["2.7", "2.8", "2.9"],
    transform: "From (2.7), (2.8), (2.9)",
    hidden: false,
  },
  {
    id: '2.11',
    section: 'the_free_surface',
    label: "Surface-Bulk Velocity (SC1)",
    latex: String.raw`(v^{s_1'} - u') \cdot (I - n^1 n^1) = \frac{1 + 4\alpha_g\beta_g}{4\beta_g}\nabla^s\sigma^{1'}`,
    description: "And that adding equations (2.7) and (2.8) we have the DBC1 Four further conditions are needed for the free surface",
    references: ["2.7", "2.8"],
    transform: "From (2.7), (2.8)",
    hidden: false,
  },
  {
    id: '2.12',
    section: 'the_free_surface',
    label: "Surface Tension vs Density (TDC1)",
    latex: String.raw`\sigma^{1} = \gamma_{g}\left(\rho^{s^{\prime}}(0) - \rho^{s_{1}^{\prime}}\right)`,
    description: "These are which states that the tangential velocity between the free-surface phase and the bulk phase at the same location is proportional to the surface gradient of surface tension (henceforth",
    references: ["2.11"],
    transform: "From (2.11)",
    hidden: false,
  },
  {
    id: '2.13',
    section: 'the_free_surface',
    label: "Mass Exchange (MEC1)",
    latex: String.raw`\rho (u^{\prime} - v^{s_{1}^{\prime}})\cdot n^{1} = \frac{(\rho^{s_{1}^{\prime}} - \rho^{s_{1},c})}{\tau_{g}}`,
    description: "The mass exchange between surface and bulk condition",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '2.14',
    section: 'the_free_surface',
    label: "Density Transport (DTC1)",
    latex: String.raw`\partial_{t^{\prime}}\rho^{s_{1}^{\prime}} - \boldsymbol{c}^{\prime}\cdot \nabla^{s^{\prime}}\rho^{s_{1}^{\prime}} + \nabla^{s^{\prime}}\cdot (\rho^{s_{1}^{\prime}}\boldsymbol{v}^{s_{1}^{\prime}}) = \frac{\rho^{s_{1},c} - \rho^{s_{1}^{\prime}}}{\tau_{g}}`,
    description: "And the mass transport equations on the free surface",
    references: ["2.13"],
    transform: "From (2.13)",
    hidden: false,
  },
  {
    id: '2.15',
    section: 'the_free_surface',
    label: "Vector Calculus Identity",
    latex: String.raw`\nabla^{s}\cdot (\phi \boldsymbol{A}) = \boldsymbol{A}\cdot \nabla^{s}\phi +\phi \nabla^{s}\cdot \boldsymbol{A}`,
    description: "We recall the vector calculus identity",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '2.16',
    section: 'the_free_surface',
    label: "Product Rule Expansion",
    latex: String.raw`\nabla^{s^{\prime}}\cdot (\rho^{s_{1}^{\prime}}\boldsymbol{c}^{\prime}) = \boldsymbol{c}\cdot \nabla^{s^{\prime}}\rho^{s_{1}^{\prime}} + \rho^{s_{1}^{\prime}}\nabla^{s^{\prime}}\cdot \boldsymbol{c}^{\prime}`,
    description: "We recall the vector calculus identity We take and and obtain",
    references: ["2.15"],
    transform: "From (2.15)",
    hidden: false,
  },
  {
    id: '2.17',
    section: 'the_free_surface',
    label: "Rearranged Convective Term",
    latex: String.raw`-\boldsymbol{c}\cdot \nabla^{s^{\prime}}\rho^{s_{1}^{\prime}} = -\nabla^{s^{\prime}}\cdot (\rho^{s_{1}^{\prime}}\boldsymbol{c}^{\prime}) + \rho^{s_{1}^{\prime}}\nabla^{s^{\prime}}\cdot \boldsymbol{c}^{\prime}`,
    description: "We recall the vector calculus identity We take and and obtain i.e",
    references: ["2.16"],
    transform: "From (2.16)",
    hidden: false,
  },
  {
    id: '2.18',
    section: 'the_free_surface',
    label: "DTC1 Substituted",
    latex: String.raw`\partial_{t}\rho^{s_{1}^{\prime}} + \rho^{s_{1}^{\prime}}\nabla^{s^{\prime}}\cdot \boldsymbol{c}^{\prime} - \nabla^{s^{\prime}}\cdot (\rho^{s_{1}^{\prime}}\boldsymbol{c}^{\prime}) + \nabla^{s^{\prime}}\cdot (\rho^{s_{1}^{\prime}}\boldsymbol{v}^{s_{1}^{\prime}}) = \frac{\rho^{s_{1},c} - \rho^{s_{1}^{\prime}}}{\tau_{g}}`,
    description: "Taking this result into condition DTC1, we have",
    references: ["2.14", "2.17"],
    transform: "From (2.14), (2.17)",
    hidden: false,
  },
  {
    id: '2.19',
    section: 'the_free_surface',
    label: "DTC1 Final Form",
    latex: String.raw`\partial_{t}\rho^{s_{1}^{\prime}} + \rho^{s_{1}^{\prime}}\nabla^{s^{\prime}}\cdot \boldsymbol{c}^{\prime} + \nabla^{s^{\prime}}\cdot [\rho^{s_{1}^{\prime}}(\boldsymbol{v}^{s_{1}^{\prime}} - \boldsymbol{c}^{\prime})] = \frac{\rho^{s_{1},c} - \rho^{s_{1}^{\prime}}}{\tau_{g}}`,
    description: "Taking this result into condition DTC1, we have i.e",
    references: ["2.18"],
    transform: "From (2.18)",
    hidden: false,
  },
  {
    id: '2.20',
    section: 'the_liquid_solid_surface',
    label: "Solid Impermeability (IC)",
    latex: String.raw`(\boldsymbol{v}^{2^{\prime}} - \boldsymbol{u}^{s^{\prime}})\cdot \boldsymbol{n}^{2} = 0`,
    description: "On the liquid-solid interface, we have the impermeability condition (IC)",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '2.21',
    section: 'the_liquid_solid_surface',
    label: "Slip Condition (SC2)",
    latex: String.raw`\left[\boldsymbol{v}^{s_{2}^{\prime}} - \frac{1}{2} (\boldsymbol{u}^{\prime} + \boldsymbol{u}^{s^{\prime}})\right]\cdot (\boldsymbol{l} - \boldsymbol{n}^{2}\boldsymbol{n}^{2}) = \alpha_{s}\nabla^{s^{\prime}}\sigma^{2^{\prime}};`,
    description: "The slip condition between the surface phase, the bulk and the solid (SC2)",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '2.22',
    section: 'the_liquid_solid_surface',
    label: "Generalised Navier Slip (GNSC)",
    latex: String.raw`\boldsymbol{n}^{2}\cdot \boldsymbol{P}^{\prime}\cdot (\boldsymbol{l} - \boldsymbol{n}^{2}\boldsymbol{n}^{2}) + \frac{1}{2}\nabla^{s^{\prime}}\sigma^{2^{\prime}} = \beta_{s}(\boldsymbol{u}^{\prime} - \boldsymbol{u}^{s^{\prime}})\cdot (\boldsymbol{l} - \boldsymbol{n}^{2}\boldsymbol{n}^{2})`,
    description: "The slip condition between the surface phase, the bulk and the solid (SC2) the Generalised Navier Slip Condition (GNSC), which plays the role of tangential DBC",
    references: ["2.21"],
    transform: "From (2.21)",
    hidden: false,
  },
  {
    id: '2.23',
    section: 'the_liquid_solid_surface',
    label: "GNSC with SC1",
    latex: String.raw`n^2\cdot \boldsymbol{P}^{\prime}\cdot (I - n^2 n^2) + \frac{1}{2\alpha_s}\left[v^{s_2} - \frac{1}{2} (u^{\prime} + u^{s^{\prime}})\right]\cdot (I - n^2 n^2) = \beta_s(u^{\prime} - u^{s^{\prime}})\cdot (I - n^2 n^2)`,
    description: "We substitute condition SC1 into the GNSC and obtain",
    references: ["2.22", "2.11"],
    transform: "From (2.22), (2.11)",
    hidden: false,
  },
  {
    id: '2.24',
    section: 'the_liquid_solid_surface',
    label: "Surface Tension vs Density (TDC2)",
    latex: String.raw`\sigma^{2^{\prime}} = \gamma_{s}\left(\rho_{(0)}^{s} - \rho^{s_{2^{\prime}}}\right);`,
    description: "We substitute condition SC1 into the GNSC and obtain the dependence of surface tension on surface density for boundary 2 (henceforth called TDC2)",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '2.25',
    section: 'the_liquid_solid_surface',
    label: "Mass Exchange (MEC2)",
    latex: String.raw`\rho (u^{\prime} - v^{s_{2^{\prime}}})\cdot n^{2} = \frac{\rho^{s_{2^{\prime}}} - \rho^{s_{2^{\prime}}}}{\tau_{s}};`,
    description: "N SC1 into the GNSC and obtain the dependence of surface tension on surface density for boundary 2 (henceforth called TDC2) the condition for mass exchange between interface 2 and the bulk",
    references: ["2.24"],
    transform: "From (2.24)",
    hidden: false,
  },
  {
    id: '2.26',
    section: 'the_liquid_solid_surface',
    label: "Density Transport (DTC2)",
    latex: String.raw`\partial_{t}\rho^{s_{2^{\prime}}} - \boldsymbol{c}^{\prime}\cdot \nabla^{\prime}\rho^{s_{2^{\prime}}} + \nabla^{s^{\prime}}\cdot (\rho^{s_{2^{\prime}}}v^{s_{2^{\prime}}}) = \frac{\rho^{s_{2^{\prime}}} - \rho^{s_{2^{\prime}}}}{\tau_{s}}`,
    description: "The dependence of surface tension on surface density for boundary 2 (henceforth called TDC2) the condition for mass exchange between interface 2 and the bulk (henceforth called MEC2) and the",
    references: ["2.25"],
    transform: "From (2.25)",
    hidden: false,
  },
  {
    id: '2.27',
    section: 'the_liquid_solid_surface',
    label: "DTC2 Reformulated",
    latex: String.raw`\partial_{t}\rho^{s_{2^{\prime}}} + \rho^{s_{2^{\prime}}}\nabla^{s^{\prime}}\cdot \boldsymbol{c}^{\prime} + \nabla^{s^{\prime}}\cdot [\rho^{s_{2^{\prime}}}(v^{s_{2^{\prime}}} - \boldsymbol{c}^{\prime})] = \frac{\rho^{s_{2^{\prime}}} - \rho^{s_{2^{\prime}}}}{\tau_{s}}`,
    description: "And the condition for the transport of density along boundary 2 (henceforth called DTC2) which can be reformulated (using identical arguments as were used above for boundary 1) into",
    references: ["2.26"],
    transform: "From (2.26)",
    hidden: false,
  },
  {
    id: '2.28',
    section: 'boundary_conditions_at_contact_line',
    label: "Young's Equation",
    latex: String.raw`\sigma^{2^{\prime}} + \sigma^{1^{\prime}}\cos \theta_{c} = \sigma^{g - s}`,
    description: "The condition for these two equations is given by Young's equation for the contact angle, i.e",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '2.29',
    section: 'boundary_conditions_at_contact_line',
    label: "Mass Balance at Contact Line",
    latex: String.raw`\rho^{s_{1^{\prime}}}\left(v_{\parallel}^{s_{1^{\prime}}} - u_{c^{\prime}}\right)\cdot m^{1} + \rho^{s_{2^{\prime}}}\left(v_{\parallel}^{s_{2^{\prime}}} - u_{c^{\prime}}\right)\cdot m^{2} = 0`,
    description: "The necessary condition is given by the mass balance (henceforth referred to as MBC) at the contact line, i.e",
    references: ["2.28"],
    transform: "From (2.28)",
    hidden: false,
  },
  {
    id: '2.30',
    section: 'boundary_conditions_at_contact_line',
    label: "Normal m1 via Rotation",
    latex: String.raw`m^{1} = \cos (\theta_{c})m^{2} + \sin (\theta_{c})n^{2}(c)`,
    description: "Since is given by a rotation of of , it is more convenient to express as",
    references: ["2.29"],
    transform: "From (2.29)",
    hidden: false,
  },
  {
    id: '2.31',
    section: 'boundary_conditions_at_contact_line',
    label: "Tangent m2",
    latex: String.raw`m^{2} = (-\cos (-\theta_{s c}),\sin (-\theta_{s c}))`,
    description: "Since is given by a rotation of of , it is more convenient to express as where is the normal to surface 2 at the contact line",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '2.32',
    section: 'boundary_conditions_at_contact_line',
    label: "Solid Contact Angle",
    latex: String.raw`\theta_{sc} = \arctan (\theta_{r}z^{s})`,
    description: "Where, in turn, where",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '2.33',
    section: 'boundary_conditions_at_contact_line',
    label: "cos(theta) = m1 dot m2",
    latex: String.raw`\cos (\theta_{c}) = m^{1}\cdot m^{2}`,
    description: "Where, in turn, where Equation (2.30) implies that",
    references: ["2.30"],
    transform: "From (2.30)",
    hidden: false,
  },
  {
    id: '2.34',
    section: 'the_split_domain_formulation',
    label: "Normal Stress on Bdry 4",
    latex: String.raw`n^4\cdot P^{\prime}\cdot n^4 = \lambda^4`,
    description: "On boundary 4 we thus have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '2.35',
    section: 'the_split_domain_formulation',
    label: "Tangential Stress on Bdry 4",
    latex: String.raw`n^4\cdot P^{\prime}\cdot (I - n^4 n^4) = \gamma^4 t^4`,
    description: "The normal stress on boundary 4 is given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '2.36',
    section: 'bulk_equations',
    label: "Momentum Non-dim (Step 1)",
    latex: String.raw`\frac{U^2}{L}\partial_tu + \frac{U^2}{L} u(u - c)\cdot \nabla u = \frac{\rho\nu U}{L^2}\frac{\nabla\cdot P}{\rho} +g\hat{g}`,
    description: "And we non-dimensionalise the momentum equation as follows",
    references: ["2.1"],
    transform: "From (2.1)",
    hidden: false,
  },
  {
    id: '2.37',
    section: 'bulk_equations',
    label: "Dimensionless Stress Tensor",
    latex: String.raw`P = \left\{-pl + \left[\nabla u + (\nabla u)^T\right]\right\}`,
    description: "And we non-dimensionalise the momentum equation as follows with",
    references: ["2.2"],
    transform: "From (2.2)",
    hidden: false,
  },
  {
    id: '2.38',
    section: 'bulk_equations',
    label: "Non-dim Momentum Equation",
    latex: String.raw`R e[\partial_{t}u + (u - c)\cdot \nabla u] - \nabla \cdot P + S t e_{z} = 0`,
    description: "We multiply equation (2.36) by to obtain",
    references: ["2.36"],
    transform: "From (2.36)",
    hidden: false,
  },
  {
    id: '2.39',
    section: 'bulk_equations',
    label: "Reynolds Number",
    latex: String.raw`R e = U L / \nu`,
    description: "We multiply equation (2.36) by to obtain where",
    references: ["2.38"],
    transform: "From (2.38)",
    hidden: false,
  },
  {
    id: '2.40',
    section: 'bulk_equations',
    label: "Stokes Number",
    latex: String.raw`S t = g L^{2} / (\nu U)`,
    description: "We multiply equation (2.36) by to obtain where and",
    references: ["2.38"],
    transform: "From (2.38)",
    hidden: false,
  },
  {
    id: '2.41',
    section: 'bulk_equations',
    label: "Dimensionless Continuity",
    latex: String.raw`\nabla \cdot \boldsymbol{u} = 0`,
    description: "And the continuity equation retains its form",
    references: ["2.3"],
    transform: "From (2.3)",
    hidden: false,
  },
  {
    id: '2.42',
    section: 'the_axis_of_symmetry',
    label: "Axis Impermeability (Non-dim)",
    latex: String.raw`u\cdot n^3 = 0`,
    description: "And the continuity equation retains its form On the axis of symmetry, the boundary conditions are given by",
    references: ["2.4"],
    transform: "From (2.4)",
    hidden: false,
  },
  {
    id: '2.43',
    section: 'the_axis_of_symmetry',
    label: "Axis No-Stress (Non-dim)",
    latex: String.raw`n^3\cdot P\cdot (I - n^3 n^3) = 0`,
    description: "And the continuity equation retains its form On the axis of symmetry, the boundary conditions are given by and",
    references: ["2.5"],
    transform: "From (2.5)",
    hidden: false,
  },
  {
    id: '2.44',
    section: 'the_free_surface',
    label: "KBC (Non-dim)",
    latex: String.raw`(\boldsymbol{v}^{s_1} - \boldsymbol{c})\cdot \boldsymbol{n}^1 = 0`,
    description: "And the continuity equation retains its form On the axis of symmetry, the boundary conditions are given by and On the free surface, the kinematic boundary condition yields",
    references: ["2.6"],
    transform: "From (2.6)",
    hidden: false,
  },
  {
    id: '2.45',
    section: 'the_free_surface',
    label: "DBC Non-dim (Step 1)",
    latex: String.raw`\frac{\rho\nu U}{L} (p^{g\prime} + P^{\prime})\cdot n^{1} = -\frac{\sigma_{L}^{1\prime}}{L}\nabla^{s}\cdot \left[\sigma^{1\prime}(I - n^{1}n^{1})\right]`,
    description: "And the continuity equation retains its form On the axis of symmetry, the boundary conditions are given by and On the free surface, the kinematic boundary condition yields and the dynamic boundary",
    references: ["2.10"],
    transform: "From (2.10)",
    hidden: false,
  },
  {
    id: '2.46',
    section: 'the_free_surface',
    label: "DBC1 (Non-dim)",
    latex: String.raw`(p^{g} + P)\cdot n^{1} = -\frac{\nabla^{s}\cdot[\sigma^{1}(I - n^{1}n^{1})]}{Ca}`,
    description: "Nditions are given by and On the free surface, the kinematic boundary condition yields and the dynamic boundary condition results in",
    references: ["2.45"],
    transform: "From (2.45)",
    hidden: false,
  },
  {
    id: '2.47',
    section: 'the_free_surface',
    label: "SC1 (Non-dim)",
    latex: String.raw`(\boldsymbol{v}^{s_1} - \boldsymbol{u})\cdot (I - n^1 n^1) = \frac{1 + 4E_gB_g}{4B_g}\nabla^s\sigma^1`,
    description: "Moreover, the SC1 becomes",
    references: ["2.11"],
    transform: "From (2.11)",
    hidden: false,
  },
  {
    id: '2.48',
    section: 'the_free_surface',
    label: "TDC1 (Non-dim)",
    latex: String.raw`\sigma^1 = Cg(1 - \rho^{s_1})`,
    description: "Moreover, the SC1 becomes TDC1 is given by",
    references: ["2.12"],
    transform: "From (2.12)",
    hidden: false,
  },
  {
    id: '2.49',
    section: 'the_free_surface',
    label: "MEC1 (Non-dim)",
    latex: String.raw`(\boldsymbol{u} - \boldsymbol{v}^{s_1})\cdot \boldsymbol{n}^1 = Fg(\rho^{s_1} - Dg)`,
    description: "And the mass exchange between the free surface and the bulk",
    references: ["2.13"],
    transform: "From (2.13)",
    hidden: false,
  },
  {
    id: '2.50',
    section: 'the_free_surface',
    label: "DTC1 (Non-dim)",
    latex: String.raw`Tg\{\partial_t\rho^{s_1} + \rho^{s_1}\nabla^s\cdot \boldsymbol{c} + \nabla^s\cdot [\rho^{s_1}(\boldsymbol{v}^{s_1} - \boldsymbol{c})]\} = Dg - \rho^{s_1}`,
    description: "Furthermore, on boundary 1 we have the DTC1 which, in dimensionless form, is given by",
    references: ["2.19"],
    transform: "From (2.19)",
    hidden: false,
  },
  {
    id: '2.51',
    section: 'the_liquid_solid_interface',
    label: "IC (Non-dim)",
    latex: String.raw`\left(\boldsymbol{v}^2 -\boldsymbol{u}^s\right)\cdot \boldsymbol{n}^2 = 0;`,
    description: "Furthermore, on boundary 1 we have the DTC1 which, in dimensionless form, is given by where On the solid surface we have the IC, which in dimensionless form is given by",
    references: ["2.20"],
    transform: "From (2.20)",
    hidden: false,
  },
  {
    id: '2.52',
    section: 'the_liquid_solid_interface',
    label: "SC2 (Non-dim)",
    latex: String.raw`\left[\boldsymbol{v}^{s_2} - \frac{1}{2} (\boldsymbol{u} + \boldsymbol{u}^s)\right]\cdot (\boldsymbol{I} - \boldsymbol{n}^2 \boldsymbol{n}^2) = E_s \nabla^s \sigma^2`,
    description: "Furthermore, on boundary 1 we have the DTC1 which, in dimensionless form, is given by where On the solid surface we have the IC, which in dimensionless form is given by the SC2 becomes",
    references: ["2.21"],
    transform: "From (2.21)",
    hidden: false,
  },
  {
    id: '2.53',
    section: 'the_liquid_solid_interface',
    label: "GNSC (Non-dim)",
    latex: String.raw`n^2\cdot \boldsymbol{P}\cdot (\boldsymbol{I} - n^2 n^2) + \frac{1}{2CaE_s}\left[\boldsymbol{v}^{s_2} - \frac{1}{2} (\boldsymbol{u} + \boldsymbol{u}^s)\right]\cdot (\boldsymbol{I} - n^2 n^2) = B e(\boldsymbol{u} - \boldsymbol{u}^s)\cdot (\boldsymbol{I} - n^2 n^2)`,
    description: "The free-surface equilibrium surface tension is taken as unit of surface tension and we note that if",
    references: ["2.22", "2.52"],
    transform: "From (2.22), (2.52)",
    hidden: false,
  },
  {
    id: '2.54',
    section: 'the_liquid_solid_interface',
    label: "TDC2 (Non-dim)",
    latex: String.raw`\sigma^2 = C_s(1 - \rho^{s_2});`,
    description: "The GNSC is given by where and we recall that The dependence of surface tension on density (TDC2) becomes",
    references: ["2.24"],
    transform: "From (2.24)",
    hidden: false,
  },
  {
    id: '2.55',
    section: 'the_liquid_solid_interface',
    label: "MEC2 (Non-dim)",
    latex: String.raw`(\boldsymbol{u} - \boldsymbol{v}^{s_2})\cdot \boldsymbol{n}^2 = Fs(\rho^{s_2} - Ds)`,
    description: "And the mass exchange between the bulk and the surface is given by",
    references: ["2.25"],
    transform: "From (2.25)",
    hidden: false,
  },
  {
    id: '2.56',
    section: 'the_liquid_solid_interface',
    label: "DTC2 (Non-dim)",
    latex: String.raw`T_{s}\left\{\partial_{t}\rho^{s_{2}} + \rho^{s_{2}}\nabla^{s}\cdot \boldsymbol{c} + \nabla^{s}\cdot [\rho^{s_{2}}(\boldsymbol{v}^{s_{2}} - \boldsymbol{c})]\right\} = D_{s} - \rho^{s_{2}}`,
    description: "And the mass exchange between the bulk and the surface is given by where and Furthermore, we have the DTC2 which is given by",
    references: ["2.27"],
    transform: "From (2.27)",
    hidden: false,
  },
  {
    id: '2.57',
    section: 'contact_line_conditions',
    label: "Young's Equation (Non-dim)",
    latex: String.raw`\sigma^{1}\cos (\theta_{c}) + \sigma^{2} = S_{0}`,
    description: "Where and Furthermore, we have the DTC2 which is given by where we recall that For the stress condition at the contact line we have",
    references: ["2.28"],
    transform: "From (2.28)",
    hidden: false,
  },
  {
    id: '2.58',
    section: 'contact_line_conditions',
    label: "MBC (Non-dim)",
    latex: String.raw`\rho^{s_1}(v^{s_1} - u)\cdot m^1 +\rho^{s_2}(v^{s_2} - u)\cdot m^2 = 0`,
    description: "Finally for the mass balance condition MBC between the two surfaces we have",
    references: ["2.29"],
    transform: "From (2.29)",
    hidden: false,
  },
  {
    id: '2.59',
    section: 'contact_line_conditions',
    label: "Contact Angle (Non-dim)",
    latex: String.raw`\cos (\theta_c) = m^1 \cdot m^2`,
    description: "The contact angle condition",
    references: ["2.33"],
    transform: "From (2.33)",
    hidden: false,
  },
  {
    id: '3.1',
    section: 'momentum_continuity_and_kinematic_condit',
    label: "r-Momentum (Components)",
    latex: String.raw`Re\partial_{t}u + Reu\partial_{r}u + Rew\partial_{z}u - Reu^{c}\partial_{r}u - Rew^{c}\partial_{z}u - St\hat{g}_{r} - e_{r}\cdot \nabla \cdot \boldsymbol{P} = 0`,
    description: "Defining and re-writing the governing equations by components we have the -momentum equation",
    references: ["2.38"],
    transform: "From (2.38)",
    hidden: false,
  },
  {
    id: '3.2',
    section: 'momentum_continuity_and_kinematic_condit',
    label: "z-Momentum (Components)",
    latex: String.raw`Re\partial_{t}w + Reu\partial_{r}w + Rew\partial_{z}w - Reu^{c}\partial_{r}w - Rew^{c}\partial_{z}w - St\hat{g}_{z} - e_{z}\cdot \nabla \cdot \boldsymbol{P} = 0`,
    description: "Defining and re-writing the governing equations by components we have the -momentum equation the -momentum equation",
    references: ["2.38"],
    transform: "From (2.38)",
    hidden: false,
  },
  {
    id: '3.3',
    section: 'momentum_continuity_and_kinematic_condit',
    label: "Continuity (Components)",
    latex: String.raw`\partial_{r}u + \partial_{z}w = 0;`,
    description: "And re-writing the governing equations by components we have the -momentum equation the -momentum equation and the continuity equation",
    references: ["2.41"],
    transform: "From (2.41)",
    hidden: false,
  },
  {
    id: '3.4',
    section: 'momentum_continuity_and_kinematic_condit',
    label: "KBC (Components)",
    latex: String.raw`(u - u^{c})n_{r}^{1} + (w - w^{c})n_{z}^{1} = 0`,
    description: "Momentum equation the -momentum equation and the continuity equation which are subject to the KBC",
    references: ["2.44"],
    transform: "From (2.44)",
    hidden: false,
  },
  {
    id: '3.5',
    section: 'momentum_continuity_and_kinematic_condit',
    label: "IC (Components)",
    latex: String.raw`(u - u^{s})n_{r}^{2} + (w - w^{s})n_{z}^{2} = 0`,
    description: "The -momentum equation and the continuity equation which are subject to the KBC on the free surface, where , and to the IC",
    references: ["2.51"],
    transform: "From (2.51)",
    hidden: false,
  },
  {
    id: '4.1',
    section: 'the_r_momentum_residuals',
    label: "r-Momentum Residual",
    latex: String.raw`\begin{array}{l}{\mathcal{M}_{i}^{r} = Re\int_{\Omega^{f}}\phi_{i}\partial_{t}u + Re\int_{\Omega^{f}}\phi_{i}u\partial_{r}u + Re\int_{\Omega^{f}}\phi_{i}w\partial_{z}u - Re\int_{\Omega^{f}}\phi_{i}u^{c}\partial_{r}u}\\ {~ - Re\int_{\Omega^{f}}\phi_{i}w^{c}\partial_{z}u - St\int_{\Omega^{f}}\phi_{i}\bar{g}_{r} - \int_{\Omega^{f}}\phi_{i}e_{r}\cdot \nabla \cdot \boldsymbol{P},} \end{array}`,
    description: "We define the -th residuals of the -momentum equation as",
    references: ["3.1"],
    transform: "From (3.1)",
    hidden: false,
  },
  {
    id: '4.2',
    section: 'the_r_momentum_residuals',
    label: "Tensor Divergence Identity",
    latex: String.raw`\nabla \cdot (\boldsymbol{x}\cdot \boldsymbol{A}) = \boldsymbol{x}\cdot \nabla \cdot \boldsymbol{A} + \nabla \boldsymbol{x}:\boldsymbol{A}`,
    description: "We recall the tensor identity",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.3',
    section: 'the_r_momentum_residuals',
    label: "Applied to Stress",
    latex: String.raw`-\phi_{i}e_{r}\cdot \nabla \cdot \boldsymbol{P} = -\nabla \cdot (\phi_{i}e_{r}\cdot \boldsymbol{P}) + \nabla (\phi_{i}e_{r}):\boldsymbol{P}`,
    description: "We recall the tensor identity taking and we have",
    references: ["4.2"],
    transform: "From (4.2)",
    hidden: false,
  },
  {
    id: '4.4',
    section: 'the_r_momentum_residuals',
    label: "Residual with IBP",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^r = Re\int_{\Omega^f}\phi_i\partial_tu + Re\int_{\Omega^f}\phi_iu\partial_r u + Re\int_{\Omega^f}\phi_iw\partial_z u - Re\int_{\Omega^f}\phi_iu^c\partial_r u \\ - Re\int_{\Omega^f}\phi_iw^c\partial_z u - St\int_{\Omega^f}\phi_i\hat{g}_r + \int_{\Omega^f}\nabla(\phi_ie_r):\boldsymbol{P} - \int_{\Omega^f}\nabla\cdot (\phi_ie_r\cdot \boldsymbol{P}), \end{array}`,
    description: "We recall the tensor identity taking and we have which reduces to",
    references: ["4.1", "4.3"],
    transform: "From (4.1), (4.3)",
    hidden: false,
  },
  {
    id: '4.5',
    section: 'the_r_momentum_residuals',
    label: "After Divergence Theorem",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^r = Re\int_{\Omega^f}\phi_i\partial_tu + Re\int_{\Omega^f}\phi_iu\partial_r u + Re\int_{\Omega^f}\phi_iw\partial_z u - Re\int_{\Omega^f}\phi_iu^c\partial_r u \\ - Re\int_{\Omega^f}\phi_iw^c\partial_z u - St\int_{\Omega^f}\phi_i\hat{g}_r + \int_{\Omega^f}\nabla(\phi_ie_r):\boldsymbol{P} + \int_{\partial\Omega}\phi_ie_r\cdot \boldsymbol{P}\cdot n, \end{array}`,
    description: "Which reduces to we can now apply the divergence theorem to the last term on the right hand side above to obtain",
    references: ["4.4"],
    transform: "From (4.4)",
    hidden: false,
  },
  {
    id: '4.6',
    section: 'the_r_momentum_residuals',
    label: "Grad-Stress (Matrix)",
    latex: String.raw`\nabla(\phi_ie_r):\boldsymbol{P} = \begin{pmatrix} \partial_r\phi_i \\ \partial_z\phi_i \\ 0 \\ 0 \end{pmatrix} : \begin{pmatrix} P_{rr} & P_{rz} \\ P_{zr} & P_{zz} \end{pmatrix}`,
    description: "Term on the right hand side above to obtain where is the boundary of , and is its unit normal, that points into",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.7',
    section: 'the_r_momentum_residuals',
    label: "Grad-Stress (Components)",
    latex: String.raw`\nabla(\phi_ie_r):\boldsymbol{P} = \begin{pmatrix} \partial_r\phi_i \\ \partial_z\phi_i \\ 0 \\ 0 \end{pmatrix} : \begin{pmatrix} -p + 2\partial_ru & \partial_zu + \partial_rw \\ \partial_rw + \partial_zu & -p + 2\partial_zw \end{pmatrix}`,
    description: "Where is the boundary of , and is its unit normal, that points into",
    references: ["4.6"],
    transform: "From (4.6)",
    hidden: false,
  },
  {
    id: '4.8',
    section: 'the_r_momentum_residuals',
    label: "Grad-Stress Simplified",
    latex: String.raw`\nabla(\phi_ie_r):\boldsymbol{P} = \partial_r\phi_i P_{rr} + \partial_z\phi_i P_{rz} = -p\partial_r\phi_i + 2\partial_ru\partial_r\phi_i + \partial_zu\partial_z\phi_i + \partial_rw\partial_z\phi_i`,
    description: "Of , and is its unit normal, that points into",
    references: ["4.7"],
    transform: "From (4.7)",
    hidden: false,
  },
  {
    id: '4.9',
    section: 'the_r_momentum_residuals',
    label: "Full Residual M_i^r",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^r = Re\int_{\Omega^f}\phi_i\partial_tu + Re\int_{\Omega^f}\phi_iu\partial_r u + Re\int_{\Omega^f}\phi_iw\partial_z u - Re\int_{\Omega^f}\phi_iu^c\partial_r u - Re\int_{\Omega^f}\phi_iw^c\partial_z u \\ - St\int_{\Omega^f}\phi_i\hat{g}_r - \int_{\Omega^f}p\partial_r\phi_i + 2\int_{\Omega^f}\partial_ru\partial_r\phi_i + \int_{\Omega^f}\partial_zu\partial_z\phi_i + \int_{\Omega^f}\partial_rw\partial_z\phi_i + \int_{\partial\Omega}\phi_ie_r\cdot \boldsymbol{P}\cdot n, \end{array}`,
    description: "Which is Therefore we have",
    references: ["4.5", "4.8"],
    transform: "From (4.5), (4.8)",
    hidden: false,
  },
  {
    id: '4.10',
    section: 'the_r_momentum_residuals',
    label: "Cross-Derivative Integral",
    latex: String.raw`\int_{\Omega^f}\partial_rw\partial_z\phi_i`,
    description: "We now consider the penultimate term in the RHS of the equation above, i.e",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.11',
    section: 'the_r_momentum_residuals',
    label: "Integration by Parts",
    latex: String.raw`\int_{\Omega}f\partial_{x_i}g = -\int_{\Omega}g\partial_{x_i}f - \int_{\partial\Omega}fgn_i`,
    description: "We recall the multi-variable integration by parts formula given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.12',
    section: 'the_r_momentum_residuals',
    label: "IBP Step 1",
    latex: String.raw`\int_{\Omega^f}\partial_r w\partial_z\phi_i = -\int_{\Omega^f}\phi_i\partial_z\partial_r w - \int_{\partial\Omega^f}\phi_i n_z^1\partial_r w`,
    description: "We recall the multi-variable integration by parts formula given by where is the i-th Cartesian component of the inward-pointing unit normal to",
    references: ["4.10", "4.11"],
    transform: "From (4.10), (4.11)",
    hidden: false,
  },
  {
    id: '4.13',
    section: 'the_r_momentum_residuals',
    label: "Derivative Exchange",
    latex: String.raw`\int_{\Omega^f}\partial_r w\partial_z\phi_i = -\int_{\Omega^f}\phi_i\partial_z\partial_r w - \int_{\partial\Omega^f}\phi_i n_z^1\partial_r w`,
    description: "Taking and , we have We can then exchange the order of the derivatives of in the first integral on the RHS above to obtain",
    references: ["4.12"],
    transform: "From (4.12)",
    hidden: false,
  },
  {
    id: '4.14',
    section: 'the_r_momentum_residuals',
    label: "Second IBP",
    latex: String.raw`\int_{\Omega^f}\partial_r w\partial_z\phi_i = \int_{\Omega^f}\partial_r\phi_i\partial_z w + \int_{\partial\Omega^f}\phi_i n_z^1\partial_z w - \int_{\partial\Omega^f}\phi_i n_z^1\partial_r w`,
    description: "Ave We can then exchange the order of the derivatives of in the first integral on the RHS above to obtain and taking and above, we can apply integration by parts once more, obtaining",
    references: ["4.13"],
    transform: "From (4.13)",
    hidden: false,
  },
  {
    id: '4.15',
    section: 'the_r_momentum_residuals',
    label: "Continuity Substitution",
    latex: String.raw`\int_{\Omega^f}\partial_r w\partial_z\phi_i = \int_{\Omega^f}\partial_r\phi_i\partial_z w - \int_{\partial\Omega^f}\phi_i n_z^1\partial_r u - \int_{\partial\Omega^f}\phi_i n_z^1\partial_r w`,
    description: "And taking and above, we can apply integration by parts once more, obtaining We now recall equation 2.41 which implies that , and we substitute this expression into the second integral on the RHS",
    references: ["4.14", "2.41"],
    transform: "From (4.14), (2.41)",
    hidden: false,
  },
  {
    id: '4.16',
    section: 'the_r_momentum_residuals',
    label: "Expanded Residual",
    latex: String.raw`\begin{array}{l}{\mathcal{M}_i^r = Re\int_{\Omega^f}\phi_i\partial_tu + Re\int_{\Omega^f}\phi_iu\partial_r u + Re\int_{\Omega^f}\phi_iw\partial_z u - Re\int_{\Omega^f}\phi_iu^c\partial_r u}\\ {~ - Re\int_{\Omega^f}\phi_iw^c\partial_z u - St\int_{\Omega^f}\phi_i\hat{g}_r - \int_{\Omega^f}p\partial_r\phi_i + \int_{\Omega^f}\partial_r u\partial_r\phi_i + \int_{\Omega^f}\partial_z u\partial_z\phi_i}\\ {~ + \int_{\Omega^f}\partial_r\phi_i(\partial_r u + \partial_z w) - \int_{\partial\Omega^f}\phi_i n_z^1\partial_r u - \int_{\partial\Omega^f}\phi_i n_z^1\partial_r w + \int_{\partial\Omega^f}\phi_i e_r\cdot \boldsymbol{P}\cdot n,} \end{array}`,
    description: "We now recall equation 2.41 which implies that , and we substitute this expression into the second integral on the RHS above, obtaining We substitute this into equation 4.9 and we have",
    references: ["4.9", "4.15"],
    transform: "From (4.9), (4.15)",
    hidden: false,
  },
  {
    id: '4.17',
    section: 'the_r_momentum_residuals',
    label: "Boundary Decomposition",
    latex: String.raw`{\int_{\partial\Omega^{2}}\phi_{i}e_{r}\cdot P\cdot n=\int_{\partial\Omega^{2},1}\phi_{i}e_{r}\cdot P\cdot n^{1}+\int_{\partial\Omega^{2},1}\phi_{i}e_{r}\cdot P\cdot\ n^{2}} {+\int_{\partial\Omega^{3}}\phi_{i}e_{r}\cdot P\cdot n^{3}+\int_{\partial\Omega^{4}}\phi_{i}e_{r}\cdot P\cdot n^{4},}`,
    description: "We now consider the last integral on the right hand side of the equation above",
    references: ["4.16"],
    transform: "From (4.16)",
    hidden: false,
  },
  {
    id: '4.18',
    section: 'the_r_momentum_residuals',
    label: "M_i^r = Sum of Parts",
    latex: String.raw`\mathcal{M}_i^r = \mathcal{M}_i^{r,0} + \mathcal{M}_i^{r,1} + \mathcal{M}_i^{r,2} + \mathcal{M}_i^{r,3} + \mathcal{M}_i^{r,5}`,
    description: "Taking this expansion into equation 4.9 we have",
    references: ["4.16", "4.17"],
    transform: "From (4.16), (4.17)",
    hidden: false,
  },
  {
    id: '4.19',
    section: 'the_r_momentum_residuals',
    label: "Bulk Residual M^{r,0}",
    latex: String.raw`\begin{array}{l}{\mathcal{M}_i^{r,0} = Re\int_{\Omega^f}\phi_i\partial_tu + Re\int_{\Omega^f}\phi_iu\partial_r u + Re\int_{\Omega^f}\phi_iu\partial_z u - Re\int_{\Omega^f}\phi_iu^c\partial_r u}\\ {~ - Re\int_{\Omega^f}\phi_iw^c\partial_z u - St\int_{\Omega^f}\phi_i\hat{g}_r - \int_{\Omega^f}p\partial_r\phi_i + \int_{\Omega^f}\partial_r u\partial_r\phi_i + \int_{\Omega^f}\partial_z u\partial_z\phi_i,} \end{array}`,
    description: "Taking this expansion into equation 4.9 we have where",
    references: ["4.18"],
    transform: "From (4.18)",
    hidden: false,
  },
  {
    id: '4.20',
    section: 'the_r_momentum_residuals',
    label: "Free Surface M^{r,1}",
    latex: String.raw`\mathcal{M}_{i}^{r,1} = -\int_{\partial \Omega^{1,f}}\phi_{i}n_{r}^{1}\partial_{r}u - \int_{\partial \Omega^{1,f}}\phi_{i}n_{r}^{1}\partial_{\nu}w + \int_{\partial \Omega^{1,f}}\phi_{i}e_{r}\cdot \boldsymbol{P}\cdot \boldsymbol{n}^{1}`,
    description: "",
    references: ["4.18"],
    transform: "From (4.18)",
    hidden: false,
  },
  {
    id: '4.21',
    section: 'the_r_momentum_residuals',
    label: "Solid Surface M^{r,2}",
    latex: String.raw`\mathcal{M}_{i}^{r,2} = -\int_{\partial \Omega^{2,f}}\phi_{i}n_{r}^{2}\partial_{r}u - \int_{\partial \Omega^{2,f}}\phi_{i}n_{r}^{2}\partial_{\nu}w + \int_{\partial \Omega^{2,f}}\phi_{i}e_{r}\cdot \boldsymbol{P}\cdot \boldsymbol{n}^{2}`,
    description: "",
    references: ["4.18"],
    transform: "From (4.18)",
    hidden: false,
  },
  {
    id: '4.22',
    section: 'the_r_momentum_residuals',
    label: "Symmetry Axis M^{r,3}",
    latex: String.raw`\mathcal{M}_{i}^{r,3} = -\int_{\partial \Omega^{3}}\phi_{i}n_{r}^{3}\partial_{r}u - \int_{\partial \Omega^{3}}\phi_{i}n_{r}^{3}\partial_{\nu}w + \int_{\partial \Omega^{3}}\phi_{i}e_{r}\cdot \boldsymbol{P}\cdot \boldsymbol{n}^{3}`,
    description: "",
    references: ["4.18"],
    transform: "From (4.18)",
    hidden: false,
  },
  {
    id: '4.23',
    section: 'the_r_momentum_residuals',
    label: "Separatrix M^{r,5}",
    latex: String.raw`\mathcal{M}_{i}^{r,5} = -\int_{\partial \Omega^{4}}\phi_{i}n_{r}^{4}\partial_{r}u - \int_{\partial \Omega^{4}}\phi_{i}n_{r}^{4}\partial_{\nu}w + \int_{\partial \Omega^{4}}\phi_{i}e_{r}\cdot \boldsymbol{P}\cdot \boldsymbol{n}^{4}`,
    description: "",
    references: ["4.18"],
    transform: "From (4.18)",
    hidden: false,
  },
  {
    id: '4.24',
    section: 'the_r_momentum_residuals',
    label: "DBC1 Restatement",
    latex: String.raw`\boldsymbol{P}\cdot \boldsymbol{n}^{1} = -p^{g}\boldsymbol{n}^{1} - \frac{\nabla^{s}\cdot[\sigma^{1}(\boldsymbol{I} - \boldsymbol{n}^{1}\boldsymbol{n}^{1})]}{C a}`,
    description: "",
    references: ["2.46"],
    transform: "From (2.46)",
    hidden: false,
  },
  {
    id: '4.25',
    section: 'the_r_momentum_residuals',
    label: "phi_i e_r dot P dot n^1",
    latex: String.raw`\phi_{i}e_{r}\cdot \boldsymbol{P}\cdot \boldsymbol{n}^{1} = -\phi_{i}p^{g}e_{r}\cdot \boldsymbol{n}^{1} - \frac{1}{C a}\phi_{i}e_{r}\cdot \nabla^{s}\cdot [\sigma^{1}(\boldsymbol{I} - \boldsymbol{n}^{1}\boldsymbol{n}^{1})]`,
    description: "",
    references: ["4.24"],
    transform: "From (4.24)",
    hidden: false,
  },
  {
    id: '4.26',
    section: 'the_r_momentum_residuals',
    label: "Surface Div Identity",
    latex: String.raw`\nabla^{s}\cdot (\boldsymbol{x}\cdot \boldsymbol{A}) = \boldsymbol{A}\colon \nabla^{s}\boldsymbol{x} + \boldsymbol{x}\cdot \nabla^{s}\cdot \boldsymbol{A}`,
    description: "For equation (4.20) we have equation (2.46), which states that and therefore Now, we have the following surface vector calculus identity",
    references: ["2.46", "4.20"],
    transform: "From (2.46), (4.20)",
    hidden: false,
  },
  {
    id: '4.27',
    section: 'the_r_momentum_residuals',
    label: "Identity Applied",
    latex: String.raw`\nabla^{s}\cdot (\phi_{i}e_{r}\cdot \sigma^{1}(\boldsymbol{I} - \boldsymbol{n}^{1}\boldsymbol{n}^{1})) = \sigma^{1}(\boldsymbol{I} - \boldsymbol{n}^{1}\pm b^{1})\colon \nabla^{s}(\phi_{i}e_{r}) + \phi_{i}e_{r}\cdot \nabla^{s}\cdot \sigma^{1}(\boldsymbol{I} - \boldsymbol{n}^{1}\boldsymbol{n}^{1})`,
    description: "And therefore Now, we have the following surface vector calculus identity and taking and , we have",
    references: ["4.26"],
    transform: "From (4.26)",
    hidden: false,
  },
  {
    id: '4.28',
    section: 'the_r_momentum_residuals',
    label: "Rearranged",
    latex: String.raw`\phi_{i}e_{r}\cdot \nabla^{s}\cdot \sigma^{1}(\boldsymbol{I} - \boldsymbol{n}^{1}\boldsymbol{n}^{1}) = \nabla^{s}\cdot (\phi_{i}e_{r}\cdot \sigma^{1}(\boldsymbol{I} - \boldsymbol{n}^{1}\boldsymbol{n}^{1})) - \sigma^{1}(\boldsymbol{I} - \boldsymbol{n}^{1}\pm b^{1})\colon \nabla^{s}(\phi_{i}e_{r})`,
    description: "Calculus identity and taking and , we have which yields",
    references: ["4.27"],
    transform: "From (4.27)",
    hidden: false,
  },
  {
    id: '4.29',
    section: 'the_r_momentum_residuals',
    label: "Surface Gradient 1D",
    latex: String.raw`\nabla^{s}(\phi_{i}e_{r}) = \left[ \begin{array}{cc}t_{r}^{1}\partial_{s}\phi_{i} & 0\\ t_{s}^{1}\partial_{s}\phi_{i} & 0 \end{array} \right]`,
    description: "Which yields In this 1D-surface case, we have",
    references: ["4.28"],
    transform: "From (4.28)",
    hidden: false,
  },
  {
    id: '4.30',
    section: 'the_r_momentum_residuals',
    label: "Projection Computation",
    latex: String.raw`(\boldsymbol{I} - \boldsymbol{n}^{1}\boldsymbol{n}^{1}):\nabla^{s}(\phi_{i}e_{r}) = \left[ \begin{array}{cc}1 - n_{r}^{1}n_{s}^{1} & -n_{r}^{1}n_{s}^{1}\\ -n_{s}^{1}n_{r}^{1} & 1 - n_{s}^{1}n_{s}^{1} \end{array} \right]:\left[ \begin{array}{cc}t_{r}^{1}\partial_{s}\phi_{i} & 0\\ t_{s}^{1}\partial_{s}\phi_{i} & 0 \end{array} \right]`,
    description: "In this 1D-surface case, we have ], where , and the tangent vector must be pointing in the direction of increasing arc-length , therefore",
    references: ["4.29"],
    transform: "From (4.29)",
    hidden: false,
  },
  {
    id: '4.31',
    section: 'the_r_momentum_residuals',
    label: "Simplified Projection",
    latex: String.raw`(\boldsymbol{I} - \boldsymbol{n}^{1}\boldsymbol{n}^{1}):\nabla^{s}\phi_{i}e_{r} = t_{r}^{1}\partial_{s}\phi_{i} - (t^{1}\cdot \boldsymbol{n}^{1})n_{r}^{1}\partial_{s}\phi_{i} = t_{r}^{1}\partial_{s}\phi_{i}`,
    description: "Where , and the tangent vector must be pointing in the direction of increasing arc-length , therefore ]:[ ], where , i.e",
    references: ["4.30"],
    transform: "From (4.30)",
    hidden: false,
  },
  {
    id: '4.32',
    section: 'the_r_momentum_residuals',
    label: "Surface Div Result",
    latex: String.raw`\phi_{i}e_{r}\cdot \nabla^{s}\cdot \sigma^{1}(\boldsymbol{I} - \boldsymbol{n}^{1}\boldsymbol{n}^{1}) = \nabla^{s}\cdot (\phi_{i}e_{r}\cdot \sigma^{1}(\boldsymbol{I} - \boldsymbol{n}^{1}\boldsymbol{n}^{1})) - \sigma^{1}t_{r}^{1}\partial_{s}\phi_{i}`,
    description: "",
    references: ["4.28", "4.31"],
    transform: "From (4.28), (4.31)",
    hidden: false,
  },
  {
    id: '4.33',
    section: 'the_r_momentum_residuals',
    label: "Stress dot n^1 Final",
    latex: String.raw`\phi_{i}e_{r}\cdot \boldsymbol{P}\cdot \boldsymbol{n}^{1} = -\phi_{i}p^{g}e_{r}\cdot \boldsymbol{n}^{1} - \frac{1}{C a}\nabla^{s}\cdot (\phi_{i}e_{r}\cdot \sigma^{1}(\boldsymbol{I} - \boldsymbol{n}^{1}\boldsymbol{n}^{1})) + \frac{1}{C a}\sigma^{1}t_{r}^{1}\partial_{s}\phi_{i}`,
    description: "",
    references: ["4.25", "4.32"],
    transform: "From (4.25), (4.32)",
    hidden: false,
  },
  {
    id: '4.34',
    section: 'the_r_momentum_residuals',
    label: "M^{r,1} Intermediate",
    latex: String.raw`\begin{array}{l}{\mathcal{M}_{i}^{r,1} = -\int_{\partial \Omega^{1,f}}\phi_{i}n_{r}^{1}\partial_{r}u - \int_{\partial \Omega^{1,f}}\phi_{i}n_{z}^{1}\partial_{r}w - \int_{\partial \Omega^{1,f}}\phi_{i}p^{g}e_{r}\cdot \boldsymbol{n}^{1}}\\ {-\frac{1}{Ca}\int_{\partial \Omega^{1,f}}\nabla^{s}\cdot (\sigma^{1}\phi_{i}e_{r}\cdot (I - \boldsymbol{n}^{1}\boldsymbol{n}^{1})) + \frac{1}{Ca}\int_{\partial \Omega^{1,f}}t_{r}^{1}\sigma^{1}\partial_{s}\phi_{i},} \end{array}`,
    description: "And consequently in equation (4.25) Thus for we have",
    references: ["4.20", "4.33"],
    transform: "From (4.20), (4.33)",
    hidden: false,
  },
  {
    id: '4.35',
    section: 'the_r_momentum_residuals',
    label: "M^{r,1} Div Theorem",
    latex: String.raw`\begin{array}{l}{\mathcal{M}_{i}^{r,1} = -\int_{\partial \Omega^{1,f}}\phi_{i}n_{r}^{1}\partial_{r}u - \int_{\partial \Omega^{1,f}}\phi_{i}n_{z}^{1}\partial_{r}w - \int_{\partial \Omega^{1,f}}\phi_{i}p^{g}e_{r}\cdot \boldsymbol{n}^{1}}\\ {+\frac{1}{Ca}\int_{C_{1}}\sigma^{1}\phi_{i}e_{r}\cdot \boldsymbol{m}^{1} + \frac{1}{Ca}\int_{\partial \Omega^{1,f}}t_{r}^{1}\sigma^{1}\partial_{s}\phi_{i},} \end{array}`,
    description: "Using the surface divergence theorem and the definition of the surface divergence for a 1D surface, we have",
    references: ["4.34"],
    transform: "From (4.34)",
    hidden: false,
  },
  {
    id: '4.36',
    section: 'the_r_momentum_residuals',
    label: "M^{r,1} with Endpoints",
    latex: String.raw`\begin{array}{l}{\mathcal{M}_{i}^{r,1} = -\int_{\partial \Omega^{1,f}}\phi_{i}n_{r}^{1}\partial_{r}u - \int_{\partial \Omega^{1,f}}\phi_{i}n_{z}^{1}\partial_{r}w - \int_{\partial \Omega^{1,f}}\phi_{i}p^{g}e_{r}\cdot \boldsymbol{n}^{1}}\\ {+\frac{\sigma^{1}(r_{j^{1}},z_{j^{1}})\phi_{i}(r_{j^{1}},z_{j^{1}})}{Ca} m_{r}^{1}f(r_{j^{1}},z_{j^{1}})}\\ {+\frac{\sigma^{1}(r_{a},z_{a})\phi_{i}(r_{a},z_{a})}{Ca} m_{r}^{1}(r_{a},z_{a}) + \frac{1}{Ca}\int_{\partial \Omega^{1,f}}t_{r}^{1}\sigma^{1}\partial_{s}\phi_{i},} \end{array}`,
    description: "Above, we have also used that",
    references: ["4.35"],
    transform: "From (4.35)",
    hidden: false,
  },
  {
    id: '4.37',
    section: 'the_r_momentum_residuals',
    label: "Apex Normal Vector",
    latex: String.raw`m^{1}(r_{a},z_{a}) = m_{r}^{1}(r_{a},z_{a})e_{r} + m_{z}^{1}(r_{a},z_{a})e_{z} = \sin (\theta_{a})e_{r} - \cos (\theta_{a})e_{z}`,
    description: "We recall that, for the case at hand is given by the tangent to the far-field portion of the free surface",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.38',
    section: 'the_r_momentum_residuals',
    label: "Bdry 2 Stress Integral",
    latex: String.raw`\int_{\partial \Omega^{2,f}}\phi_{i}e_{r}\cdot \boldsymbol{P}\cdot \boldsymbol{n}^{2}`,
    description: "We consider now the term",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.39',
    section: 'the_r_momentum_residuals',
    label: "GNSC Substitution",
    latex: String.raw`\begin{array}{r}\phi_{i}e_{r}\cdot \boldsymbol{P}\cdot \boldsymbol{n}^{2} = \phi_{i}e_{r}\cdot \frac{\boldsymbol{n}^{2}\cdot\boldsymbol{P}\cdot(\boldsymbol{n}^{2}\boldsymbol{n}^{2})}{B e(\boldsymbol{u} - \boldsymbol{u}^{s})\cdot(\boldsymbol{l} - \boldsymbol{n}^{2}\boldsymbol{n}^{2}) - \frac{1}{2C a E s} [\boldsymbol{v}^{s2} - \frac{1}{2} (\boldsymbol{u} + \boldsymbol{u}^{s})]\cdot (\boldsymbol{l} - \boldsymbol{n}^{2}\boldsymbol{n}^{2})} \end{array}`,
    description: "We consider now the term in equation (4.21) where we have",
    references: ["2.53"],
    transform: "From (2.53)",
    hidden: false,
  },
  {
    id: '4.40',
    section: 'the_r_momentum_residuals',
    label: "Stress dot n^2 Expanded",
    latex: String.raw`\phi_{i}e_{r}\cdot P\cdot n^2 = Be \phi_i (u\cdot t^2) e_r\cdot t^2 - Be \phi_i (u^s\cdot t^2) e_r\cdot t^2 + \lambda^2\phi_i n_r^2 - \frac{1}{2Ca E_s} \phi_i \left[ v^{s2}\cdot t^2 - \frac{1}{2}u\cdot t^2 - \frac{1}{2}u^s\cdot t^2 \right] e_r\cdot t^2`,
    description: "The normal stress on boundary 2",
    references: ["4.39"],
    transform: "From (4.39)",
    hidden: false,
  },
  {
    id: '4.41',
    section: 'the_r_momentum_residuals',
    label: "Stress dot n^2 Components",
    latex: String.raw`\phi_i e_r\cdot P\cdot n^2 = Be \phi_i (u t_r^2 + w t_z^2) t_r^2 - Be \phi_i (u^s t_r^2 + w^s t_z^2) t_r^2 + \lambda^2 \phi_i n_r^2 - \frac{1}{2Ca E_s} \phi_i \left[ u^{s2} t_r^2 + w^{s2} t_z^2 - \frac{1}{2}u t_r^2 - \frac{1}{2}w t_z^2 - \frac{1}{2}u^s t_r^2 - \frac{1}{2}w^s t_z^2 \right] t_r^2`,
    description: "Hence, we have Rewriting we have",
    references: ["4.40"],
    transform: "From (4.40)",
    hidden: false,
  },
  {
    id: '4.42',
    section: 'the_r_momentum_residuals',
    label: "Stress dot n^2 Regrouped",
    latex: String.raw`\phi_i e_r\cdot P\cdot n^2 = \lambda^2 \phi_i n_r^2 + \left[ \frac{1}{4Ca E_s} + Be \right] \phi_i u t_r^2 t_r^2 + \left[ \frac{1}{4Ca E_s} + Be \right] \phi_i w t_r^2 t_z^2 + \left[ \frac{1}{4Ca E_s} - Be \right] \phi_i u^s t_r^2 t_r^2 + \left[ \frac{1}{4Ca E_s} - Be \right] \phi_i w^s t_r^2 t_z^2 - \frac{1}{2Ca E_s} \phi_i u^{s2} t_r^2 t_r^2 - \frac{1}{2Ca E_s} \phi_i w^{s2} t_r^2 t_z^2`,
    description: "Rewriting we have Equivalently",
    references: ["4.41"],
    transform: "From (4.41)",
    hidden: false,
  },
  {
    id: '4.43',
    section: 'the_r_momentum_residuals',
    label: "M^{r,2} Expression",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,2} = -\int_{\partial \Omega^{2,f}} \phi_i n_r^2 \partial_r u - \int_{\partial \Omega^{2,f}} \phi_i n_z^2 \partial_r w + \int_{\partial \Omega^{2,f}} \lambda^2 \phi_i n_r^2 \\ + \left[ \frac{1}{4Ca E_s} + Be \right] \int_{\partial \Omega^{2,f}} \phi_i u t_r^2 t_r^2 + \left[ \frac{1}{4Ca E_s} + Be \right] \int_{\partial \Omega^{2,f}} \phi_i w t_r^2 t_z^2 \\ + \left[ \frac{1}{4Ca E_s} - Be \right] \int_{\partial \Omega^{2,f}} \phi_i u^s t_r^2 t_r^2 + \left[ \frac{1}{4Ca E_s} - Be \right] \int_{\partial \Omega^{2,f}} \phi_i w^s t_r^2 t_z^2 \\ - \frac{1}{2Ca E_s} \int_{\partial \Omega^{2,f}} \phi_i u^{s2} t_r^2 t_r^2 - \frac{1}{2Ca E_s} \int_{\partial \Omega^{2,f}} \phi_i w^{s2} t_r^2 t_z^2, \end{array}`,
    description: "Equivalently We thus have",
    references: ["4.21", "4.42"],
    transform: "From (4.21), (4.42)",
    hidden: false,
  },
  {
    id: '4.44',
    section: 'the_r_momentum_residuals',
    label: "Bdry 3 Stress Integral",
    latex: String.raw`\int_{\partial \Omega^{3}} \phi_i e_r\cdot P\cdot n^3`,
    description: "We consider now the term",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.45',
    section: 'the_r_momentum_residuals',
    label: "Stress dot n^3 Decomposed",
    latex: String.raw`\phi_i e_r\cdot P\cdot n^3 = \phi_i e_r\cdot \underbrace{n^3\cdot P\cdot (I - n^3 n^3)}_{\gamma^3 t^3} + \phi_i e_r\cdot \underbrace{(n^3\cdot P\cdot n^3)}_{\lambda^3} n^3`,
    description: "We consider now the term in equation (4.22) where we have",
    references: ["4.22"],
    transform: "From (4.22)",
    hidden: false,
  },
  {
    id: '4.46',
    section: 'the_r_momentum_residuals',
    label: "Stress dot n^3 Simplified",
    latex: String.raw`\phi_i e_r\cdot P\cdot n^3 = \gamma^3 \phi_i e_r\cdot t^3 + \lambda^3 \phi_i e_r\cdot n^3`,
    description: "We consider now the term in equation (4.22) where we have where we have introduced and , the tangential and normal stresses on boundary 3 (respectively)",
    references: ["4.45"],
    transform: "From (4.45)",
    hidden: false,
  },
  {
    id: '4.47',
    section: 'the_r_momentum_residuals',
    label: "M^{r,3} Expression",
    latex: String.raw`\mathcal{M}_i^{r,3} = -\int_{\partial \Omega^{3}} \phi_i n_r^3 \partial_r u - \int_{\partial \Omega^{3}} \phi_i n_z^3 \partial_r w + \int_{\partial \Omega^{3}} \gamma^3 \phi_i t_r^3 + \int_{\partial \Omega^{3}} \lambda^3 \phi_i n_r^3`,
    description: "Hence, we have which yields",
    references: ["4.22", "4.46"],
    transform: "From (4.22), (4.46)",
    hidden: false,
  },
  {
    id: '4.49',
    section: 'the_r_momentum_residuals',
    label: "Stress dot n^4 Decomposed",
    latex: String.raw`\phi_i e_r\cdot \boldsymbol{P}\cdot n^{4} = \phi_i e_r\cdot \underbrace{n^{4}\cdot\boldsymbol{P}\cdot(I - n^{4}n^{4})}_{\gamma^{4}t^{4}} + \phi_i e_r\cdot \underbrace{(n^{4}\cdot\boldsymbol{P}\cdot n^{4})}_{\lambda^{4}}n^{4}`,
    description: "Hence, we have which yields For equation (4.23) where we have",
    references: ["4.23"],
    transform: "From (4.23)",
    hidden: false,
  },
  {
    id: '4.50',
    section: 'the_r_momentum_residuals',
    label: "Stress dot n^4 Simplified",
    latex: String.raw`\phi_i e_r\cdot \boldsymbol{P}\cdot n^{4} = \gamma^{4}\phi_i e_r\cdot t^{4} + \lambda^{4}\phi_i e_r\cdot n^{4}`,
    description: "For equation (4.23) where we have where we have introduced and , the tangential and normal stresses on boundary 4 (respectively)",
    references: ["4.49"],
    transform: "From (4.49)",
    hidden: false,
  },
  {
    id: '4.51',
    section: 'the_r_momentum_residuals',
    label: "M^{r,4} Expression",
    latex: String.raw`\mathcal{M}_i^{r,4} = -\int_{\partial \Omega^{4}}\phi_i n_r^{4}\partial_{r}u - \int_{\partial \Omega^{4}}\phi_i n_r^{4}\partial_{t}w + \int_{\partial \Omega^{5}}\gamma^{4}\phi_i t_{r}^{4} + \int_{\partial \Omega^{5}}\lambda^{4}\phi_i n_{r}^{4}`,
    description: "Hence, we have which yields",
    references: ["4.23", "4.50"],
    transform: "From (4.23), (4.50)",
    hidden: false,
  },
  {
    id: '4.52',
    section: 'the_r_momentum_residuals',
    label: "BDF2 for du/dt",
    latex: String.raw`\partial_t u(t_n) \approx \frac{(1 + 2q_n)u(t_n) - (1 + q_n)^2 u(t_{n-1}) + q_n^2 u(t_{n-2})}{(1 + q_n)\Delta_t^n}`,
    description: "Hence, we have which yields We now define and and we make the following approximations",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.53',
    section: 'the_r_momentum_residuals',
    label: "BDF2 for dw/dt",
    latex: String.raw`\partial_t w(t_n) \approx \frac{(1 + 2q_n)w(t_n) - (1 + q_n)^2 w(t_{n-1}) + q_n^2 w(t_{n-2})}{(1 + q_n)\Delta_t^n}`,
    description: "Which yields We now define and and we make the following approximations",
    references: ["4.52"],
    transform: "From (4.52)",
    hidden: false,
  },
  {
    id: '4.54',
    section: 'the_r_momentum_residuals',
    label: "Mesh Velocity u^c",
    latex: String.raw`u^c(t_n) = \partial_t r^c(t_n) \approx \frac{(1 + 2q_n)r^c(t_n) - (1 + q_n)^2 r^c(t_{n-1}) + q_n^2 r^c(t_{n-2})}{(1 + q_n)\Delta_t^n}`,
    description: "We now define and and we make the following approximations",
    references: ["4.52"],
    transform: "From (4.52)",
    hidden: false,
  },
  {
    id: '4.55',
    section: 'the_r_momentum_residuals',
    label: "Mesh Velocity w^c",
    latex: String.raw`w^c(t_n) = \partial_t z^c(t_n) \approx \frac{(1 + 2q_n)z^c(t_n) - (1 + q_n)^2 z^c(t_{n-1}) + q_n^2 z^c(t_{n-2})}{(1 + q_n)\Delta_t^n}`,
    description: "Tn - tn-1) and and we make the following approximations",
    references: ["4.52"],
    transform: "From (4.52)",
    hidden: false,
  },
  {
    id: '4.56',
    section: 'the_r_momentum_residuals',
    label: "M^{r,0} with BDF2",
    latex: String.raw`\begin{array}{r l} & \mathfrak{M}_i^{r,0} = Re\int_{\Omega^f}\phi_i\frac{(1 + 2q_n)u(t_n) - (1 + q_n)^2 u(t_{n-1}) + q_n^2 u(t_{n-2})}{(1 + q_n)\Delta_t^n}\\ & \qquad + Re\int_{\Omega^f}\phi_i u\partial_r u + Re\int_{\Omega^f}\phi_i u\partial_z u\\ & \qquad - Re\int_{\Omega^f}\phi_i\frac{(1 + 2q_n)r^c(t_n) - (1 + q_n)^2 r^c(t_{n-1}) + q_n^2 r^c(t_{n-2})}{(1 + q_n)\Delta_t^n}\partial_r u\\ & \qquad - Re\int_{\Omega^f}\phi_i\frac{(1 + 2q_n)z^c(t_n) - (1 + q_n)^2 z^c(t_{n-1}) + q_n^2 z^c(t_{n-2})}{(1 + q_n)\Delta_t^n}\partial_z u\\ & \qquad - St\int_{\Omega^f}\phi_i\hat{g}_r - \int_{\Omega^f}p\partial_r\phi_i + \int_{\Omega^f}\partial_r u\partial_r\phi_i + \int_{\Omega^f}\partial_z u\partial_z\phi_i, \end{array}`,
    description: "Substituting these into (4.18) we obtain",
    references: ["4.19", "4.52"],
    transform: "From (4.19), (4.52)",
    hidden: false,
  },
  {
    id: '4.57',
    section: 'the_r_momentum_residuals',
    label: "M^{r,1} with BDF2",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,1} = -\int_{\partial \Omega^{1,f}} \phi_i n_r^1 \partial_r u - \int_{\partial \Omega^{1,f}} \phi_i n_z^1 \partial_r w - \int_{\partial \Omega^{1,f}} \phi_i p^g n_r^1 \\ - \frac{\sigma^1(r_{J1},z_{J1})\phi_i(r_{J1},z_{J1})}{Ca} m_r^{1,n}(r_{J1},z_{J1}) \\ + \frac{\sigma^1(r_a,z_a)\phi_i(r_a,z_a)}{Ca} m_r^{1}(r_a,z_a) + \frac{1}{Ca} \int_{\partial \Omega^{1,f}} t_r^1 \sigma^1 \partial_s \phi_i, \end{array}`,
    description: "",
    references: ["4.36"],
    transform: "From (4.36)",
    hidden: false,
  },
  {
    id: '4.58',
    section: 'the_r_momentum_residuals',
    label: "M^{r,2} with BDF2",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,2} = -\int_{\partial \Omega^{2,f}} \phi_i n_r^2 \partial_r u - \int_{\partial \Omega^{2,f}} \phi_i n_z^2 \partial_r w + \int_{\partial \Omega^{2,f}} \lambda^2 \phi_i n_r^2 \\ + \left[ \frac{1}{4Ca E_s} + Be \right] \int_{\partial \Omega^{2,f}} \phi_i u t_r^2 t_r^2 + \left[ \frac{1}{4Ca E_s} + Be \right] \int_{\partial \Omega^{2,f}} \phi_i w t_r^2 t_z^2 \\ + \left[ \frac{1}{4Ca E_s} - Be \right] \int_{\partial \Omega^{2,f}} \phi_i u^s t_r^2 t_r^2 + \left[ \frac{1}{4Ca E_s} - Be \right] \int_{\partial \Omega^{2,f}} \phi_i w^s t_r^2 t_z^2 \\ - \frac{1}{2Ca E_s} \int_{\partial \Omega^{2,f}} \phi_i u^{s2} t_r^2 t_r^2 - \frac{1}{2Ca E_s} \int_{\partial \Omega^{2,f}} \phi_i w^{s2} t_r^2 t_z^2, \end{array}`,
    description: "",
    references: ["4.43"],
    transform: "From (4.43)",
    hidden: false,
  },
  {
    id: '4.59',
    section: 'the_r_momentum_residuals',
    label: "M^{r,3} with BDF2",
    latex: String.raw`\mathcal{M}_i^{r,3} = -\int_{\partial \Omega^{3}} \phi_i n_r^3 \partial_r u - \int_{\partial \Omega^{3}} \phi_i n_z^3 \partial_r w + \int_{\partial \Omega^{3}} \gamma^3 \phi_i t_r^3 + \int_{\partial \Omega^{3}} \lambda^3 \phi_i n_r^3`,
    description: "",
    references: ["4.47"],
    transform: "From (4.47)",
    hidden: false,
  },
  {
    id: '4.60',
    section: 'the_r_momentum_residuals',
    label: "M^{r,5} with BDF2",
    latex: String.raw`\mathcal{M}_i^{r,5} = -\int_{\partial \Omega^{5}} \phi_i n_r^5 \partial_r u - \int_{\partial \Omega^{5}} \phi_i n_z^5 \partial_r w + \int_{\partial \Omega^{5}} \gamma^5 \phi_i t_r^5 + \int_{\partial \Omega^{5}} \lambda^5 \phi_i n_r^5`,
    description: "",
    references: ["4.51"],
    transform: "From (4.51)",
    hidden: false,
  },
  {
    id: '4.61',
    section: 'the_r_momentum_residuals',
    label: "M^{r,0} Rescaled",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,0}(t_n) = \frac{2(1 + 2q_n)}{3(1 + q_n)} Re \int_{\Omega^f} \phi_i u(r,z,t_n) \\ - \frac{2(1 + q_n)Re}{3} \int_{\Omega^f} \phi_i u(r,z,t_{n-1}) + \frac{2q_n^2 Re}{3(1 + q_n)} \int_{\Omega^f} \phi_i u(t_{n-2}) \\ + \frac{2\Delta_t Re}{3} \int_{\Omega^f} \phi_i u \partial_r u + \frac{2\Delta_t Re}{3} \int_{\Omega^f} \phi_i w \partial_z u \\ - \frac{2(1 + 2q_n)}{3(1 + q_n)} Re \int_{\Omega^f} \phi_i r^c(t_n) \partial_r u \\ + \frac{2(1 + q_n)Re}{3} \int_{\Omega^f} \phi_i r^c(t_{n-1}) \partial_r u - \frac{2q_n^2 Re}{3(1 + q_n)} \int_{\Omega^f} \phi_i r^c(t_{n-2}) \partial_r u \\ - \frac{2(1 + 2q_n)}{3(1 + q_n)} Re \int_{\Omega^f} \phi_i z^c(t_n) \partial_z u \\ + \frac{2(1 + q_n)Re}{3} \int_{\Omega^f} \phi_i z^c(t_{n-1}) \partial_z u - \frac{2q_n^2 Re}{3(1 + q_n)} \int_{\Omega^f} \phi_i z^c(t_{n-2}) \partial_z u \\ - \frac{2\Delta_t St}{3} \int_{\Omega^f} \phi_i \hat{g}_r - \frac{2\Delta_t}{3} \int_{\Omega^f} p \partial_r \phi_i + \frac{2\Delta_t}{3} \int_{\Omega^f} \partial_r u \partial_r \phi_i + \frac{2\Delta_t}{3} \int_{\Omega^f} \partial_z u \partial_z \phi_i, \end{array}`,
    description: "",
    references: ["4.56"],
    transform: "From (4.56)",
    hidden: false,
  },
  {
    id: '4.62',
    section: 'the_r_momentum_residuals',
    label: "M^{r,1} Rescaled",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,1} = -\frac{2\Delta_t}{3} \int_{\partial \Omega^{1,f}} \phi_i n_r^1 \partial_r u - \frac{2\Delta_t}{3} \int_{\partial \Omega^{1,f}} \phi_i n_z^1 \partial_r w - \frac{2\Delta_t}{3} \int_{\partial \Omega^{1,f}} \phi_i p^g n_r^1 \\ - \frac{2\Delta_t \sigma^1(r_{J1},z_{J1})\phi_i(r_{J1},z_{J1})}{3Ca} m_r^{1,n}(r_{J1},z_{J1}) \\ + \frac{2\Delta_t \sigma^1(r_a,z_a)\phi_i(r_a,z_a)}{3Ca} m_r^{1}(r_a,z_a) + \frac{2\Delta_t}{3Ca} \int_{\partial \Omega^{1,f}} t_r^1 \sigma^1 \partial_s \phi_i, \end{array}`,
    description: "",
    references: ["4.57"],
    transform: "From (4.57)",
    hidden: false,
  },
  {
    id: '4.63',
    section: 'the_r_momentum_residuals',
    label: "M^{r,2} Rescaled",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,2} = -\frac{2\Delta_t}{3} \int_{\partial \Omega^{2,f}} \phi_i n_r^2 \partial_r u - \frac{2\Delta_t}{3} \int_{\partial \Omega^{2,f}} \phi_i n_z^2 \partial_r w + \frac{2\Delta_t}{3} \int_{\partial \Omega^{2,f}} \lambda^2 \phi_i n_r^2 \\ + \left[ \frac{1 + 4Be Ca E_s}{6Ca E_s} \right] \Delta_t \int_{\partial \Omega^{2,f}} \phi_i u t_r^2 t_r^2 + \left[ \frac{1 + 4Be Ca E_s}{6Ca E_s} \right] \Delta_t \int_{\partial \Omega^{2,f}} \phi_i w t_r^2 t_z^2 \\ + \left[ \frac{1 - 4Be Ca E_s}{6Ca E_s} \right] \Delta_t \int_{\partial \Omega^{2,f}} \phi_i u^s t_r^2 t_r^2 + \left[ \frac{1 - 4Be Ca E_s}{6Ca E_s} \right] \Delta_t \int_{\partial \Omega^{2,f}} \phi_i w^s t_r^2 t_z^2 \\ - \frac{\Delta_t}{3Ca E_s} \int_{\partial \Omega^{2,f}} \phi_i u^{s2} t_r^2 t_r^2 - \frac{\Delta_t}{3Ca E_s} \int_{\partial \Omega^{2,f}} \phi_i w^{s2} t_r^2 t_z^2 + \frac{2\Delta_t}{3} \int_{\partial \Omega^{3}} \gamma^3 \phi_i t_r^3 \\ + \frac{2\Delta_t}{3} \int_{\partial \Omega^{3}} \lambda^3 \phi_i n_r^3 + \frac{2\Delta_t}{3} \int_{\partial \Omega^{4}} \gamma^4 \phi_i t_r^4 + \frac{2\Delta_t}{3} \int_{\partial \Omega^{5}} \lambda^4 \phi_i n_r^4, \end{array}`,
    description: "",
    references: ["4.58"],
    transform: "From (4.58)",
    hidden: false,
  },
  {
    id: '4.64',
    section: 'the_r_momentum_residuals',
    label: "M^{r,3} Rescaled",
    latex: String.raw`\mathcal{M}_i^{r,3} = -\frac{2\Delta_t}{3} \int_{\partial \Omega^{3}} \phi_i n_r^3 \partial_r u - \frac{2\Delta_t}{3} \int_{\partial \Omega^{3}} \phi_i n_z^3 \partial_r w + \frac{2\Delta_t}{3} \int_{\partial \Omega^{3}} \gamma^3 \phi_i t_r^3 + \frac{2\Delta_t}{3} \int_{\partial \Omega^{3}} \lambda^3 \phi_i n_r^3`,
    description: "",
    references: ["4.59"],
    transform: "From (4.59)",
    hidden: false,
  },
  {
    id: '4.65',
    section: 'the_r_momentum_residuals',
    label: "M^{r,5} Rescaled",
    latex: String.raw`\mathcal{M}_i^{r,5} = -\frac{2\Delta_t}{3} \int_{\partial \Omega^{5}} \phi_i n_r^5 \partial_r u - \frac{2\Delta_t}{3} \int_{\partial \Omega^{5}} \phi_i n_z^5 \partial_r w + \frac{2\Delta_t}{3} \int_{\partial \Omega^{5}} \gamma^5 \phi_i t_r^5 + \frac{2\Delta_t}{3} \int_{\partial \Omega^{5}} \lambda^5 \phi_i n_r^5`,
    description: "",
    references: ["4.60"],
    transform: "From (4.60)",
    hidden: false,
  },
  {
    id: '4.66',
    section: 'the_r_momentum_residuals',
    label: "FE: u(r,z,t)",
    latex: String.raw`u(r,z,t) \approx \sum_{j=1}^{n_v} u_j(t) \phi_j(r,z)`,
    description: "We now introduce the following approximations",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.67',
    section: 'the_r_momentum_residuals',
    label: "FE: w(r,z,t)",
    latex: String.raw`w(r,z,t) \approx \sum_{j=1}^{n_v} w_j(t) \phi_j(r,z)`,
    description: "We now introduce the following approximations",
    references: ["4.66"],
    transform: "From (4.66)",
    hidden: false,
  },
  {
    id: '4.68',
    section: 'the_r_momentum_residuals',
    label: "FE: r^c(r,z,t)",
    latex: String.raw`r^c(r,z,t) \approx \sum_{j=1}^{n_v} r_j^c(t) \phi_j(r,z)`,
    description: "We now introduce the following approximations",
    references: ["4.66"],
    transform: "From (4.66)",
    hidden: false,
  },
  {
    id: '4.69',
    section: 'the_r_momentum_residuals',
    label: "FE: z^c(r,z,t)",
    latex: String.raw`z^c(r,z,t) \approx \sum_{j=1}^{n_v} z_j^c(t) \phi_j(r,z)`,
    description: "We now introduce the following approximations",
    references: ["4.66"],
    transform: "From (4.66)",
    hidden: false,
  },
  {
    id: '4.70',
    section: 'the_r_momentum_residuals',
    label: "FE: p(r,z,t)",
    latex: String.raw`p(r,z,t) \approx \sum_{j=1}^{n_p} p_j(t) \psi_j(r,z)`,
    description: "We now introduce the following approximations",
    references: ["4.66"],
    transform: "From (4.66)",
    hidden: false,
  },
  {
    id: '4.71',
    section: 'the_r_momentum_residuals',
    label: "FE: sigma^1",
    latex: String.raw`\sigma^1(r,z,t) \approx \sum_{j=1}^{n_v} \tilde{\sigma}_j^1(t) \phi_j^1(r,z)`,
    description: "We now introduce the following approximations",
    references: ["4.66"],
    transform: "From (4.66)",
    hidden: false,
  },
  {
    id: '4.72',
    section: 'the_r_momentum_residuals',
    label: "FE: lambda^2",
    latex: String.raw`\lambda^2(r,z,t) \approx \sum_{j=1}^{n_v} \tilde{\lambda}_j^2(t) \phi_j^2(r,z)`,
    description: "",
    references: ["4.66"],
    transform: "From (4.66)",
    hidden: false,
  },
  {
    id: '4.73',
    section: 'the_r_momentum_residuals',
    label: "FE: lambda^3",
    latex: String.raw`\lambda^3(r,z,t) \approx \sum_{j=1}^{n_v} \tilde{\lambda}_j^3(t) \phi_j^3(r,z)`,
    description: "",
    references: ["4.66"],
    transform: "From (4.66)",
    hidden: false,
  },
  {
    id: '4.74',
    section: 'the_r_momentum_residuals',
    label: "FE: gamma^3",
    latex: String.raw`\gamma^3(r,z,t) \approx \sum_{j=1}^{n_v} \tilde{\gamma}_j^3(t) \phi_j^3(r,z)`,
    description: "",
    references: ["4.66"],
    transform: "From (4.66)",
    hidden: false,
  },
  {
    id: '4.75',
    section: 'the_r_momentum_residuals',
    label: "FE: lambda^4",
    latex: String.raw`\lambda^4(r,z,t) \approx \sum_{j=1}^{n_v} \tilde{\lambda}_j^4(t) \phi_j^4(r,z)`,
    description: "",
    references: ["4.66"],
    transform: "From (4.66)",
    hidden: false,
  },
  {
    id: '4.76',
    section: 'the_r_momentum_residuals',
    label: "FE: gamma^4",
    latex: String.raw`\gamma^4(r,z,t) \approx \sum_{j=1}^{n_v} \tilde{\gamma}_j^4(t) \phi_j^4(r,z)`,
    description: "",
    references: ["4.66"],
    transform: "From (4.66)",
    hidden: false,
  },
  {
    id: '4.77',
    section: 'the_r_momentum_residuals',
    label: "FE: u^s",
    latex: String.raw`u^s(r,z,t) \approx \sum_{j=1}^{n_v} \tilde{u}_j^s(t) \phi_j(r,z)`,
    description: "",
    references: ["4.66"],
    transform: "From (4.66)",
    hidden: false,
  },
  {
    id: '4.78',
    section: 'the_r_momentum_residuals',
    label: "FE: w^s",
    latex: String.raw`w^s(r,z,t) \approx \sum_{j=1}^{n_v} \tilde{w}_j^s(t) \phi_j(r,z)`,
    description: "",
    references: ["4.66"],
    transform: "From (4.66)",
    hidden: false,
  },
  {
    id: '4.79',
    section: 'the_r_momentum_residuals',
    label: "FE: p^g",
    latex: String.raw`p^g(r,z,t) \approx \sum_{j=1}^{n_v} \tilde{p}_j^g(t) \phi_j^1(r,z)`,
    description: "",
    references: ["4.66"],
    transform: "From (4.66)",
    hidden: false,
  },
  {
    id: '4.80',
    section: 'the_r_momentum_residuals',
    label: "FE: sigma^2",
    latex: String.raw`\sigma^2(r,z,t) \approx \sum_{j=1}^{n_v} \tilde{\sigma}_j^2(t) \phi_j^2(r,z);`,
    description: "",
    references: ["4.66"],
    transform: "From (4.66)",
    hidden: false,
  },
  {
    id: '4.81',
    section: 'the_r_momentum_residuals',
    label: "Residual Decomposition",
    latex: String.raw`\mathcal{M}_i^r = \mathcal{M}_i^{r,0} + \mathcal{M}_i^{r,1} + \mathcal{M}_i^{r,2} + \mathcal{M}_i^{r,3}`,
    description: "Substituting these approximations into (4.56-4.60) we define",
    references: ["4.82"],
    transform: "From (4.82)",
    hidden: false,
  },
  {
    id: '4.82',
    section: 'the_r_momentum_residuals',
    label: "M^{r,0} Global Sums",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,0}(t_n) = a_n Re \int_{\Omega^f} \phi_i \left[ \sum_{j=1}^{n_v} u_j \phi_j \right] - a_{n-1} Re \int_{\Omega^f} \phi_i \left[ \sum_{j=1}^{n_v} u_j(t_{n-1}) \phi_j \right] \\ + a_{n-2} Re \int_{\Omega^f} \phi_i \left[ \sum_{j=1}^{n_v} u_j(t_{n-2}) \phi_j \right] + \frac{2\Delta_t Re}{3} \int_{\Omega^f} \phi_i \left[ \sum_{k=1}^{n_v} u_k \phi_k \right] \partial_r \left[ \sum_{j=1}^{n_v} u_j \phi_j \right] \\ + \frac{2\Delta_t Re}{3} \int_{\Omega^f} \phi_i \left[ \sum_{k=1}^{n_v} w_k \phi_k \right] \partial_z \left[ \sum_{j=1}^{n_v} u_j \phi_j \right] - a_n Re \int_{\Omega^f} \phi_i \left[ \sum_{k=1}^{n_v} r_k^c \phi_k \right] \partial_r \left[ \sum_{j=1}^{n_v} u_j \phi_j \right] \\ + a_{n-1} Re \int_{\Omega^f} \phi_i \left[ \sum_{k=1}^{n_v} r_k^c(t_{n-1}) \phi_k \right] \partial_r \left[ \sum_{j=1}^{n_v} u_j \phi_j \right] \\ - a_{n-2} Re \int_{\Omega^f} \phi_i \left[ \sum_{k=1}^{n_v} r_k^c(t_{n-2}) \phi_k \right] \partial_r \left[ \sum_{j=1}^{n_v} u_j \phi_j \right] \\ - a_n Re \int_{\Omega^f} \phi_i \left[ \sum_{k=1}^{n_v} z_k^c \phi_k \right] \partial_z \left[ \sum_{j=1}^{n_v} u_j \phi_j \right] \\ + a_{n-1} Re \int_{\Omega^f} \phi_i \left[ \sum_{k=1}^{n_v} z_k^c(t_{n-1}) \phi_k \right] \partial_z \left[ \sum_{j=1}^{n_v} u_j \phi_j \right] \\ - a_{n-2} Re \int_{\Omega^f} \phi_i \left[ \sum_{k=1}^{n_v} z_k^c(t_{n-2}) \phi_k \right] \partial_z \left[ \sum_{j=1}^{n_v} u_j \phi_j \right] \\ - \frac{2\Delta_t St}{3} \int_{\Omega^f} \phi_i \hat{g}_r - \frac{2\Delta_t}{3} \int_{\Omega^f} \left[ \sum_{j=1}^{n_p} p_j \psi_j \right] \partial_r \phi_i \\ + \frac{2\Delta_t}{3} \int_{\Omega^f} \partial_r \left[ \sum_{j=1}^{n_v} u_j \phi_j \right] \partial_r \phi_i + \frac{2\Delta_t}{3} \int_{\Omega^f} \partial_z \left[ \sum_{j=1}^{n_v} u_j \phi_j \right] \partial_z \phi_i, \end{array}`,
    description: "Substituting these approximations into (4.56-4.60) we define where",
    references: ["4.61", "4.66"],
    transform: "From (4.61), (4.66)",
    hidden: false,
  },
  {
    id: '4.83',
    section: 'the_r_momentum_residuals',
    label: "M^{r,1} Global Sums",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,1} = -\frac{2\Delta_t}{3} \int_{\partial \Omega^{1,f}} \phi_i n_r^1 \partial_r \left( \sum_{j=1}^{n_v} u_j \phi_j \right) - \frac{2\Delta_t}{3} \int_{\partial \Omega^{1,f}} \phi_i n_z^1 \partial_r \left( \sum_{j=1}^{n_v} w_j \phi_j \right) \\ - \frac{2\Delta_t}{3} \int_{\partial \Omega^{1,f}} \phi_i n_r^1 \left( \sum_{j=1}^{n_v} \tilde{p}_j^g \phi_j^1 \right) \\ - 2\Delta_t \frac{\sigma^1(r_{j1},z_{j1})\phi_i(r_{j1},z_{j1})}{3Ca} m_r^{1,n}(r_{j1},z_{j1}) \\ + 2\Delta_t \frac{\sigma^1(r_a,z_a)\phi_i(r_a,z_a)}{3Ca} m_r^{1}(r_a,z_a) + \frac{2\Delta_t}{3Ca} \int_{\partial \Omega^{1,f}} t_r^1 \left( \sum_{j=1}^{n_v} \tilde{\sigma}_j^1 \phi_j^1 \right) \partial_s \phi_i, \end{array}`,
    description: "",
    references: ["4.62", "4.66"],
    transform: "From (4.62), (4.66)",
    hidden: false,
  },
  {
    id: '4.84',
    section: 'the_r_momentum_residuals',
    label: "M^{r,2} Global Sums",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,2} = -\frac{2\Delta_t}{3} \int_{\partial \Omega^{2,f}} \phi_i n_r^2 \partial_r \left[ \sum_{j=1}^{n_v} u_j \phi_j \right] - \frac{2\Delta_t}{3} \int_{\partial \Omega^{2,f}} \phi_i n_z^2 \partial_r \left[ \sum_{j=1}^{n_v} w_j \phi_j \right] \\ + \frac{2\Delta_t}{3} \int_{\partial \Omega^{2,f}} \phi_i n_r^2 \left[ \sum_{j=1}^{n_v} \tilde{\lambda}_j^2 \phi_j^2 \right] + \left[ \frac{1 + 4Be Ca E_s}{6Ca E_s} \right] \Delta_t \int_{\partial \Omega^{2,f}} \phi_i t_r^2 t_r^2 \left[ \sum_{j=1}^{n_v} u_j \phi_j \right] \\ + \left[ \frac{1 + 4Be Ca E_s}{6Ca E_s} \right] \Delta_t \int_{\partial \Omega^{2,f}} \phi_i t_r^2 t_z^2 \left[ \sum_{j=1}^{n_v} w_j \phi_j \right] \\ + \left[ \frac{1 - 4Be Ca E_s}{6Ca E_s} \right] \Delta_t \int_{\partial \Omega^{2,f}} \phi_i t_r^2 t_r^2 \left[ \sum_{j=1}^{n_v} \tilde{u}_j^s \phi_j \right] \\ + \left[ \frac{1 - 4Be Ca E_s}{6Ca E_s} \right] \Delta_t \int_{\partial \Omega^{2,f}} \phi_i t_r^2 t_z^2 \left[ \sum_{j=1}^{n_v} \tilde{w}_j^s \phi_j \right] \\ - \frac{\Delta_t}{3Ca E_s} \int_{\partial \Omega^{2,f}} \phi_i t_r^2 t_r^2 \left[ \sum_{j=1}^{n_v} \tilde{u}_j^{s2} \phi_j \right] - \frac{\Delta_t}{3Ca E_s} \int_{\partial \Omega^{2,f}} \phi_i t_r^2 t_z^2 \left[ \sum_{j=1}^{n_v} \tilde{w}_j^{s2} \phi_j \right], \end{array}`,
    description: "",
    references: ["4.63", "4.66"],
    transform: "From (4.63), (4.66)",
    hidden: false,
  },
  {
    id: '4.85',
    section: 'the_r_momentum_residuals',
    label: "M^{r,3} Global Sums",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,3} = -\frac{2\Delta_t}{3} \int_{\partial \Omega^{3,f}} \phi_i n_r^3 \partial_r \left[ \sum_{j=1}^{n_v} u_j \phi_j \right] - \frac{2\Delta_t}{3} \int_{\partial \Omega^{3,f}} \phi_i n_z^3 \partial_r \left[ \sum_{j=1}^{n_v} w_j \phi_j \right] \\ + \frac{2\Delta_t}{3} \int_{\partial \Omega^{3}} \left[ \sum_{j=1}^{n_v} \tilde{\lambda}_j^3 \phi_j^3 \right] \phi_i n_r^3 + \frac{2\Delta_t}{3} \int_{\partial \Omega^{3}} \left[ \sum_{j=1}^{n_v} \tilde{\gamma}_j^3 \phi_j^3 \right] \phi_i t_r^3 \end{array}`,
    description: "",
    references: ["4.64", "4.66"],
    transform: "From (4.64), (4.66)",
    hidden: false,
  },
  {
    id: '4.86',
    section: 'the_r_momentum_residuals',
    label: "M^{r,5} Global Sums",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,5} = -\frac{2\Delta_t}{3} \int_{\partial \Omega^{5,f}} \phi_i n_r^5 \partial_r \left[ \sum_{j=1}^{n_v} u_j \phi_j \right] - \frac{2\Delta_t}{3} \int_{\partial \Omega^{5,f}} \phi_i n_z^5 \partial_r \left[ \sum_{j=1}^{n_v} w_j \phi_j \right] \\ + \frac{2\Delta_t}{3} \int_{\partial \Omega^{5}} \left[ \sum_{j=1}^{n_v} \tilde{\lambda}_j^5 \phi_j^5 \right] \phi_i n_r^5 + \frac{2\Delta_t}{3} \int_{\partial \Omega^{5}} \left[ \sum_{j=1}^{n_v} \tilde{\gamma}_j^5 \phi_j^5 \right] \phi_i t_r^5 \end{array}`,
    description: "",
    references: ["4.65", "4.66"],
    transform: "From (4.65), (4.66)",
    hidden: false,
  },
  {
    id: '4.87',
    section: 'the_r_momentum_residuals',
    label: "M^{r,0} Rearranged",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,0} = a_n Re \sum_{j=1}^{n_v} u_j \int_{\Omega^f} \phi_i \phi_j - a_{n-1} Re \sum_{j=1}^{n_v} u_j(t_{n-1}) \int_{\Omega^f} \phi_i \phi_j \\ + a_{n-2} Re \sum_{j=1}^{n_v} u_j(t_{n-2}) \int_{\Omega^f} \phi_i \phi_j \\ + \frac{2\Delta_t Re}{3} \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} u_k \int_{\Omega^f} \phi_i \phi_k \partial_r \phi_j + \frac{2\Delta_t Re}{3} \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} w_k \int_{\Omega^f} \phi_i \phi_k \partial_z \phi_j \\ - a_n Re \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} r_k^c \int_{\Omega^f} \phi_i \phi_k \partial_r \phi_j + a_{n-1} Re \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} r_k^c(t_{n-1}) \int_{\Omega^f} \phi_i \phi_k \partial_r \phi_j \\ - a_{n-2} Re \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} r_k^c(t_{n-2}) \int_{\Omega^f} \phi_i \phi_k \partial_r \phi_j \\ - a_n Re \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} z_k^c \int_{\Omega^f} \phi_i \phi_k \partial_z \phi_j + a_{n-1} Re \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} z_k^c(t_{n-1}) \int_{\Omega^f} \phi_i \phi_k \partial_z \phi_j \\ - a_{n-2} Re \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} z_k^c(t_{n-2}) \int_{\Omega^f} \phi_i \phi_k \partial_z \phi_j - \frac{2\Delta_t St}{3} \int_{\Omega^f} \phi_i \hat{g}_r \\ - \frac{2\Delta_t}{3} \sum_{j=1}^{n_p} p_j \int_{\Omega^f} \psi_j \partial_r \phi_i + \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int_{\Omega^f} \partial_r \phi_j \partial_r \phi_i + \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int_{\Omega^f} \partial_z \phi_j \partial_z \phi_i, \end{array}`,
    description: "Moving the integrals into the sums and re-arranging terms we have",
    references: ["4.82"],
    transform: "From (4.82)",
    hidden: false,
  },
  {
    id: '4.88',
    section: 'the_r_momentum_residuals',
    label: "M^{r,1} Rearranged",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,1} = -\frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int_{\partial \Omega^{1,f}} \phi_i n_r^1 \partial_r \phi_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega^{1,f}} \phi_i n_z^1 \partial_r \phi_j \\ - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \tilde{p}_j^g \int_{\partial \Omega^{1,f}} \phi_i n_r^1 \phi_j^1 \\ - \frac{2\Delta_t \sigma^1(r_{J1},z_{J1})\phi_i(r_{J1},z_{J1})}{3Ca} m_r^{1,n}(r_{J1},z_{J1}) \\ + \frac{2\Delta_t \sigma^1(r_a,z_a)\phi_i(r_a,z_a)}{3Ca} m_r^{1}(r_a,z_a) + \frac{2\Delta_t}{3Ca} \sum_{j=1}^{n_v} \tilde{\sigma}_j^1 \int_{\partial \Omega^{1,f}} t_r^1 \phi_j^1 \partial_s \phi_i, \end{array}`,
    description: "",
    references: ["4.83"],
    transform: "From (4.83)",
    hidden: false,
  },
  {
    id: '4.89',
    section: 'the_r_momentum_residuals',
    label: "M^{r,2} Rearranged",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,2} = -\frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int_{\partial \Omega^{2,f}} \phi_i n_r^1 \partial_r \phi_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega^{2,f}} \phi_i n_z^1 \partial_r \phi_j \\ + \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \tilde{\lambda}_j^2 \int_{\partial \Omega^{2,f}} \phi_i \phi_j^2 n_r^2 + \left[ \frac{1 + 4Be Ca E_s}{6Ca E_s} \right] \Delta_t \sum_{j=1}^{n_v} u_j \int_{\partial \Omega^{2,f}} \phi_i \phi_j t_r^2 t_r^2 \\ + \left[ \frac{1 + 4Be Ca E_s}{6Ca E_s} \right] \Delta_t \sum_{j=1}^{n_v} w_j \int_{\partial \Omega^{2,f}} \phi_i \phi_j t_r^2 t_z^2 \\ + \left[ \frac{1 - 4Be Ca E_s}{6Ca E_s} \right] \Delta_t \sum_{j=1}^{n_v} \tilde{u}_j^s \int_{\partial \Omega^{2,f}} \phi_i \phi_j t_r^2 t_r^2 \\ + \left[ \frac{1 - 4Be Ca E_s}{6Ca E_s} \right] \Delta_t \sum_{j=1}^{n_v} \tilde{w}_j^s \int_{\partial \Omega^{2,f}} \phi_i \phi_j t_r^2 t_z^2 \\ - \frac{\Delta_t}{3Ca E_s} \sum_{j=1}^{n_v} \tilde{u}_j^{s2} \int_{\partial \Omega^{2,f}} \phi_i \phi_j t_r^2 t_r^2 - \frac{\Delta_t}{3Ca E_s} \sum_{j=1}^{n_v} \tilde{w}_j^{s2} \int_{\partial \Omega^{2,f}} \phi_i \phi_j t_r^2 t_z^2, \end{array}`,
    description: "",
    references: ["4.84"],
    transform: "From (4.84)",
    hidden: false,
  },
  {
    id: '4.90',
    section: 'the_r_momentum_residuals',
    label: "M^{r,3} Rearranged",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,3} = -\frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int_{\partial \Omega^{3,f}} \phi_i n_r^1 \partial_r \phi_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega^{3,f}} \phi_i n_z^1 \partial_r \phi_j \\ + \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \tilde{\lambda}_j^3 \int_{\partial \Omega^{3}} \phi_j^3 \phi_i n_r^3 + \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \tilde{\gamma}_j^3 \int_{\partial \Omega^{3}} \phi_j^3 \phi_i t_r^3 \end{array}`,
    description: "",
    references: ["4.85"],
    transform: "From (4.85)",
    hidden: false,
  },
  {
    id: '4.91',
    section: 'the_r_momentum_residuals',
    label: "M^{r,4} Rearranged",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,4} = -\frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int_{\partial \Omega^{4,f}} \phi_i n_r^1 \partial_r \phi_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega^{4,f}} \phi_i n_z^1 \partial_r \phi_j \\ + \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \tilde{\lambda}_j^4 \int_{\partial \Omega^{4}} \phi_j^4 \phi_i n_r^4 + \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \tilde{\gamma}_j^4 \int_{\partial \Omega^{4}} \phi_j^4 \phi_i t_r^4 \end{array}`,
    description: "",
    references: ["4.86"],
    transform: "From (4.86)",
    hidden: false,
  },
  {
    id: '4.92',
    section: 'the_r_momentum_residuals',
    label: "M^{r,0} Reordered",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,0} = -\frac{2\Delta_t St}{3} \int_{\Omega^f} \phi_i \hat{g}_r \\ + \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int_{\Omega^f} \partial_r \phi_j \partial_r \phi_i + \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int_{\Omega^f} \partial_z \phi_j \partial_z \phi_i + a_n Re \sum_{j=1}^{n_v} u_j \int_{\Omega^f} \phi_i \phi_j \\ - a_{n-1} Re \sum_{j=1}^{n_v} u_j(t_{n-1}) \int_{\Omega^f} \phi_i \phi_j + a_{n-2} Re \sum_{j=1}^{n_v} u_j(t_{n-2}) \int_{\Omega^f} \phi_i \phi_j \\ + \frac{2\Delta_t Re}{3} \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} u_k \int_{\Omega^f} \phi_i \phi_k \partial_r \phi_j + \frac{2\Delta_t Re}{3} \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} w_k \int_{\Omega^f} \phi_i \phi_k \partial_z \phi_j \\ - a_n Re \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} r_k^c \int_{\Omega^f} \phi_i \phi_k \partial_r \phi_j + a_{n-1} Re \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} r_k^c(t_{n-1}) \int_{\Omega^f} \phi_i \phi_k \partial_r \phi_j \\ - a_{n-2} Re \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} r_k^c(t_{n-2}) \int_{\Omega^f} \phi_i \phi_k \partial_r \phi_j \\ - a_n Re \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} z_k^c \int_{\Omega^f} \phi_i \phi_k \partial_z \phi_j + a_{n-1} Re \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} z_k^c(t_{n-1}) \int_{\Omega^f} \phi_i \phi_k \partial_z \phi_j \\ - a_{n-2} Re \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} z_k^c(t_{n-2}) \int_{\Omega^f} \phi_i \phi_k \partial_z \phi_j \\ - \frac{2\Delta_t}{3} \sum_{j=1}^{n_p} p_j \int_{\Omega^f} \psi_j \partial_r \phi_i, \end{array}`,
    description: "And Re-arranging terms we have",
    references: ["4.87"],
    transform: "From (4.87)",
    hidden: false,
  },
  {
    id: '4.93',
    section: 'the_r_momentum_residuals',
    label: "M^{r,1} Reordered",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,1} = -\frac{2\Delta_t \sigma^1(r_{J1},z_{J1})\phi_i(r_{J1},z_{J1})}{3Ca} m_r^{1,n}(r_{J1},z_{J1}) + \frac{2\Delta_t \sigma^1(r_a,z_a)\phi_i(r_a,z_a)}{3Ca} m_r^{1}(r_a,z_a) \\ + \frac{2\Delta_t}{3Ca} \sum_{j=1}^{n_v} \tilde{\sigma}_j^1 \int_{\partial \Omega^{1,f}} t_r^1 \phi_j^1 \partial_s \phi_i - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \tilde{p}_j^g \int_{\partial \Omega^{1,f}} \phi_i n_r^1 \phi_j^1 \\ - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int_{\partial \Omega^{1,f}} \phi_i n_r^1 \partial_r \phi_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega^{1,f}} \phi_i n_z^1 \partial_r \phi_j, \end{array}`,
    description: "",
    references: ["4.88"],
    transform: "From (4.88)",
    hidden: false,
  },
  {
    id: '4.94',
    section: 'the_r_momentum_residuals',
    label: "M^{r,2} Reordered",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,2} = \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \tilde{\lambda}_j^2 \int_{\partial \Omega^{2,f}} \phi_i \phi_j^2 n_r^2 + \left[ \frac{1 + 4Be Ca E_s}{6Ca E_s} \right] \Delta_t \sum_{j=1}^{n_v} u_j \int_{\partial \Omega^{2,f}} \phi_i \phi_j t_r^2 t_r^2 \\ + \left[ \frac{1 + 4Be Ca E_s}{6Ca E_s} \right] \Delta_t \sum_{j=1}^{n_v} w_j \int_{\partial \Omega^{2,f}} \phi_i \phi_j t_r^2 t_z^2 \\ + \left[ \frac{1 - 4Be Ca E_s}{6Ca E_s} \right] \Delta_t \sum_{j=1}^{n_v} \tilde{u}_j^s \int_{\partial \Omega^{2,f}} \phi_i \phi_j t_r^2 t_r^2 \\ + \left[ \frac{1 - 4Be Ca E_s}{6Ca E_s} \right] \Delta_t \sum_{j=1}^{n_v} \tilde{w}_j^s \int_{\partial \Omega^{2,f}} \phi_i \phi_j t_r^2 t_z^2 \\ - \frac{\Delta_t}{3Ca E_s} \sum_{j=1}^{n_v} \tilde{u}_j^{s2} \int_{\partial \Omega^{2,f}} \phi_i \phi_j t_r^2 t_r^2 - \frac{\Delta_t}{3Ca E_s} \sum_{j=1}^{n_v} \tilde{w}_j^{s2} \int_{\partial \Omega^{2,f}} \phi_i \phi_j t_r^2 t_z^2 \\ - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int_{\partial \Omega^{2,f}} \phi_i n_r^1 \partial_r \phi_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega^{2,f}} \phi_i n_z^1 \partial_r \phi_j, \end{array}`,
    description: "",
    references: ["4.89"],
    transform: "From (4.89)",
    hidden: false,
  },
  {
    id: '4.95',
    section: 'the_r_momentum_residuals',
    label: "M^{r,3} Reordered",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,3} = \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \tilde{\lambda}_j^3 \int_{\partial \Omega^{3}} \phi_j^3 \phi_i n_r^3 + \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \tilde{\gamma}_j^3 \int_{\partial \Omega^{3}} \phi_j^3 \phi_i t_r^3 \\ - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int_{\partial \Omega^{3,f}} \phi_i n_r^1 \partial_r \phi_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega^{3,f}} \phi_i n_z^1 \partial_r \phi_j \end{array}`,
    description: "",
    references: ["4.90"],
    transform: "From (4.90)",
    hidden: false,
  },
  {
    id: '4.96',
    section: 'the_r_momentum_residuals',
    label: "M^{r,4} Reordered",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,4} = \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \tilde{\lambda}_j^4 \int_{\partial \Omega^{4}} \phi_j^4 \phi_i n_r^4 + \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \tilde{\gamma}_j^4 \int_{\partial \Omega^{4}} \phi_j^4 \phi_i t_r^4 \\ - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int_{\partial \Omega^{4,f}} \phi_i n_r^1 \partial_r \phi_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega^{4,f}} \phi_i n_z^1 \partial_r \phi_j \end{array}`,
    description: "",
    references: ["4.91"],
    transform: "From (4.91)",
    hidden: false,
  },
  {
    id: '4.97',
    section: 'the_r_momentum_residuals',
    label: "Element-wise Decomposition",
    latex: String.raw`\mathcal{M}_i^r = \underbrace{\mathcal{M}_i^{r,0a} + \mathcal{M}_i^{r,0b} + \mathcal{M}_i^{r,0c} + \mathcal{M}_i^{r,0d}}_{\mathcal{M}_i^{r,0}} + \mathcal{M}_i^{r,1} + \mathcal{M}_i^{r,2} + \mathcal{M}_i^{r,3} + \mathcal{M}_i^{r,4}`,
    description: "Figure 4 shows that we have chosen only corner nodes of the elements to be pressure-and-velocity nodes, and illustrates the pressure-node numbering convention used",
    references: ["4.92"],
    transform: "From (4.92)",
    hidden: false,
  },
  {
    id: '4.98',
    section: 'the_r_momentum_residuals',
    label: "Gravity Term",
    latex: String.raw`\mathcal{M}_i^{r,0a} = \sum_{e=1}^{n_{el}} \left[ -\frac{2\Delta_t St}{3} \int_{\Omega_e} \phi_i \hat{g}_r \right]`,
    description: "Figure 4 shows that we have chosen only corner nodes of the elements to be pressure-and-velocity nodes, and illustrates the pressure-node numbering convention used",
    references: ["4.97"],
    transform: "From (4.97)",
    hidden: false,
  },
  {
    id: '4.99',
    section: 'the_r_momentum_residuals',
    label: "Viscous + Mass Term",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,0b} = \sum_{e=1}^{n_{el}} \left[ \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int \partial_r \phi_j \partial_r \phi_i + \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int \partial_z \phi_j \partial_z \phi_i + a_n Re \sum_{j=1}^{n_v} u_j \int \phi_i \phi_j \right. \\ \left. - a_{n-1} Re \sum_{j=1}^{n_v} u_j(t_{n-1}) \int \phi_i \phi_j + a_{n-2} Re \sum_{j=1}^{n_v} u_j(t_{n-2}) \int \phi_i \phi_j \right], \end{array}`,
    description: "Have chosen only corner nodes of the elements to be pressure-and-velocity nodes, and illustrates the pressure-node numbering convention used",
    references: ["4.97"],
    transform: "From (4.97)",
    hidden: false,
  },
  {
    id: '4.100',
    section: 'the_r_momentum_residuals',
    label: "Convection + ALE Term",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,0c} = \sum_{e=1}^{n_{el}} \left[ \frac{2\Delta_t Re}{3} \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} u_k \int \phi_i \phi_k \partial_r \phi_j + \frac{2\Delta_t Re}{3} \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} w_k \int \phi_i \phi_k \partial_z \phi_j \right. \\ - a_n Re \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} r_k^c \int \phi_i \phi_k \partial_r \phi_j + a_{n-1} Re \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} r_k^c(t_{n-1}) \int \phi_i \phi_k \partial_r \phi_j \\ - a_{n-2} Re \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} r_k^c(t_{n-2}) \int \phi_i \phi_k \partial_r \phi_j - a_n Re \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} z_k^c \int \phi_i \phi_k \partial_z \phi_j \\ + a_{n-1} Re \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} z_k^c(t_{n-1}) \int \phi_i \phi_k \partial_z \phi_j \\ \left. - a_{n-2} Re \sum_{j=1}^{n_v} u_j \sum_{k=1}^{n_v} z_k^c(t_{n-2}) \int \phi_i \phi_k \partial_z \phi_j \right], \end{array}`,
    description: "",
    references: ["4.97"],
    transform: "From (4.97)",
    hidden: false,
  },
  {
    id: '4.101',
    section: 'the_r_momentum_residuals',
    label: "Pressure Term",
    latex: String.raw`\mathcal{M}_i^{r,0d} = \sum_{e=1}^{n_{el}} \left[ -\frac{2\Delta_t}{3} \sum_{j=1}^{n_p} p_j \int_{\Omega_e} \psi_j \partial_r \phi_i \right]`,
    description: "",
    references: ["4.97"],
    transform: "From (4.97)",
    hidden: false,
  },
  {
    id: '4.102',
    section: 'the_r_momentum_residuals',
    label: "Bdry 1 (Elements)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,1} = -2\Delta_t \frac{\sigma^1(r_{j1},z_{j1})\phi_i(r_{j1},z_{j1})}{3Ca} m_r^{1,n}(r_{j1},z_{j1}) + 2\Delta_t \frac{\sigma^1(r_a,z_a)\phi_i(r_a,z_a)}{3Ca} m_r^{1}(r_a,z_a) \\ + \sum_{e_1=1}^{n_{el}^{1,f}} \left[ \frac{2\Delta_t}{3Ca} \sum_{j=1}^{n_v} \tilde{\sigma}_j^1 \int_{\partial \Omega_{e_1}^{1,f}} t_r^1 \phi_j^1 \partial_s \phi_i - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \tilde{p}_j^g \int_{\partial \Omega_{e_1}^{1,f}} \phi_i n_r^1 \phi_j^1 \right. \\ \left. - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int_{\partial \Omega_{e_1}^{1,f}} \phi_i n_r^1 \partial_r \phi_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega_{e_1}^{1,f}} \phi_i n_z^1 \partial_r \phi_j \right], \end{array}`,
    description: "With being element number",
    references: ["4.97"],
    transform: "From (4.97)",
    hidden: false,
  },
  {
    id: '4.103',
    section: 'the_r_momentum_residuals',
    label: "Bdry 2 (Elements)",
    latex: String.raw`\mathcal{M}_i^{r,2} = \sum_{e_2=1}^{n_{\text{el}}^{2,f}} \left[ \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \tilde{\lambda}_j^2 \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_j^2 n_r^2 + \left( \frac{1 + 4Be\, Ca\, Es}{6Ca\, Es} \right) \Delta_t \sum_{j=1}^{n_v} u_j \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_j t_r^2 t_r^2 + \left( \frac{1 + 4Be\, Ca\, Es}{6Ca\, Es} \right) \Delta_t \sum_{j=1}^{n_v} w_j \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_j t_r^2 t_z^2 + \left( \frac{1 - 4Be\, Ca\, Es}{6Ca\, Es} \right) \Delta_t \sum_{j=1}^{n_v} \tilde{u}_j^s \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_j t_r^2 t_r^2 + \left( \frac{1 - 4Be\, Ca\, Es}{6Ca\, Es} \right) \Delta_t \sum_{j=1}^{n_v} \tilde{w}_j^s \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_j t_r^2 t_z^2 - \frac{\Delta_t}{3Ca\, Es} \sum_{j=1}^{n_v} \tilde{u}_j^{s2} \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_j t_r^2 t_r^2 - \frac{\Delta_t}{3Ca\, Es} \sum_{j=1}^{n_v} \tilde{w}_j^{s2} \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_j t_r^2 t_z^2 - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int_{\partial \Omega^{2,f}} \phi_i n_r^1 \partial_r \phi_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega^{2,f}} \phi_i n_z^1 \partial_r \phi_j \right]`,
    description: "",
    references: ["4.97"],
    transform: "From (4.97)",
    hidden: false,
  },
  {
    id: '4.104',
    section: 'the_r_momentum_residuals',
    label: "Bdry 3 (Elements)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,3} = \sum_{e_3=1}^{n_{el}^{3,f}} \left[ \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \tilde{\lambda}_j^3 \int_{\partial \Omega_{e_3}^{3}} \phi_j^3 \phi_i n_r^3 + \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \tilde{\gamma}_j^3 \int_{\partial \Omega_{e_3}^{3}} \phi_j^3 \phi_i t_r^3 \right. \\ \left. - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int_{\partial \Omega_{e_3}^{3,f}} \phi_i n_r^1 \partial_r \phi_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega_{e_3}^{3,f}} \phi_i n_z^1 \partial_r \phi_j \right], \end{array}`,
    description: "Similarly, for boundary 3",
    references: ["4.97"],
    transform: "From (4.97)",
    hidden: false,
  },
  {
    id: '4.105',
    section: 'the_r_momentum_residuals',
    label: "Bdry 4 (Elements)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,4} = \sum_{e_4=1}^{n_{el}^{4}} \left[ \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \tilde{\lambda}_j^4 \int_{\partial \Omega_{e_4}^{4}} \phi_j^4 \phi_i n_r^4 + \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \tilde{\gamma}_j^4 \int_{\partial \Omega_{e_4}^{4}} \phi_j^4 \phi_i t_r^4 \right. \\ \left. - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int_{\partial \Omega_{e_4}^{4,f}} \phi_i n_r^1 \partial_r \phi_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega_{e_4}^{4,f}} \phi_i n_z^1 \partial_r \phi_j \right]; \end{array}`,
    description: "",
    references: ["4.97"],
    transform: "From (4.97)",
    hidden: false,
  },
  {
    id: '4.106',
    section: 'the_r_momentum_residuals',
    label: "Gravity (Local)",
    latex: String.raw`\mathcal{M}_i^{r,0a} = \sum_{e=1}^{n_{el}^f} \left[ -\frac{2\Delta_t St}{3} \int_{\Omega_e} \phi_i \hat{g}_r \right]`,
    description: "Hence, it is more convenient to re-write the sum above as",
    references: ["4.98"],
    transform: "From (4.98)",
    hidden: false,
  },
  {
    id: '4.107',
    section: 'the_r_momentum_residuals',
    label: "Viscous+Mass (Local)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,0b} = \sum_{e=1}^{n_{el}^f} \left[ \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \int_{\Omega_e} \partial_r \phi_{l(e,jj)} \partial_r \phi_i + \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \int_{\Omega_e} \partial_z \phi_{l(e,jj)} \partial_z \phi_i \right. \\ + a_n Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \int_{\Omega_e} \phi_i \phi_{l(e,jj)} - a_{n-1} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)}(t_{n-1}) \int_{\Omega_e} \phi_i \phi_{l(e,jj)} \\ \left. + a_{n-2} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)}(t_{n-2}) \int_{\Omega_e} \phi_i \phi_{l(e,jj)} \right], \end{array}`,
    description: "Hence, it is more convenient to re-write the sum above as",
    references: ["4.99"],
    transform: "From (4.99)",
    hidden: false,
  },
  {
    id: '4.108',
    section: 'the_r_momentum_residuals',
    label: "Convection (Local)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,0c} = \sum_{e=1}^{n_{el}^f} \left[ \frac{2\Delta_t Re}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} u_{l(e,kk)} \int_{\Omega_e} \phi_i \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} \right. \\ + \frac{2\Delta_t Re}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} w_{l(e,kk)} \int_{\Omega_e} \phi_i \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} \\ - a_n Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c \int_{\Omega_e} \phi_i \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} \\ + a_{n-1} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-1}) \int_{\Omega_e} \phi_i \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} \\ - a_{n-2} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-2}) \int_{\Omega_e} \phi_i \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} \\ - a_n Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c \int_{\Omega_e} \phi_i \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} \\ + a_{n-1} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-1}) \int_{\Omega_e} \phi_i \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} \\ \left. - a_{n-2} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-2}) \int_{\Omega_e} \phi_i \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} \right], \end{array}`,
    description: "",
    references: ["4.100"],
    transform: "From (4.100)",
    hidden: false,
  },
  {
    id: '4.109',
    section: 'the_r_momentum_residuals',
    label: "Pressure (Local)",
    latex: String.raw`\mathcal{M}_i^{r,0d} = \sum_{e=1}^{n_{el}^f} \left[ -\frac{2\Delta_t}{3} \sum_{jj=1}^{n_p^e} p_{l^p(e,jj)} \int_{\Omega_e} \psi_{l^p(e,jj)} \partial_r \phi_i \right]`,
    description: "",
    references: ["4.101"],
    transform: "From (4.101)",
    hidden: false,
  },
  {
    id: '4.110',
    section: 'the_r_momentum_residuals',
    label: "Bdry 1 (Local)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,1} = -2\Delta_t \frac{\sigma^1(r_{j1},z_{j1})\phi_i(r_{j1},z_{j1})}{3Ca} m_r^{1,n}(r_{j1},z_{j1}) + 2\Delta_t \frac{\sigma^1(r_a,z_a)\phi_i(r_a,z_a)}{3Ca} m_r^{1}(r_a,z_a) \\ + \sum_{e_1=1}^{n_{el}^{1,f}} \left[ \frac{2\Delta_t}{3Ca} \sum_{j=1}^{n_v} \tilde{\sigma}_j^1 \int_{\partial \Omega^{1,f}} t_r^1 \phi_j^1 \partial_s \phi_i - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{1,e_1}} \tilde{p}_{l_1(e_1,jj)}^g \int_{\partial \Omega_{e_1}^{1,f}} \phi_i^1 \phi_{l_1(e_1,jj)}^1 n_r^1 \right] \\ - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int_{\partial \Omega^{1,f}} \phi_i n_r^1 \partial_r \phi_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega^{1,f}} \phi_i n_z^1 \partial_r \phi_j, \end{array}`,
    description: "",
    references: ["4.102"],
    transform: "From (4.102)",
    hidden: false,
  },
  {
    id: '4.111',
    section: 'the_r_momentum_residuals',
    label: "Bdry 2 (Local)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,2} = \sum_{e_2=1}^{n_{el}^{2,f}} \left[ \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{2,e_2}} \tilde{\lambda}_{l_2(e_2,jj)}^2 \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)}^2 n_r^2 \right. \\ + \left( \frac{1 + 4Be Ca E_s}{6Ca E_s} \right) \Delta_t \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2(e_2,jj)} \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)} t_r^2 t_r^2 \\ + \left( \frac{1 + 4Be Ca E_s}{6Ca E_s} \right) \Delta_t \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2(e_2,jj)} \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)} t_r^2 t_z^2 \\ + \left( \frac{1 - 4Be Ca E_s}{6Ca E_s} \right) \Delta_t \sum_{jj=1}^{n_v^{2,e_2}} \tilde{u}_{l_2(e_2,jj)}^s \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)} t_r^2 t_r^2 \\ + \left( \frac{1 - 4Be Ca E_s}{6Ca E_s} \right) \Delta_t \sum_{jj=1}^{n_v^{2,e_2}} \tilde{w}_{l_2(e_2,jj)}^s \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)} t_r^2 t_z^2 \\ - \frac{\Delta_t}{3Ca E_s} \sum_{jj=1}^{n_v^{2,e_2}} \tilde{u}_{l_2(e_2,jj)}^{s2} \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)} t_r^2 t_r^2 \\ - \frac{\Delta_t}{3Ca E_s} \sum_{jj=1}^{n_v^{2,e_2}} \tilde{w}_{l_2(e_2,jj)}^{s2} \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)} t_r^2 t_z^2 \\ - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int_{\partial \Omega_{e_2}^{2,f}} \phi_i n_r^1 \partial_r \phi_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega_{e_2}^{2,f}} \phi_i n_z^1 \partial_r \phi_j \Bigg], \end{array}`,
    description: "",
    references: ["4.103"],
    transform: "From (4.103)",
    hidden: false,
  },
  {
    id: '4.112',
    section: 'the_r_momentum_residuals',
    label: "Bdry 3 (Local)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,3} = \sum_{e_3=1}^{n_{el}^{3}} \left[ \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{3,e_3}} \tilde{\lambda}_{l_3(e_3,jj)}^3 \int_{\partial \Omega_{e_3}^{3}} \phi_{l_3(e_3,jj)}^3 \phi_i n_r^3 + \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{3,e_3}} \tilde{\gamma}_{l_3(e_3,jj)}^3 \int_{\partial \Omega_{e_3}^{3}} \phi_{l_3(e_3,jj)}^3 \phi_i t_r^3 \right. \\ \left. - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v} u_{l_3(e_3,jj)} \int_{\partial \Omega_{e_3}^{3,f}} \phi_i n_r^1 \partial_r \phi_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega_{e_3}^{3,f}} \phi_i n_z^1 \partial_r \phi_j \right], \end{array}`,
    description: "",
    references: ["4.104"],
    transform: "From (4.104)",
    hidden: false,
  },
  {
    id: '4.113',
    section: 'the_r_momentum_residuals',
    label: "Bdry 4 (Local)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_{e,ii}^{r,4} = \sum_{e_4=1}^{n_{el}^{4}} \left[ \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{4,e_4}} \tilde{\lambda}_{l_4(e_4,jj)}^4 \int_{\partial \Omega_{e_4}^{4}} \phi_{l_4(e_4,jj)}^4 \phi_i^4 n_r^4 + \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{4,e_4}} \tilde{\gamma}_{l_4(e_4,jj)}^4 \int_{\partial \Omega_{e_4}^{4}} \phi_{l_4(e_4,jj)}^4 \phi_i t_r^4 \right. \\ \left. - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j \int_{\partial \Omega_{e_4}^{4,f}} \phi_i n_r^1 \partial_r \phi_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega_{e_4}^{4,f}} \phi_i n_z^1 \partial_r \phi_j \right]; \end{array}`,
    description: "",
    references: ["4.105"],
    transform: "From (4.105)",
    hidden: false,
  },
  {
    id: '4.114',
    section: 'the_r_momentum_residuals',
    label: "Gravity (Bdry Numbering)",
    latex: String.raw`\mathcal{M}_i^{r,0a} = \sum_{e=1}^{n_{el}^f} \left[ -\frac{2\Delta_t St}{3} \int_{\Omega_e} \phi_i \hat{g}_r \right]`,
    description: "Re-writing the equations above under this new convention we have",
    references: ["4.106"],
    transform: "From (4.106)",
    hidden: false,
  },
  {
    id: '4.115',
    section: 'the_r_momentum_residuals',
    label: "Visc+Mass (Bdry Num)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,0b} = \sum_{e=1}^{n_{el}^f} \left[ \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \int_{\Omega_e} \partial_r \phi_{l(e,jj)} \partial_r \phi_i + \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \int_{\Omega_e} \partial_z \phi_{l(e,jj)} \partial_z \phi_i \right. \\ + a_n Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \int_{\Omega_e} \phi_i \phi_{l(e,jj)} - a_{n-1} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)}(t_{n-1}) \int_{\Omega_e} \phi_i \phi_{l(e,jj)} \\ \left. + a_{n-2} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)}(t_{n-2}) \int_{\Omega_e} \phi_i \phi_{l(e,jj)} \right], \end{array}`,
    description: "Re-writing the equations above under this new convention we have",
    references: ["4.107"],
    transform: "From (4.107)",
    hidden: false,
  },
  {
    id: '4.116',
    section: 'the_r_momentum_residuals',
    label: "Convection (Bdry Num)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,0c} = \sum_{e=1}^{n_{el}^f} \left[ \frac{2\Delta_t Re}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} u_{l(e,kk)} \int_{\Omega_e} \phi_i \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} \right. \\ + \frac{2\Delta_t Re}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} w_{l(e,kk)} \int_{\Omega_e} \phi_i \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} \\ - a_n Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c \int_{\Omega_e} \phi_i \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} \\ + a_{n-1} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-1}) \int_{\Omega_e} \phi_i \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} \\ - a_{n-2} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-2}) \int_{\Omega_e} \phi_i \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} \\ - a_n Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c \int_{\Omega_e} \phi_i \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} \\ + a_{n-1} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-1}) \int_{\Omega_e} \phi_i \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} \\ \left. - a_{n-2} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-2}) \int_{\Omega_e} \phi_i \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} \right], \end{array}`,
    description: "",
    references: ["4.108"],
    transform: "From (4.108)",
    hidden: false,
  },
  {
    id: '4.117',
    section: 'the_r_momentum_residuals',
    label: "Pressure (Bdry Num)",
    latex: String.raw`\mathcal{M}_i^{r,0d} = \sum_{e=1}^{n_{el}^f} \left[ -\frac{2\Delta_t}{3} \sum_{jj=1}^{n_p^e} p_{l^p(e,jj)} \int_{\Omega_e} \psi_{l^p(e,jj)} \partial_r \phi_i \right]`,
    description: "",
    references: ["4.109"],
    transform: "From (4.109)",
    hidden: false,
  },
  {
    id: '4.118',
    section: 'the_r_momentum_residuals',
    label: "Bdry 1 (Bdry Num)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,1} = -\frac{2\Delta_t \sigma^1(r_{J1},z_{J1})\phi_i(r_{J1},z_{J1})}{3Ca} m_r^{1,n}(r_{J1},z_{J1}) + \frac{2\Delta_t \sigma^1(r_a,z_a)\phi_i(r_a,z_a)}{3Ca} m_r^{1}(r_a,z_a) \\ + \sum_{e_1=1}^{n_{el}^{1,f}} \left[ \frac{2\Delta_t}{3Ca} \sum_{j=1}^{n_v} \tilde{\sigma}_j^1 \int_{\partial \Omega^{1,f}} t_r^1 \phi_j^1 \partial_s \phi_i - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{1,e_1}} p_{l_1^1(e_1,jj)}^g \int_{\partial \Omega_{e_1}^{1}} \phi_i^1 \phi_{l_1(e_1,jj)}^1 n_r^1 \right. \\ - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{1,e_1^T}} u_{l_1(e_1^T,jj)} \int_{\partial \Omega^{1,f}} \phi_i n_r^1 \partial_r \phi_{l_1(e_1^T,jj)} \\ \left. - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{1,e_1^T}} w_{l_1(e_1^T,jj)} \int_{\partial \Omega^{1,f}} \phi_i n_z^1 \partial_r \phi_{l_1(e_1^T,jj)} \right], \end{array}`,
    description: "",
    references: ["4.110"],
    transform: "From (4.110)",
    hidden: false,
  },
  {
    id: '4.119',
    section: 'the_r_momentum_residuals',
    label: "Bdry 2 (Bdry Num)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,2} = \sum_{e_2=1}^{n_{el}^{2,f}} \left[ \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{2,e_2}} \tilde{\lambda}_{l_2(e_2,jj)}^2 \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)}^2 n_r^2 \right. \\ + \left( \frac{1 + 4Be Ca E_s}{6Ca E_s} \right) \Delta_t \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2(e_2,jj)} \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)} t_r^2 t_r^2 \\ + \left( \frac{1 + 4Be Ca E_s}{6Ca E_s} \right) \Delta_t \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2(e_2,jj)} \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)} t_r^2 t_z^2 \\ + \left( \frac{1 - 4Be Ca E_s}{6Ca E_s} \right) \Delta_t \sum_{jj=1}^{n_v^{2,e_2}} \tilde{u}_{l_2(e_2,jj)}^s \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)} t_r^2 t_r^2 \\ + \left( \frac{1 - 4Be Ca E_s}{6Ca E_s} \right) \Delta_t \sum_{jj=1}^{n_v^{2,e_2}} \tilde{w}_{l_2(e_2,jj)}^s \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)} t_r^2 t_z^2 \\ - \frac{\Delta_t}{3Ca E_s} \sum_{jj=1}^{n_v^{2,e_2}} \tilde{u}_{l_2(e_2,jj)}^{s2} \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)} t_r^2 t_r^2 \\ - \frac{\Delta_t}{3Ca E_s} \sum_{jj=1}^{n_v^{2,e_2}} \tilde{w}_{l_2(e_2,jj)}^{s2} \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)} t_r^2 t_z^2 \\ - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{2,e_2^T}} u_{l_2(e_2^T,jj)} \int_{\partial \Omega^{2,f}} \phi_i n_r^1 \partial_r \phi_{l_2(e_2^T,jj)} \\ \left. - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{2,e_2^T}} w_{l_2(e_2^T,jj)} \int_{\partial \Omega^{2,f}} \phi_i n_z^1 \partial_r \phi_{l_2(e_2^T,jj)} \right], \end{array}`,
    description: "",
    references: ["4.111"],
    transform: "From (4.111)",
    hidden: false,
  },
  {
    id: '4.120',
    section: 'the_r_momentum_residuals',
    label: "Bdry 3 (Bdry Num)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,3} = \sum_{e_3=1}^{n_{el}^{3}} \left[ \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{3,e_3}} \tilde{\lambda}_{l_3(e_3,jj)}^3 \int_{\partial \Omega_{e_3}^{3}} \phi_{l_3(e_3,jj)}^3 \phi_i n_r^3 + \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{3,e_3}} \tilde{\gamma}_{l_3(e_3,jj)}^3 \int_{\partial \Omega_{e_3}^{3}} \phi_{l_3(e_3,jj)}^3 \phi_i t_r^3 \right. \\ \left. - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{3,e_3}} u_{l_3(e_3,jj)} \int_{\partial \Omega_{e_3}^{3,f}} \phi_i n_r^1 \partial_r \phi_{l_3(e_3^T,jj)} - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{3,e_3}} w_{l_3(e_3,jj)} \int_{\partial \Omega_{e_3}^{3,f}} \phi_i n_z^1 \partial_r \phi_{l_3(e_3^T,jj)} \right], \end{array}`,
    description: "",
    references: ["4.112"],
    transform: "From (4.112)",
    hidden: false,
  },
  {
    id: '4.121',
    section: 'the_r_momentum_residuals',
    label: "Bdry 4 (Bdry Num)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_{e,ii}^{r,4} = \sum_{e_4=1}^{n_{el}^{4}} \left[ \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{4,e_4}} \tilde{\lambda}_{l_4(e_4,jj)}^4 \int_{\partial \Omega_{e_4}^{4}} \phi_{l_4(e_4,jj)}^4 \phi_i^4 n_r^4 + \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{4,e_4}} \tilde{\gamma}_{l_5(e_5,jj)}^4 \int_{\partial \Omega_{e_4}^{4}} \phi_{l_4(e_4,jj)}^4 \phi_i t_r^4 \right. \\ \left. - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{4,e_4^T}} u_{l_4(e_4^T,jj)} \int_{\partial \Omega^{4,f}} \phi_i n_r^4 \partial_r \phi_{l_4(e_4^T,jj)} - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{4,e_4^T}} w_{l_4(e_4^T,jj)} \int_{\partial \Omega^{4,f}} \phi_i n_z^4 \partial_r \phi_{l_4(e_4^T,jj)} \right], \end{array}`,
    description: "",
    references: ["4.113"],
    transform: "From (4.113)",
    hidden: false,
  },
  {
    id: '4.122',
    section: 'the_r_momentum_residuals',
    label: "Gravity (ii Index)",
    latex: String.raw`\mathcal{M}_i^{r,0a} = \sum_{\substack{e=1 \\ i=l(e,ii)}}^{n_{el}^f} \left[ -\frac{2\Delta_t St}{3} \int_{\Omega_e} \phi_{l(e,ii)} \hat{g}_r \right]`,
    description: "Passing to local node number for index , we have",
    references: ["4.114"],
    transform: "From (4.114)",
    hidden: false,
  },
  {
    id: '4.123',
    section: 'the_r_momentum_residuals',
    label: "Visc+Mass (ii Index)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,0b} = \sum_{\substack{e=1 \\ i=l(e,ii)}}^{n_{el}^f} \left[ \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \int_{\Omega_e} \partial_r \phi_{l(e,jj)} \partial_r \phi_{l(e,ii)} \right. \\ + \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \int_{\Omega_e} \partial_z \phi_{l(e,jj)} \partial_z \phi_{l(e,ii)} + a_n Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,jj)} \\ - a_{n-1} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)}(t_{n-1}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,jj)} \\ \left. + a_{n-2} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)}(t_{n-2}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,jj)} \right], \end{array}`,
    description: "Passing to local node number for index , we have",
    references: ["4.115"],
    transform: "From (4.115)",
    hidden: false,
  },
  {
    id: '4.124',
    section: 'the_r_momentum_residuals',
    label: "Convection (ii Index)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,0c} = \sum_{\substack{e=1 \\ i=l(e,ii)}}^{n_{el}^f} \left[ \frac{2\Delta_t Re}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} u_{l(e,kk)} \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} \right. \\ + \frac{2\Delta_t Re}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} w_{l(e,kk)} \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} \\ - a_n Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} \\ + a_{n-1} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-1}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} \\ - a_{n-2} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-2}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} \\ - a_n Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} \\ + a_{n-1} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-1}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} \\ \left. - a_{n-2} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-2}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} \right], \end{array}`,
    description: "",
    references: ["4.116"],
    transform: "From (4.116)",
    hidden: false,
  },
  {
    id: '4.125',
    section: 'the_r_momentum_residuals',
    label: "Pressure (ii Index)",
    latex: String.raw`\mathcal{M}_i^{r,0d} = \sum_{\substack{e=1 \\ i=l(e,ii)}}^{n_{el}^f} \left[ -\frac{2\Delta_t}{3} \sum_{jj=1}^{n_p^e} p_{l^p(e,jj)} \int_{\Omega_e} \psi_{l^p(e,jj)} \partial_r \phi_{l(e,ii)} \right]`,
    description: "",
    references: ["4.117"],
    transform: "From (4.117)",
    hidden: false,
  },
  {
    id: '4.126',
    section: 'the_r_momentum_residuals',
    label: "Bdry 1 (ii Index)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,1} = -\frac{2\Delta_t \sigma^1(r_{J1},z_{J1})\phi_i(r_{J1},z_{J1})}{3Ca} m_r^{1,n}(r_{J1},z_{J1}) + \frac{2\Delta_t \sigma^1(r_a,z_a)\phi_i(r_a,z_a)}{3Ca} m_r^{1}(r_a,z_a) \\ + \sum_{e_1=1}^{n_{el}^{1,f}} \left[ \frac{2\Delta_t}{3Ca} \sum_{j=1}^{n_v} \tilde{\sigma}_j^1 \int_{\partial \Omega^{1,f}} t_r^1 \phi_j^1 \partial_s \phi_i - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{1,e_1}} p_{l_1^1(e_1,jj)}^g \int_{\partial \Omega_{e_1}^{1}} \phi_i^1 \phi_{l_1(e_1,jj)}^1 n_r^1 \right. \\ - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{1,e_1^T}} u_{l_1(e_1^T,jj)} \int_{\partial \Omega^{1,f}} \phi_i n_r^1 \partial_r \phi_{l_1(e_1^T,jj)} \\ \left. - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{1,e_1^T}} w_{l_1(e_1^T,jj)} \int_{\partial \Omega^{1,f}} \phi_i n_z^1 \partial_r \phi_{l_1(e_1^T,jj)} \right], \end{array}`,
    description: "",
    references: ["4.118"],
    transform: "From (4.118)",
    hidden: false,
  },
  {
    id: '4.127',
    section: 'the_r_momentum_residuals',
    label: "Bdry 2 (ii Index)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,2} = \sum_{e_2=1}^{n_{el}^{2,f}} \left[ \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{2,e_2}} \lambda_{l_2^2(e_2,jj)}^2 \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)}^2 n_r^2 \right. \\ + \left( \frac{1 + 4Be Ca E_s}{6Ca E_s} \right) \Delta_t \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2(e_2,jj)} \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)} t_r^2 t_r^2 \\ + \left( \frac{1 + 4Be Ca E_s}{6Ca E_s} \right) \Delta_t \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2(e_2,jj)} \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)} t_r^2 t_z^2 \\ + \left( \frac{1 - 4Be Ca E_s}{6Ca E_s} \right) \Delta_t \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2^2(e_2,jj)}^s \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)} t_r^2 t_r^2 \\ + \left( \frac{1 - 4Be Ca E_s}{6Ca E_s} \right) \Delta_t \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2^2(e_2,jj)}^s \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)} t_r^2 t_z^2 \\ - \frac{\Delta_t}{3Ca E_s} \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2^2(e_2,jj)}^{s2} \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)} t_r^2 t_r^2 \\ - \frac{\Delta_t}{3Ca E_s} \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2^2(e_2,jj)}^{s2} \int_{\partial \Omega_{e_2}^{2,f}} \phi_i \phi_{l_2(e_2,jj)} t_r^2 t_z^2 \\ - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{2,e_2^T}} u_{l_2(e_2^T,jj)} \int_{\partial \Omega^{2,f}} \phi_i n_r^1 \partial_r \phi_{l_2(e_2^T,jj)} \\ \left. - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{2,e_2^T}} w_{l_2(e_2^T,jj)} \int_{\partial \Omega^{2,f}} \phi_i n_z^1 \partial_r \phi_{l_2(e_2^T,jj)} \right], \end{array}`,
    description: "",
    references: ["4.119"],
    transform: "From (4.119)",
    hidden: false,
  },
  {
    id: '4.128',
    section: 'the_r_momentum_residuals',
    label: "Bdry 3 (ii Index)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,3} = \sum_{e_3=1}^{n_{el}^{3}} \left[ \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{3,e_3}} \lambda_{l_3^3(e_3,jj)}^3 \int_{\partial \Omega_{e_3}^{3}} \phi_{l_3(e_3,jj)}^3 \phi_i n_r^3 + \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{3,e_3}} \gamma_{l_3^3(e_3,jj)}^3 \int_{\partial \Omega_{e_3}^{3}} \phi_{l_3(e_3,jj)}^3 \phi_i t_r^3 \right. \\ \left. - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{3,e_3}} u_{l_3(e_3,jj)} \int_{\partial \Omega_{e_3}^{3,f}} \phi_i n_r^1 \partial_r \phi_{l_3(e_3^T,jj)} - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{3,e_3}} w_{l_3(e_3,jj)} \int_{\partial \Omega_{e_3}^{3,f}} \phi_i n_z^1 \partial_r \phi_{l_3(e_3^T,jj)} \right], \end{array}`,
    description: "",
    references: ["4.120"],
    transform: "From (4.120)",
    hidden: false,
  },
  {
    id: '4.129',
    section: 'the_r_momentum_residuals',
    label: "Bdry 4 (ii Index)",
    latex: String.raw`\begin{array}{l} \mathcal{M}_i^{r,4} = \sum_{e_4=1}^{n_{el}^{4}} \left[ \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{4,e_4}} \lambda_{l_4^4(e_4,jj)}^4 \int_{\partial \Omega_{e_4}^{4}} \phi_{l_4(e_4,jj)}^4 \phi_i^4 n_r^4 + \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{4,e_4}} \gamma_{l_4^4(e_4,jj)}^4 \int_{\partial \Omega_{e_4}^{4}} \phi_{l_4(e_4,jj)}^4 \phi_i t_r^4 \right. \\ \left. - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{4,e_4^T}} u_{l_4(e_4^T,jj)} \int_{\partial \Omega^{4,f}} \phi_i n_r^1 \partial_r \phi_{l_4(e_4^T,jj)} - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{4,e_4^T}} w_{l_4(e_4^T,jj)} \int_{\partial \Omega^{4,f}} \phi_i n_z^1 \partial_r \phi_{l_4(e_4^T,jj)} \right]; \end{array}`,
    description: "",
    references: ["4.121"],
    transform: "From (4.121)",
    hidden: false,
  },
  {
    id: '4.130',
    section: 'the_r_momentum_residuals',
    label: "Full Decomposition",
    latex: String.raw`\mathcal{M}_i^r = \sum_{\substack{e=1 \\ i=l(e,ii)}}^{\bar{n}_{el}} \left( \mathcal{M}_{e,ii}^{r,0a} + \mathcal{M}_{e,ii}^{r,0b} + \mathcal{M}_{e,ii}^{r,0c} + \mathcal{M}_{e,ii}^{r,0d} \right) + \underbrace{ \left( -\frac{2\Delta_t \sigma^1(r_{J1},z_{J1})\phi_i(r_{J1},z_{J1})}{3Ca} m_r^{1,n}(r_{J1},z_{J1}) + \frac{2\Delta_t \sigma^1(r_a,z_a)\phi_i(r_a,z_a)}{3Ca} m_r^{1}(r_a,z_a) \right) }_{\mathcal{M}_i^{r,1}} + \sum_{\substack{e_1=1 \\ i=l_1(e,ii)}}^{\bar{n}_{el}^1} \mathcal{M}_{e_1,ii}^{r,1} + \sum_{\substack{e_2=1 \\ i=l_2(e,ii)}}^{\bar{n}_{el}^2} \underbrace{\mathcal{M}_{e,ii}^{r,2}}_{\mathcal{M}_i^{r,2}} + \sum_{\substack{e_3=1 \\ i=l_3(e,ii)}}^{\bar{n}_{el}^3} \underbrace{\mathcal{M}_{e_3,ii}^{r,3}}_{\mathcal{M}_i^{r,3}} + \sum_{\substack{e_4=1 \\ i=l_4(e,ii)}}^{\bar{n}_{el}^4} \underbrace{\mathcal{M}_{e_4,ii}^{r,4}}_{\mathcal{M}_i^{r,4}};`,
    description: "We now introduce the decomposition",
    references: ["4.122"],
    transform: "From (4.122)",
    hidden: false,
  },
  {
    id: '4.131',
    section: 'the_r_momentum_residuals',
    label: "M^{r,1} Boundary",
    latex: String.raw`\mathcal{M}_i^{r,1} = -\frac{2\Delta_t \sigma^1(r_{J1},z_{J1})\phi_i(r_{J1},z_{J1})}{3Ca} m_r^{1,n}(r_{J1},z_{J1}) + \frac{2\Delta_t \sigma^1(r_a,z_a)\phi_i(r_a,z_a)}{3Ca} m_r^{1}(r_a,z_a) + \sum_{\substack{e_1=1 \\ i=l_1(e,ii)}}^{\bar{n}_{el}^1} \mathcal{M}_{e_1,ii}^{r,1}`,
    description: "",
    references: ["4.130"],
    transform: "From (4.130)",
    hidden: false,
  },
  {
    id: '4.132',
    section: 'the_r_momentum_residuals',
    label: "Gravity Integral",
    latex: String.raw`\mathcal{M}_{e,ii}^{r,0a} = \underbrace{ -\frac{2\Delta_t St}{3} \int_{\Omega_e} \phi_{l(e,ii)} \hat{g}_r }_{a_{ii,g_r}(e)}`,
    description: "",
    references: ["4.122"],
    transform: "From (4.122)",
    hidden: false,
  },
  {
    id: '4.133',
    section: 'the_r_momentum_residuals',
    label: "Viscous+Mass Integrals",
    latex: String.raw`\begin{array}{l} \mathcal{M}_{e,ii}^{r,0b} = \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \underbrace{ \int_{\Omega_e} \partial_r \phi_{l(e,ii)} \partial_r \phi_{l(e,jj)} }_{a_{ii,jj}^r(e)} + \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \underbrace{ \int_{\Omega_e} \partial_z \phi_{l(e,ii)} \partial_z \phi_{l(e,jj)} }_{a_{ii,jj}^z(e)} \\ + a_n Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \underbrace{ \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,jj)} }_{a_{ii,jj}(e)} - a_{n-1} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)}(t_{n-1}) \underbrace{ \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,jj)} }_{a_{ii,jj}(e)} \\ + a_{n-2} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)}(t_{n-2}) \underbrace{ \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,jj)} }_{a_{ii,jj}(e)}, \end{array}`,
    description: "",
    references: ["4.123"],
    transform: "From (4.123)",
    hidden: false,
  },
  {
    id: '4.134',
    section: 'the_r_momentum_residuals',
    label: "Convection Integrals",
    latex: String.raw`\begin{array}{l} \mathcal{M}_{e,ii}^{r,0c} = \frac{2\Delta_t Re}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} u_{l(e,kk)} \underbrace{ \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} }_{a_{ii,kk,jj}^r(e)} \\ + \frac{2\Delta_t Re}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} w_{l(e,kk)} \underbrace{ \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} }_{a_{ii,kk,jj}^z(e)} \\ - a_n Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c \underbrace{ \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} }_{a_{ii,kk,jj}^r(e)} \\ + a_{n-1} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-1}) \underbrace{ \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} }_{a_{ii,kk,jj}^r(e)} \\ - a_{n-2} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-2}) \underbrace{ \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} }_{a_{ii,kk,jj}^r(e)} \\ - a_n Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c \underbrace{ \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} }_{a_{ii,kk,jj}^z(e)} \\ + a_{n-1} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-1}) \underbrace{ \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} }_{a_{ii,kk,jj}^z(e)} \\ - a_{n-2} Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-2}) \underbrace{ \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} }_{a_{ii,kk,jj}^z(e)}, \end{array}`,
    description: "",
    references: ["4.124"],
    transform: "From (4.124)",
    hidden: false,
  },
  {
    id: '4.135',
    section: 'the_r_momentum_residuals',
    label: "Pressure Integral",
    latex: String.raw`\mathcal{M}_{e,ii}^{0,d} = -\frac{2\Delta_t}{3} \sum_{jj=1}^{n_p^e} p_{l^p(e,jj)} \underbrace{ \int_{\Omega_e} \psi_{l^p(e,jj)} \partial_r \phi_{l(e,ii)} }_{b_{jj,ii}^r(e)};`,
    description: "",
    references: ["4.125"],
    transform: "From (4.125)",
    hidden: false,
  },
  {
    id: '4.136',
    section: 'the_r_momentum_residuals',
    label: "Bdry 1 Integrals",
    latex: String.raw`\begin{array}{l} \mathcal{M}_{e,ii}^{r,1} = \frac{2\Delta_t}{3Ca} \sum_{jj=1}^{n_v^{1,e_1}} \sigma_{l_1^1(e_1,jj)}^1 \underbrace{ \int_{\partial \Omega_{e_1}^{1}} t_r^1 \phi_{l_1(e_1,jj)}^1 \partial_s \phi_{l_1(e_1,ii)} }_{c_{jj,ii,t_r}(e_1)} \\ - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{1,e_1}} p_{l_1^1(e_1,jj)}^g \underbrace{ \int_{\partial \Omega_{e_1}^{1}} \phi_{l_1(e_1,ii)}^1 \phi_{l_1(e_1,jj)}^1 n_r^1 }_{c_{ii,jj,n_r}(e_1)} \\ - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{1,e_1^T}} u_{l_1(e_1^T,jj)} \underbrace{ \int_{\partial \Omega_{e_1}^{1}} \phi_{l_1(e_1,ii)} n_r^1 \partial_r \phi_{l_1(e_1^T,jj)} }_{c_{ii,jj,n_r}^r(e_1)} \\ - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{1,e_1^T}} w_{l_1(e_1^T,jj)} \underbrace{ \int_{\partial \Omega_{e_1}^{1}} \phi_{l_1(e_1,ii)} n_z^1 \partial_r \phi_{l_1(e_1^T,jj)} }_{c_{ii,jj,n_z}^r(e_1)}, \end{array}`,
    description: "And We recall that for boundary 1 we have",
    references: ["4.126"],
    transform: "From (4.126)",
    hidden: false,
  },
  {
    id: '4.137',
    section: 'the_r_momentum_residuals',
    label: "Bdry 2 Integrals",
    latex: String.raw`\begin{array}{l} \mathcal{M}_{e,ii}^{r,2} = \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{2,e_2}} \lambda_{l_2^2(e_2,jj)}^2 \underbrace{ \int_{\partial \Omega_{e_2}^{2,f}} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 n_r^2 }_{d_{ii,jj,n_r}(e_2)} \\ + \left( \frac{1 + 4Be Ca E_s}{6Ca E_s} \right) \Delta_t \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2(e_2,jj)} \underbrace{ \int_{\partial \Omega_{e_2}^{2,f}} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 t_r^2 t_r^2 }_{d_{ii,jj,t_r,t_r}(e_2)} \\ + \left( \frac{1 + 4Be Ca E_s}{6Ca E_s} \right) \Delta_t \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2(e_2,jj)} \underbrace{ \int_{\partial \Omega_{e_2}^{2,f}} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 t_r^2 t_z^2 }_{d_{ii,jj,t_r,t_z}(e_2)} \\ + \left( \frac{1 - 4Be Ca E_s}{6Ca E_s} \right) \Delta_t \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2^2(e_2,jj)}^s \underbrace{ \int_{\partial \Omega_{e_2}^{2,f}} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 t_r^2 t_r^2 }_{d_{ii,jj,t_r,t_r}(e_2)} \\ + \left( \frac{1 - 4Be Ca E_s}{6Ca E_s} \right) \Delta_t \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2^2(e_2,jj)}^s \underbrace{ \int_{\partial \Omega_{e_2}^{2,f}} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 t_r^2 t_z^2 }_{d_{ii,jj,t_r,t_z}(e_2)} \\ - \frac{\Delta_t}{3Ca E_s} \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2^2(e_2,jj)}^{s2} \underbrace{ \int_{\partial \Omega_{e_2}^{2,f}} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 t_r^2 t_r^2 }_{d_{ii,jj,t_r,t_r}(e_2)} \\ - \frac{\Delta_t}{3Ca E_s} \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2^2(e_2,jj)}^{s2} \underbrace{ \int_{\partial \Omega_{e_2}^{2,f}} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 t_r^2 t_z^2 }_{d_{ii,jj,t_r,t_z}(e_2)} \\ - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{2,e_2^T}} u_{l_2(e_2^T,jj)} \underbrace{ \int_{\partial \Omega_{e_2}^{2,f}} \phi_{l_2(e_2,ii)} n_r^1 \partial_r \phi_{l_2(e_2^T,jj)} }_{d_{ii,jj,n_r}^r(e_2)} \\ - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{2,e_2^T}} w_{l_2(e_2^T,jj)} \underbrace{ \int_{\partial \Omega_{e_2}^{2,f}} \phi_{l_2(e_2,ii)} n_z^1 \partial_r \phi_{l_2(e_2^T,jj)} }_{d_{ii,jj,n_z}^r(e_2)}, \end{array}`,
    description: "",
    references: ["4.127"],
    transform: "From (4.127)",
    hidden: false,
  },
  {
    id: '4.138',
    section: 'the_r_momentum_residuals',
    label: "Bdry 3 Integrals",
    latex: String.raw`\begin{array}{l} \mathcal{M}_{e,ii}^{r,3} = \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{3,e_3}} \lambda_{l_3^3(e_3,jj)}^3 \underbrace{ \int_{\partial \Omega_{e_3}^{3}} \phi_{l_3(e_3,ii)}^3 \phi_{l_3(e_3,jj)}^3 n_r^3 }_{f_{ii,jj,n_r}(e_3)} \\ + \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{3,e_3}} \gamma_{l_3^3(e_3,jj)}^3 \underbrace{ \int_{\partial \Omega_{e_3}^{3}} \phi_{l_3(e_3,ii)}^3 \phi_{l_3(e_3,jj)}^3 t_r^3 }_{f_{ii,jj,t_r}(e_3)} \\ - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{3,e_3^T}} u_{l_3(e_3^T,jj)} \underbrace{ \int_{\partial \Omega_{e_3}^{3}} \phi_{l_3(e_3,ii)}^3 n_r^1 \partial_r \phi_{l_3(e_3^T,jj)} }_{f_{ii,jj,n_r}^r(e_3)} \\ - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{3,e_3^T}} w_{l_3(e_3^T,jj)} \underbrace{ \int_{\partial \Omega_{e_3}^{3}} \phi_{l_3(e_3,ii)}^3 n_z^1 \partial_r \phi_{l_3(e_3^T,jj)} }_{f_{ii,jj,n_z}^r(e_3)} \end{array}`,
    description: "",
    references: ["4.128"],
    transform: "From (4.128)",
    hidden: false,
  },
  {
    id: '4.139',
    section: 'the_r_momentum_residuals',
    label: "Bdry 4 Integrals",
    latex: String.raw`\begin{array}{l} \mathcal{M}_{e,ii}^{r,4} = \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{4,e_4}} \lambda_{l_4^4(e_4,jj)}^4 \underbrace{ \int_{\partial \Omega_{e_4}^{4}} \phi_{l_4(e_4,ii)}^4 \phi_{l_4(e_4,jj)}^4 n_r^4 }_{e_{ii,jj,n_r}(e_4)} \\ + \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{4,e_4}} \gamma_{l_4^4(e_4,jj)}^4 \underbrace{ \int_{\partial \Omega_{e_4}^{4}} \phi_{l_4(e_4,ii)}^4 \phi_{l_4(e_4,jj)}^4 t_r^4 }_{e_{ii,jj,t_r}(e_4)} \\ - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{4,e_4^T}} u_{l_4(e_4^T,jj)} \underbrace{ \int_{\partial \Omega_{e_4}^{4}} \phi_{l_4(e_4,ii)}^4 n_r^1 \partial_r \phi_{l_4(e_4^T,jj)} }_{e_{ii,jj,n_r}^r(e_4)} \\ - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{4,e_4^T}} w_{l_4(e_4^T,jj)} \underbrace{ \int_{\partial \Omega_{e_4}^{4}} \phi_{l_4(e_4,ii)}^4 n_z^1 \partial_r \phi_{l_4(e_4^T,jj)} }_{e_{ii,jj,n_z}^r(e_4)} \end{array}`,
    description: "",
    references: ["4.129"],
    transform: "From (4.129)",
    hidden: false,
  },
  {
    id: '4.140',
    section: 'the_r_momentum_residuals',
    label: "Compact M^{0,a}",
    latex: String.raw`\mathcal{M}_{e,ii}^{r,0a} = -\frac{2\Delta_t St}{3} a_{ii,g_r}(e)`,
    description: "We can also re-write the equations in a more compact notation as",
    references: ["4.132"],
    transform: "From (4.132)",
    hidden: false,
  },
  {
    id: '4.141',
    section: 'the_r_momentum_residuals',
    label: "Compact M^{0,b}",
    latex: String.raw`\mathcal{M}_{e,ii}^{r,0b} = \sum_{jj=1}^{n_v^e} \left[ \frac{2\Delta_t}{3} \left( a_{ii,jj}^r(e) + a_{ii,jj}^z(e) \right) + a_n Re \, a_{ii,jj}(e) \right] u_{l(e,jj)} - a_{n-1} Re \sum_{jj=1}^{n_v^e} a_{ii,jj}(e) u_{l(e,jj)}(t_{n-1}) + a_{n-2} Re \sum_{jj=1}^{n_v^e} a_{ii,jj}(e) u_{l(e,jj)}(t_{n-2})`,
    description: "We can also re-write the equations in a more compact notation as",
    references: ["4.133"],
    transform: "From (4.133)",
    hidden: false,
  },
  {
    id: '4.142',
    section: 'the_r_momentum_residuals',
    label: "Compact M^{0,c}",
    latex: String.raw`\begin{array}{l} \mathcal{M}_{e,ii}^{r,0c} = \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \left\{ \frac{2\Delta_t Re}{3} \sum_{kk=1}^{n_v^e} \left[ u_{l(e,kk)} a_{ii,kk,jj}^r(e) + w_{l(e,kk)} a_{ii,kk,jj}^z(e) \right] \right. \\ \left. - \sum_{kk=1}^{n_v^e} a_{ii,kk,jj}^r(e) \left[ a_n r_{l(e,kk)}^c - a_{n-1} r_{l(e,kk)}^c(t_{n-1}) + a_{n-2} r_{l(e,kk)}^c(t_{n-2}) \right] \right. \\ \left. - \sum_{kk=1}^{n_v^e} a_{ii,kk,jj}^z(e) \left[ a_n z_{l(e,kk)}^c - a_{n-1} z_{l(e,kk)}^c(t_{n-1}) + a_{n-2} z_{l(e,kk)}^c(t_{n-2}) \right] \right\}, \end{array}`,
    description: "We can also re-write the equations in a more compact notation as",
    references: ["4.134"],
    transform: "From (4.134)",
    hidden: false,
  },
  {
    id: '4.143',
    section: 'the_r_momentum_residuals',
    label: "Compact M^{0,d}",
    latex: String.raw`\mathcal{M}_{e,ii}^{0,d} = -\frac{2\Delta_t}{3} \sum_{jj=1}^{n_p^e} p_{l^p(e,jj)} b_{jj,ii}^r(e)`,
    description: "",
    references: ["4.135"],
    transform: "From (4.135)",
    hidden: false,
  },
  {
    id: '4.144',
    section: 'the_r_momentum_residuals',
    label: "Compact Bdry 1",
    latex: String.raw`\begin{array}{l} \mathcal{M}_{e,ii}^{r,1} = \sum_{jj=1}^{n_v^{1,e_1}} \left\{ \frac{2\Delta_t}{3Ca} \sigma_{l_1^1(e_1,jj)}^1 c_{jj,ii,t_r}(e_1) - \frac{2\Delta_t}{3} p_{l_1^1(e_1,jj)}^g c_{ii,jj,n_r}(e_1) \right. \\ \left. - \frac{2\Delta_t}{3} u_{l_1(e_1^T,jj)} c_{ii,jj,n_r}^r - \frac{2\Delta_t}{3} w_{l_1(e_1^T,jj)} c_{ii,jj,n_z}^r \right\}; \end{array}`,
    description: "For boundary 1 we have",
    references: ["4.136"],
    transform: "From (4.136)",
    hidden: false,
  },
  {
    id: '4.145',
    section: 'the_r_momentum_residuals',
    label: "Compact Bdry 2",
    latex: String.raw`\begin{array}{l} \mathcal{M}_{e,ii}^{r,2} = \sum_{jj=1}^{n_v^{2,e_2}} \left\{ \frac{2\Delta_t}{3} \lambda_{l_2^2(e_2,jj)}^2 d_{ii,jj,n_r}(e_2) \right. \\ + \left( \frac{1 + 4Be Ca E_s}{6Ca E_s} \right) \Delta_t \left[ u_{l_2(e_2,jj)} d_{ii,jj,t_r,t_r}(e_2) + w_{l_2(e_2,jj)} d_{ii,jj,t_r,t_z}(e_2) \right] \\ + \left( \frac{1 - 4Be Ca E_s}{6Ca E_s} \right) \Delta_t \left[ u_{l_2^2(e_2,jj)}^s d_{ii,jj,t_r,t_r}(e_2) + w_{l_2^2(e_2,jj)}^s d_{ii,jj,t_r,t_z}(e_2) \right] \\ - \frac{\Delta_t}{3Ca E_s} \left[ u_{l_2^2(e_2,jj)}^{s2} d_{ii,jj,t_r,t_r}(e_2) + w_{l_2^2(e_2,jj)}^{s2} d_{ii,jj,t_r,t_z}(e_2) \right] \\ - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j d_{ii,jj,n_r}^r - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} w_j d_{ii,jj,n_z}^r \left. \right\}; \end{array}`,
    description: "Endequation For boundary 1 we have for boundary 2",
    references: ["4.137"],
    transform: "From (4.137)",
    hidden: false,
  },
  {
    id: '4.146',
    section: 'the_r_momentum_residuals',
    label: "Compact Bdry 3",
    latex: String.raw`\begin{array}{l} \mathcal{M}_{e,ii}^{r,3} = \sum_{jj=1}^{n_v^{3,e_3}} \left[ \lambda_{l_3^3(e_3,jj)}^3 f_{ii,jj,n_r}(e_3) + \gamma_{l_3^3(e_3,jj)}^3 f_{ii,jj,t_r}(e_3) \right. \\ \left. - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j f_{ii,jj,n_r}^r - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} w_j f_{ii,jj,n_z}^r \right]. \end{array}`,
    description: "",
    references: ["4.138"],
    transform: "From (4.138)",
    hidden: false,
  },
  {
    id: '4.147',
    section: 'the_r_momentum_residuals',
    label: "Compact Bdry 4",
    latex: String.raw`\begin{array}{l} \mathcal{M}_{e,ii}^{r,5} = \sum_{jj=1}^{n_v^{5,e_5}} \left[ \lambda_{l_5^5(e_5,jj)}^5 e_{ii,jj,n_r}(e_5) + \gamma_{l_5^5(e_5,jj)}^5 e_{ii,jj,t_r}(e_5) \right. \\ \left. - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} u_j e_{ii,jj,n_r}^r - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} w_j e_{ii,jj,n_z}^r \right]. \end{array}`,
    description: "For boundary 3 and for boundary 5",
    references: ["4.139"],
    transform: "From (4.139)",
    hidden: false,
  },
  {
    id: '4.157',
    section: 'derivatives_of_m_i_r_with_respect_to_u_q',
    label: "Jacobian dM/du",
    latex: String.raw`\partial_{u_q} \mathcal{M}_i^r = \sum_{\substack{e=1 \\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{u_q} \left( \mathcal{M}_{e,ii}^{r,0a} + \mathcal{M}_{e,ii}^{r,0b} + \mathcal{M}_{e,ii}^{r,0c} + \mathcal{M}_{e,ii}^{r,0d} \right) + \sum_{\substack{e_1=1 \\ i=l_1(e,ii)}}^{\bar{n}_{el}^1} \partial_{u_q} \mathcal{M}_{e_1,ii}^{r,1} - \frac{2\Delta_t}{3} \partial_{u_q} \left( \frac{\sigma^1(r_{J1},z_{J1})\phi_i(r_{J1},z_{J1}) m_r^{1,n}(r_{J1},z_{J1})}{Ca} \right) + \frac{2\Delta_t}{3} \partial_{u_q} \left( \frac{\sigma^1(r_a,z_a)\phi_i(r_a,z_a) m_r^{1}(r_a,z_a)}{Ca} \right) + \sum_{\substack{e_2=1 \\ i=l_2(e,ii)}}^{\bar{n}_{el}^2} \partial_{u_q} \mathcal{M}_{e,ii}^{r,2} + \sum_{\substack{e_3=1 \\ i=l_3(e,ii)}}^{\bar{n}_{el}^3} \partial_{u_q} \mathcal{M}_{e_3,ii}^{r,3} + \sum_{\substack{e_4=1 \\ i=l_4(e,ii)}}^{\bar{n}_{el}^4} \partial_{u_q} \mathcal{M}_{e_4,ii}^{r,4}`,
    description: "This derivative has contribution from the bulk terms and boundary 2 terms",
    references: ["4.141", "4.142"],
    transform: "From (4.141), (4.142)",
    hidden: false,
  },
  {
    id: '4.158',
    section: 'derivatives_of_m_i_r_with_respect_to_u_q',
    label: "Jacobian Simplified",
    latex: String.raw`\partial_{u_q} \mathcal{M}_i^r = \sum_{\substack{e=1 \\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{u_q} \mathcal{M}_{e,ii}^{r,0b} + \sum_{\substack{e=1 \\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{u_q} \mathcal{M}_{e,ii}^{r,0c} + \sum_{\substack{e_1=1 \\ i=l_1(e,ii)}}^{\bar{n}_{el}^1} \partial_{u_q} \mathcal{M}_{e,ii}^{r,1} + \sum_{\substack{e_2=1 \\ i=l_2(e,ii)}}^{\bar{n}_{el}^2} \partial_{u_q} \mathcal{M}_{e,ii}^{r,2} + \sum_{\substack{e_3=1 \\ i=l_3(e,ii)}}^{\bar{n}_{el}^3} \partial_{u_q} \mathcal{M}_{e,ii}^{r,3} + \sum_{\substack{e_4=1 \\ i=l_4(e,ii)}}^{\bar{n}_{el}^4} \partial_{u_q} \mathcal{M}_{e,ii}^{r,4}`,
    description: "",
    references: ["4.157"],
    transform: "From (4.157)",
    hidden: false,
  },
  {
    id: '4.159',
    section: 'derivatives_of_m_i_r_with_respect_to_u_q',
    label: "dM^{0,b}/du Expanded",
    latex: String.raw`\partial_{u_q} \mathcal{M}_{e,ii}^{r,0b} = +\frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^e} a_{ii,jj}^r(e) \partial_{u_q} u_{l(e,jj)} + \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^e} a_{ii,jj}^z(e) \partial_{u_q} u_{l(e,jj)} + Re \sum_{jj=1}^{n_v^e} a_{ii,jj}(e) \partial_{u_q} u_{l(e,jj)} - \frac{4Re}{3} \sum_{jj=1}^{n_v^e} a_{ii,jj}(e) \partial_{u_q} u_{l(e,jj)}(t_{n-1}) + \frac{Re}{3} \sum_{jj=1}^{n_v^e} a_{ii,jj}(e) \partial_{u_q} u_{l(e,jj)}(t_{n-2})`,
    description: "",
    references: ["4.141"],
    transform: "From (4.141)",
    hidden: false,
  },
  {
    id: '4.160',
    section: 'derivatives_of_m_i_r_with_respect_to_u_q',
    label: "dM^{0,b}/du Reduced",
    latex: String.raw`\partial_{u_q} \mathcal{M}_{e,ii}^{r,0b} = \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^e} a_{ii,jj}^r(e) + \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^e} a_{ii,jj}^z(e) + Re \sum_{jj=1}^{n_v^e} a_{ii,jj}(e)`,
    description: "",
    references: ["4.159"],
    transform: "From (4.159)",
    hidden: false,
  },
  {
    id: '4.161',
    section: 'derivatives_of_m_i_r_with_respect_to_u_q',
    label: "dM^{0,b}/du Compact",
    latex: String.raw`\partial_{u_q} \mathcal{M}_{e,ii}^{r,0b} = \sum_{jj=1}^{n_v^e} \left[ \frac{2\Delta_t}{3} \left( a_{ii,jj}^r(e) + a_{ii,jj}^z(e) \right) + Re \, a_{ii,jj}(e) \right]`,
    description: "",
    references: ["4.160"],
    transform: "From (4.160)",
    hidden: false,
  },
  {
    id: '4.162',
    section: 'derivatives_of_m_i_r_with_respect_to_u_q',
    label: "dM^{0,c}/du Expanded",
    latex: String.raw`\begin{array}{l} \partial_{u_q} \mathcal{M}_{e,ii}^{r,0c} = \frac{2\Delta_t Re}{3} \sum_{jj=1}^{n_v^e} \partial_{u_q} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} u_{l(e,kk)} a_{ii,kk,jj}^r(e) \\ + \frac{2\Delta_t Re}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} a_{ii,kk,jj}^r(e) \partial_{u_q} u_{l(e,kk)} \\ + \frac{2\Delta_t Re}{3} \sum_{jj=1}^{n_v^e} \partial_{u_q} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} w_{l(e,kk)} a_{ii,kk,jj}^z(e) \\ - Re \sum_{jj=1}^{n_v^e} \partial_{u_q} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c a_{ii,kk,jj}^r(e) \\ + \frac{4Re}{3} \sum_{jj=1}^{n_v^e} \partial_{u_q} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-1}) a_{ii,kk,jj}^r(e) \\ - \frac{Re}{3} \sum_{jj=1}^{n_v^e} \partial_{u_q} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-2}) a_{ii,kk,jj}^r(e) \\ - Re \sum_{jj=1}^{n_v^e} \partial_{u_q} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c a_{ii,kk,jj}^z(e) \\ + \frac{4Re}{3} \sum_{jj=1}^{n_v^e} \partial_{u_q} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-1}) a_{ii,kk,jj}^z(e) \\ - \frac{Re}{3} \sum_{jj=1}^{n_v^e} \partial_{u_q} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-2}) a_{ii,kk,jj}^z(e), \end{array}`,
    description: "Or equivalently Similarly, from equation (4.142) we have",
    references: ["4.142"],
    transform: "From (4.142)",
    hidden: false,
  },
  {
    id: '4.163',
    section: 'derivatives_of_m_i_r_with_respect_to_u_q',
    label: "dM^{0,c}/du Reduced",
    latex: String.raw`\begin{array}{l} \partial_{u_q} \mathcal{M}_{e,ii}^{r,0c} = \frac{2\Delta_t Re}{3} \sum_{\substack{kk=1 \\ q=l(e,jj)}}^{n_v^e} u_{l(e,kk)} a_{ii,kk,jj}^r(e) \\ + \frac{2\Delta_t Re}{3} \sum_{\substack{jj=1 \\ q=l(e,kk)}}^{n_v^e} u_{l(e,jj)} a_{ii,kk,jj}^r(e) + \frac{2\Delta_t Re}{3} \sum_{\substack{kk=1 \\ q=l(e,jj)}}^{n_v^e} w_{l(e,kk)} a_{ii,kk,jj}^z(e) \\ - Re \sum_{\substack{kk=1 \\ q=l(e,jj)}}^{n_v^e} r_{l(e,kk)}^c a_{ii,kk,jj}^r(e) + \frac{4Re}{3} \sum_{\substack{kk=1 \\ q=l(e,jj)}}^{n_v^e} r_{l(e,kk)}^c(t_{n-1}) a_{ii,kk,jj}^r(e) \\ - \frac{Re}{3} \sum_{\substack{kk=1 \\ q=l(e,jj)}}^{n_v^e} r_{l(e,kk)}^c(t_{n-2}) a_{ii,kk,jj}^r(e) \\ - Re \sum_{\substack{kk=1 \\ q=l(e,jj)}}^{n_v^e} z_{l(e,kk)}^c a_{ii,kk,jj}^z(e) + \frac{4Re}{3} \sum_{\substack{kk=1 \\ q=l(e,jj)}}^{n_v^e} z_{l(e,kk)}^c(t_{n-1}) a_{ii,kk,jj}^z(e) \\ - \frac{Re}{3} \sum_{\substack{kk=1 \\ q=l(e,jj)}}^{n_v^e} z_{l(e,kk)}^c(t_{n-2}) a_{ii,kk,jj}^z(e), \end{array}`,
    description: "",
    references: ["4.162"],
    transform: "From (4.162)",
    hidden: false,
  },
  {
    id: '4.164',
    section: 'derivatives_of_m_i_r_with_respect_to_u_q',
    label: "dM^{0,c}/du Compact",
    latex: String.raw`\begin{array}{l} \partial_{u_q} \mathcal{M}_{e,ii}^{r,0c} = \sum_{\substack{jj=1 \\ q=l(e,kk)}}^{n_v^e} \frac{2\Delta_t Re}{3} a_{ii,kk,jj}^r(e) u_{l(e,jj)} \\ + \frac{2\Delta_t Re}{3} \sum_{\substack{kk=1 \\ q=l(e,jj)}}^{n_v^e} \left[ u_{l(e,kk)} a_{ii,kk,jj}^r(e) + w_{l(e,kk)} a_{ii,kk,jj}^z(e) \right] \\ - Re \sum_{\substack{kk=1 \\ q=l(e,jj)}}^{n_v^e} a_{ii,kk,jj}^r(e) \left[ r_{l(e,kk)}^c - \frac{4}{3} r_{l(e,kk)}^c(t_{n-1}) + \frac{1}{3} r_{l(e,kk)}^c(t_{n-2}) \right] \\ - Re \sum_{\substack{kk=1 \\ q=l(e,jj)}}^{n_v^e} a_{ii,kk,jj}^z(e) \left[ z_{l(e,kk)}^c - \frac{4}{3} z_{l(e,kk)}^c(t_{n-1}) + \frac{1}{3} z_{l(e,kk)}^c(t_{n-2}) \right], \end{array}`,
    description: "",
    references: ["4.163"],
    transform: "From (4.163)",
    hidden: false,
  },
  {
    id: '4.165',
    section: 'derivatives_of_m_i_r_with_respect_to_u_q',
    label: "dM^{r,1}/du Expanded",
    latex: String.raw`\partial_{u_q} \mathcal{M}_{e,ii}^{r,1} = \frac{2\Delta_t}{3Ca} \sum_{jj=1}^{n_v^{1,e_1}} \partial_{u_q} \sigma_{l_1^1(e_1,jj)}^1 c_{jj,ii,t_r}(e_1) - \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{1,e_1}} \partial_{u_q} p_{l_1^1(e_1,jj)}^g c_{ii,jj,n_r}(e_1) - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} c_{ii,jj,n_r}^r \partial_{u_q} u_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \partial_{u_q} w_j c_{ii,jj,n_z}^r`,
    description: "",
    references: ["4.144"],
    transform: "From (4.144)",
    hidden: false,
  },
  {
    id: '4.166',
    section: 'derivatives_of_m_i_r_with_respect_to_u_q',
    label: "dM^{r,1}/du Compact",
    latex: String.raw`\partial_{u_q} \mathcal{M}_{e,ii}^{r,1} = -\frac{2\Delta_t}{3} c_{ii,jj,n_r}^r \big|_{q=l_1(e_1,jj)}`,
    description: "",
    references: ["4.165"],
    transform: "From (4.165)",
    hidden: false,
  },
  {
    id: '4.167',
    section: 'derivatives_of_m_i_r_with_respect_to_u_q',
    label: "dM^{r,2}/du Expanded",
    latex: String.raw`\begin{array}{l} \partial_{u_q} \mathcal{M}_{e,ii}^{r,2} = \frac{2\Delta_t Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_r}(e_2) \partial_{u_q} u_{l_2(e,jj)} + \frac{2\Delta_t Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_z}(e_2) \partial_{u_q} w_{l_2(e,jj)} \\ - \frac{2\Delta_t Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_r}(e_2) \partial_{u_q} u_{l_2^2(e,jj)}^s - \frac{2\Delta_t Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_z}(e_2) \partial_{u_q} w_{l_2^2(e,jj)}^s \\ + \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,n_r}(e_2) \partial_{u_q} \lambda_{l_2^2(e_2,jj)}^2 - \frac{\Delta_t}{3Ca} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r}^s(e_2) \partial_{u_q} \sigma_{l_2^2(e_2,jj)}^2 \\ - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} d_{ii,jj,n_r}^r \partial_{u_q} u_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \partial_{u_q} w_j d_{ii,jj,n_z}^r, \end{array}`,
    description: "",
    references: ["4.145"],
    transform: "From (4.145)",
    hidden: false,
  },
  {
    id: '4.168',
    section: 'derivatives_of_m_i_r_with_respect_to_u_q',
    label: "dM^{r,2}/du Compact",
    latex: String.raw`\partial_{u_q} \mathcal{M}_{e,ii}^{r,2} = \frac{2\Delta_t}{3} \left[ Be \, d_{ii,jj,t_r,t_r}(e_2) - d_{ii,jj,n_r}^r(e_2) \right] \big|_{q=l_2(e_2,jj)}`,
    description: "",
    references: ["4.167"],
    transform: "From (4.167)",
    hidden: false,
  },
  {
    id: '4.169',
    section: 'derivatives_of_m_i_r_with_respect_to_u_q',
    label: "dM^{r,3}/du Expanded",
    latex: String.raw`\begin{array}{l} \partial_{u_q} \mathcal{M}_{e,ii}^{r,3} = \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{3,e_3}} \partial_{u_q} \lambda_{l_3^3(e_3,jj)}^3 f_{ii,jj,n_r}(e_3) + \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{3,e_3}} \partial_{u_q} \gamma_{l_3^3(e_3,jj)}^3 f_{ii,jj,t_r}(e_3) \\ - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} f_{ii,jj,n_r}^r \partial_{u_q} u_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \partial_{u_q} w_j f_{ii,jj,n_z}^r \end{array}`,
    description: "",
    references: ["4.146"],
    transform: "From (4.146)",
    hidden: false,
  },
  {
    id: '4.170',
    section: 'derivatives_of_m_i_r_with_respect_to_u_q',
    label: "dM^{r,3}/du Compact",
    latex: String.raw`\partial_{u_q} \mathcal{M}_{e,ii}^{r,3} = -\frac{2\Delta_t}{3} f_{ii,jj,n_r}^r \big|_{q=l_3(e_3,jj)}`,
    description: "",
    references: ["4.169"],
    transform: "From (4.169)",
    hidden: false,
  },
  {
    id: '4.171',
    section: 'derivatives_of_m_i_r_with_respect_to_u_q',
    label: "dM^{r,4}/du Expanded",
    latex: String.raw`\begin{array}{l} \partial_{u_q} \mathcal{M}_{e,ii}^{r,4} = \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{4,e_4}} \partial_{u_q} \lambda_{l_4^4(e_3,jj)}^4 e_{ii,jj,n_r}(e_4) + \frac{2\Delta_t}{3} \sum_{jj=1}^{n_v^{4,e_4}} \partial_{u_q} \gamma_{l_4^4(e_4,jj)}^4 e_{ii,jj,t_r}(e_4) \\ - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} e_{ii,jj,n_r}^r \partial_{u_q} u_j - \frac{2\Delta_t}{3} \sum_{j=1}^{n_v} \partial_{u_q} w_j e_{ii,jj,n_z}^r \end{array}`,
    description: "",
    references: ["4.147"],
    transform: "From (4.147)",
    hidden: false,
  },
  {
    id: '4.172',
    section: 'derivatives_of_m_i_r_with_respect_to_u_q',
    label: "dM^{r,4}/du Compact",
    latex: String.raw`\partial_{u_q} \mathcal{M}_{e,ii}^{r,4} = -\frac{2\Delta_t}{3} e_{ii,jj,n_r}^r \big|_{q=l_4(e_4,jj)}`,
    description: "",
    references: ["4.171"],
    transform: "From (4.171)",
    hidden: false,
  },
  {
    id: '4.173',
    section: 'derivatives_of_m_i_r_with_respect_to_w_q',
    label: "\u2202M^{r}/\u2202w",
    latex: String.raw`\partial_{w_q}\mathcal{M}_i^r =
\sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{w_q} \left( \mathcal{M}_{e,ii}^{r,0a} + \mathcal{M}_{e,ii}^{r,0b} + \mathcal{M}_{e,ii}^{r,0c} + \mathcal{M}_{e,ii}^{r,0d} \right)
+ \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{w_q} \mathcal{M}_{e_1,ii}^{r,1}
- \frac{2\dt}{3} \partial_{w_q} \frac{\sigma^1(r_{J^1},z_{J^1}) \phi_i(r_{J^1},z_{J^1}) m_r^{1,n}(r_{J^1},z_{J^1})}{\ca}
+ \frac{2\dt}{3} \partial_{w_q} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_r^1(r_a,z_a)}{\ca}
+ \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{w_q} \mathcal{M}_{e_2,ii}^{r,2}
+ \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \partial_{w_q} \mathcal{M}_{e_3,ii}^{r,3}
+ \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \partial_{w_q} \mathcal{M}_{e_4,ii}^{r,4}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.174',
    section: 'derivatives_of_m_i_r_with_respect_to_w_q',
    label: "\u2202M^{r}/\u2202w",
    latex: String.raw`\partial_{w_q}\mathcal{M}_i^r =
\sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{w_q}\mathcal{M}_{e,ii}^{r,0b}
+ \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{w_q}\mathcal{M}_{e,ii}^{r,0c}
+ \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{w_q}\mathcal{M}_{e_1,ii}^{r,1}
+ \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{w_q}\mathcal{M}_{e_2,ii}^{r,2}
+ \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \partial_{w_q}\mathcal{M}_{e_3,ii}^{r,3}
+ \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \partial_{w_q}\mathcal{M}_{e_4,ii}^{r,4}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.175',
    section: 'derivatives_of_m_i_r_with_respect_to_w_q',
    label: "\u2202M^{r,0b}/\u2202w",
    latex: String.raw`\begin{aligned}
\partial_{w_q}\mathcal{M}_{e,ii}^{r,0b} &= \frac{2\dt}{3} \sum_{jj=1}^{n_v^e} a_{ii,jj}^{r,r}(e) \partial_{w_q} u_{l(e,jj)}
+ \frac{2\dt}{3} \sum_{jj=1}^{n_v^e} a_{ii,jj}^{z,z}(e) \partial_{w_q} u_{l(e,jj)}
&\quad + Re \sum_{jj=1}^{n_v^e} a_{ii,jj}(e) \partial_{w_q} u_{l(e,jj)}
- \frac{4Re}{3} \sum_{jj=1}^{n_v^e} a_{ii,jj}(e) \partial_{w_q} u_{l(e,jj)}(t_{n-1})
&\quad + \frac{Re}{3} \sum_{jj=1}^{n_v^e} a_{ii,jj}(e) \partial_{w_q} u_{l(e,jj)}(t_{n-2}),
\end{aligned}`,
    description: "",
    references: ["4.141"],
    transform: "From (4.141)",
    hidden: false,
  },
  {
    id: '4.176',
    section: 'derivatives_of_m_i_r_with_respect_to_w_q',
    label: "\u2202M^{r,0b}/\u2202w",
    latex: String.raw`\partial_{w_q}\mathcal{M}_{e,ii}^{r,0b} = 0`,
    description: "",
    references: ["4.141"],
    transform: "From (4.141)",
    hidden: false,
  },
  {
    id: '4.177',
    section: 'derivatives_of_m_i_r_with_respect_to_w_q',
    label: "\u2202M^{r,0c}/\u2202w",
    latex: String.raw`\begin{aligned}
\partial_{w_q}\mathcal{M}_{e,ii}^{r,0c} &= \frac{2\dt Re}{3} \partial_{w_q} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} u_{l(e,kk)} a_{ii,kk,jj}^r(e)
&\quad + \frac{2\dt Re}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} a_{ii,kk,jj}^r(e) \partial_{w_q} w_{l(e,kk)}
&\quad - Re \sum_{jj=1}^{n_v^e} \partial_{w_q} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^r a_{ii,kk,jj}^r(e)
&\quad + \frac{4Re}{3} \sum_{jj=1}^{n_v^e} \partial_{w_q} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^r(t_{n-1}) a_{ii,kk,jj}^r(e)
&\quad - \frac{Re}{3} \sum_{jj=1}^{n_v^e} \partial_{w_q} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^r(t_{n-2}) a_{ii,kk,jj}^r(e)
&\quad - Re \sum_{jj=1}^{n_v^e} \partial_{w_q} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^r a_{ii,kk,jj}^r(e)
&\quad + \frac{4Re}{3} \sum_{jj=1}^{n_v^e} \partial_{w_q} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^r(t_{n-1}) a_{ii,kk,jj}^r(e)
&\quad - \frac{Re}{3} \sum_{jj=1}^{n_v^e} \partial_{w_q} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^r(t_{n-2}) a_{ii,kk,jj}^r(e),
\end{aligned}`,
    description: "",
    references: ["4.142"],
    transform: "From (4.142)",
    hidden: false,
  },
  {
    id: '4.178',
    section: 'derivatives_of_m_i_r_with_respect_to_w_q',
    label: "\u2202M^{r,0c}/\u2202w",
    latex: String.raw`\partial_{w_q}\mathcal{M}_{e,ii}^{r,0c} = \sum_{kk=1}^{n_v^e} \frac{2\dt Re}{3} u_{l(e,jj)} a_{ii,kk,jj}^r(e)`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.179',
    section: 'derivatives_of_m_i_r_with_respect_to_w_q',
    label: "\u2202M^{r,1}/\u2202w",
    latex: String.raw`\begin{aligned}
\partial_{w_q}\mathcal{M}_{e_1,ii}^{r,1} &= \frac{2\dt}{3\ca} \sum_{jj=1}^{n_v^{1,e_1}} \partial_{w_q} \sigma_{l_1(e_1,jj)}^1 e_{jj,ii,t_r}(e_1)
- \frac{2\dt}{3} \sum_{jj=1}^{n_v^{1,e_1}} \partial_{w_q} p_{l_1(e_1,jj)}^1 c_{ii,jj,n_r}(e_1)
&\quad - \frac{2\dt}{3} \sum_{j=1}^{n_v} c_{ii,jj,n_r}^r \partial_{w_q} u_j
- \frac{2\dt}{3} \sum_{j=1}^{n_v} c_{ii,jj,n_r}^r \partial_{w_q} w_j,
\end{aligned}`,
    description: "",
    references: ["4.145"],
    transform: "From (4.145)",
    hidden: false,
  },
  {
    id: '4.180',
    section: 'derivatives_of_m_i_r_with_respect_to_w_q',
    label: "\u2202M^{r,1}/\u2202w",
    latex: String.raw`\partial_{w_q}\mathcal{M}_{e_1,ii}^{r,1} = -\frac{2\dt}{3} c_{ii,jj,n_r}^r \big|_{q=l_1(e_1,jj)}`,
    description: "",
    references: ["4.145"],
    transform: "From (4.145)",
    hidden: false,
  },
  {
    id: '4.181',
    section: 'derivatives_of_m_i_r_with_respect_to_w_q',
    label: "\u2202M^{r,2}/\u2202w",
    latex: String.raw`\begin{aligned}
\partial_{w_q}\mathcal{M}_{e_2,ii}^{r,2} &= \frac{2\dt Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_r}(e_2) \partial_{w_q} u_{l_2(e_2,jj)}
+ \frac{2\dt Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_z}(e_2) \partial_{w_q} w_{l_2(e_2,jj)}
&\quad - \frac{2\dt Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_r}(e_2) \partial_{w_q} u_{l_2^2(e_2,jj)}^s
- \frac{2\dt Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_z}(e_2) \partial_{w_q} w_{l_2^2(e_2,jj)}^s
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,n_r}(e_2) \partial_{w_q} \varpi_{l_2^2(e_2,jj)}^2
- \frac{\dt}{3\ca} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r}^s(e_2) \partial_{w_q} \varepsilon_{l_2^2(e_2,jj)}^2
&\quad - \frac{2\dt}{3} \sum_{j=1}^{n_v} d_{ii,jj,n_r}^r \partial_{w_q} u_j
- \frac{2\dt}{3} \sum_{j=1}^{n_v} d_{ii,jj,n_z}^r \partial_{w_q} w_j,
\end{aligned}`,
    description: "",
    references: ["4.145"],
    transform: "From (4.145)",
    hidden: false,
  },
  {
    id: '4.182',
    section: 'derivatives_of_m_i_r_with_respect_to_w_q',
    label: "\u2202M^{r,2}/\u2202w",
    latex: String.raw`\partial_{w_q}\mathcal{M}_{e_2,ii}^{r,2} = \frac{2\dt}{3} \left( Be\, d_{ii,jj,t_r,t_z}(e_2) - d_{ii,jj,n_z}^r \right) \big|_{q=l_2(e_2,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.183',
    section: 'derivatives_of_m_i_r_with_respect_to_w_q',
    label: "\u2202M^{r,3}/\u2202w",
    latex: String.raw`\begin{aligned}
\partial_{w_q}\mathcal{M}_{e_3,ii}^{r,3} &= \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} \partial_{w_q} \varpi_{l_3(e_3,jj)}^3 f_{ii,jj,n_r}(e_3)
+ \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} \partial_{w_q} \varrho_{l_3(e_3,jj)}^3 f_{ii,jj,t_r}(e_3)
&\quad - \frac{2\dt}{3} \sum_{j=1}^{n_v} f_{ii,jj,n_r}^r \partial_{w_q} u_j
- \frac{2\dt}{3} \sum_{j=1}^{n_v} f_{ii,jj,n_z}^r \partial_{w_q} w_j,
\end{aligned}`,
    description: "",
    references: ["4.146"],
    transform: "From (4.146)",
    hidden: false,
  },
  {
    id: '4.184',
    section: 'derivatives_of_m_i_r_with_respect_to_w_q',
    label: "\u2202M^{r,3}/\u2202w",
    latex: String.raw`\partial_{w_q}\mathcal{M}_{e_3,ii}^{r,3} = -\frac{2\dt}{3} f_{ii,jj,n_z}^r \big|_{q=l_3(e_3,jj)}`,
    description: "",
    references: ["4.146"],
    transform: "From (4.146)",
    hidden: false,
  },
  {
    id: '4.185',
    section: 'derivatives_of_m_i_r_with_respect_to_w_q',
    label: "\u2202M^{r,4}/\u2202w",
    latex: String.raw`\begin{aligned}
\partial_{w_q}\mathcal{M}_{e_4,ii}^{r,4} &= \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} \partial_{w_q} \varpi_{l_4(e_4,jj)}^4 e_{ii,jj,n_r}(e_4)
+ \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} \partial_{w_q} \varrho_{l_4(e_4,jj)}^4 e_{ii,jj,t_r}(e_4)
&\quad - \frac{2\dt}{3} \sum_{j=1}^{n_v} e_{ii,jj,n_r}^r \partial_{w_q} u_j
- \frac{2\dt}{3} \sum_{j=1}^{n_v} e_{ii,jj,n_z}^r \partial_{w_q} w_j,
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.186',
    section: 'derivatives_of_m_i_r_with_respect_to_w_q',
    label: "\u2202M^{r,4}/\u2202w",
    latex: String.raw`\partial_{w_q}\mathcal{M}_{e_4,ii}^{r,4} = -\frac{2\dt}{3} e_{ii,jj,n_z}^r \big|_{q=l_4(e_4,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.187',
    section: 'derivatives_of_m_i_r_with_respect_to_p_q',
    label: "\u2202M^{r}/\u2202p",
    latex: String.raw`\begin{aligned}
\partial_{p_q}\mathcal{M}_i^r &= \sum_{e=1}^{\bar{n}_{el}} \partial_{p_q} \left[ \mathcal{M}_{e,ii}^{r,0a} + \mathcal{M}_{e,ii}^{r,0b} + \mathcal{M}_{e,ii}^{r,0c} + \mathcal{M}_{e,ii}^{r,0d} \right]
&\quad + \sum_{e_1=1}^{\bar{n}_{el}^1} \partial_{p_q} \mathcal{M}_{e_1,ii}^{r,1}
- \frac{2\dt}{3} \partial_{p_q} \frac{\sigma^1(r_{j1},z_{j1}) \phi_i(r_{j1},z_{j1}) m_r^{1,n}(r_{j1},z_{j1})}{\ca}
&\quad + \frac{2\dt}{3} \partial_{p_q} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_r^{1}(r_a,z_a)}{\ca}
+ \sum_{e_2=1}^{\bar{n}_{el}^2} \partial_{p_q} \mathcal{M}_{e_2,ii}^{r,2}
&\quad + \sum_{e_3=1}^{\bar{n}_{el}^3} \partial_{p_q} \mathcal{M}_{e_3,ii}^{r,3}
+ \sum_{e_4=1}^{\bar{n}_{el}^4} \partial_{p_q} \mathcal{M}_{e_4,ii}^{r,4}.
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.188',
    section: 'derivatives_of_m_i_r_with_respect_to_p_q',
    label: "\u2202M^{r}/\u2202p",
    latex: String.raw`\partial_{p_q}\mathcal{M}_i^r = \sum_{e=1}^{\bar{n}_{el}} \partial_{p_q} \mathcal{M}_{e,ii}^{r,0d}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.189',
    section: 'derivatives_of_m_i_r_with_respect_to_p_q',
    label: "\u2202M^{r,0d}/\u2202p",
    latex: String.raw`\partial_{p_q}\mathcal{M}_{e,ii}^{r,0d} = \sum_{jj=1}^{n_p^e} -\frac{2\dt}{3} b_{jj,ii}^r(e) \partial_{p_q} p_{l^p(e,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.190',
    section: 'derivatives_of_m_i_r_with_respect_to_p_q',
    label: "\u2202M^{r,0d}/\u2202p",
    latex: String.raw`\partial_{p_q}\mathcal{M}_{e,ii}^{r,0d} = -\frac{2\dt}{3} b_{jj,ii}^r(e) \big|_{q=l^p(e,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.191',
    section: 'derivatives_of_m_i_r_with_respect_to_sig',
    label: "\u2202M^{r}/\u2202\u03c3^1",
    latex: String.raw`\begin{aligned}
\partial_{\sigma_q^1}\mathcal{M}_i^r &= \sum_{e=1}^{\bar{n}_{el}} \partial_{\sigma_q^1} \left[ \mathcal{M}_{e,ii}^{r,0a} + \mathcal{M}_{e,ii}^{r,0b} + \mathcal{M}_{e,ii}^{r,0c} + \mathcal{M}_{e,ii}^{r,0d} \right]
&\quad + \sum_{e_1=1}^{\bar{n}_{el}^1} \partial_{\sigma_q^1} \mathcal{M}_{e_1,ii}^{r,1}
- \frac{2\dt}{3} \partial_{\sigma_q^1} \frac{\sigma^1(r_{j1},z_{j1}) \phi_i(r_{j1},z_{j1}) m_r^{1,n}(r_{j1},z_{j1})}{\ca}
&\quad + \frac{2\dt}{3} \partial_{\sigma_q^1} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_r^{1}(r_a,z_a)}{\ca}
+ \sum_{e_2=1}^{\bar{n}_{el}^2} \partial_{\sigma_q^1} \mathcal{M}_{e_2,ii}^{r,2}
&\quad + \sum_{e_3=1}^{\bar{n}_{el}^3} \partial_{\sigma_q^1} \mathcal{M}_{e_3,ii}^{r,3}
+ \sum_{e_4=1}^{\bar{n}_{el}^4} \partial_{\sigma_q^1} \mathcal{M}_{e_4,ii}^{r,4}.
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.192',
    section: 'derivatives_of_m_i_r_with_respect_to_sig',
    label: "\u2202M^{r}/\u2202\u03c3^1",
    latex: String.raw`\begin{aligned}
\partial_{\sigma_q^1}\mathcal{M}_i^r &= \sum_{e_1=1}^{\bar{n}_{el}^1} \partial_{\sigma_q^1} \mathcal{M}_{e_1,ii}^{r,1}
- \frac{2\dt}{3} \partial_{\sigma_q^1} \frac{\sigma^1(r_{j1},z_{j1}) \phi_i(r_{j1},z_{j1}) m_r^{1,n}(r_{j1},z_{j1})}{\ca}
&\quad + \frac{2\dt}{3} \partial_{\sigma_q^1} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_r^{1}(r_a,z_a)}{\ca},
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.193',
    section: 'derivatives_of_m_i_r_with_respect_to_sig',
    label: "\u2202M^{r}/\u2202\u03c3^1",
    latex: String.raw`\partial_{\sigma_q^1}\mathcal{M}_i^r = \sum_{e_1=1}^{\bar{n}_{el}^1} \partial_{\sigma_q^1} \mathcal{M}_{e_1,ii}^{r,1}
- \frac{2\dt}{3} \frac{m_r^{1,n}(r_{j1},z_{j1})}{\ca} \delta_{i,j} \delta_{q,j}
+ \frac{2\dt}{3} \frac{m_r^{1}(r_a,z_a)}{\ca} \delta_{i,a} \delta_{q,a}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.194',
    section: 'derivatives_of_m_i_r_with_respect_to_sig',
    label: "\u2202M^{r,1}/\u2202\u03c3^1",
    latex: String.raw`\partial_{\sigma_q^1}\mathcal{M}_{e_1,ii}^{r,1} = \frac{2\dt}{3\ca} \sum_{jj=1}^{n_v^{1,e_1}} c_{jj,ii,t_r}^s(e_1) \partial_{\sigma_q^1} \sigma_{l_1(e_1,jj)}^1
- \frac{2\dt}{3} \sum_{jj=1}^{n_v^{1,e_1}} c_{ii,jj,n_r}(e_1) \partial_{\sigma_q^1} p_{l_1(e_1,jj)}^1`,
    description: "",
    references: ["4.144"],
    transform: "From (4.144)",
    hidden: false,
  },
  {
    id: '4.195',
    section: 'derivatives_of_m_i_r_with_respect_to_sig',
    label: "\u2202M^{r,1}/\u2202\u03c3^1",
    latex: String.raw`\partial_{\sigma_q^1}\mathcal{M}_{e_1,ii}^{r,1} = \frac{2\dt}{3\ca} c_{jj,ii,t_r}^s(e_1) \big|_{q=l_1(e_1,jj)}`,
    description: "",
    references: ["4.144"],
    transform: "From (4.144)",
    hidden: false,
  },
  {
    id: '4.196',
    section: 'derivatives_of_m_i_r_with_respect_to_var',
    label: "\u2202M^{r}/\u2202\u03b5^2",
    latex: String.raw`\begin{aligned}
\partial_{\varepsilon_q^2}\mathcal{M}_i^r &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\varepsilon_q^2} \left( \mathcal{M}_{e,ii}^{r,0a} + \mathcal{M}_{e,ii}^{r,0b} + \mathcal{M}_{e,ii}^{r,0c} + \mathcal{M}_{e,ii}^{r,0d} \right)
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{\varepsilon_q^2} \mathcal{M}_{e_1,ii}^{r,1}
- \frac{2\dt}{3} \partial_{\varepsilon_q^2} \frac{\varepsilon^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_r^{1,n}(r_{J1},z_{J1})}{\ca}
&\quad + \frac{2\dt}{3} \partial_{\varepsilon_q^2} \frac{\varepsilon^1(r_a,z_a) \phi_i(r_a,z_a) m_r^{1}(r_a,z_a)}{\ca}
+ \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{\varepsilon_q^2} \mathcal{M}_{e_2,ii}^{r,2}
&\quad + \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \partial_{\varepsilon_q^2} \mathcal{M}_{e_3,ii}^{r,3}
+ \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \partial_{\varepsilon_q^2} \mathcal{M}_{e_4,ii}^{r,4}.
\end{aligned}`,
    description: "",
    references: ["4.144"],
    transform: "From (4.144)",
    hidden: false,
  },
  {
    id: '4.197',
    section: 'derivatives_of_m_i_r_with_respect_to_var',
    label: "\u2202M^{r}/\u2202\u03b5^2",
    latex: String.raw`\partial_{\varepsilon_q^2}\mathcal{M}_i^r = \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{\varepsilon_q^2} \mathcal{M}_{e_2,ii}^{r,2}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.198',
    section: 'derivatives_of_m_i_r_with_respect_to_var',
    label: "\u2202M^{r,2}/\u2202\u03b5^2",
    latex: String.raw`\begin{aligned}
\partial_{\varepsilon_q^2}\mathcal{M}_{e_2,ii}^{r,2} &= \frac{2\dt Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_r}(e_2) \partial_{\varepsilon_q^2} u_{l_2(e_2,jj)}
+ \frac{2\dt Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_z}(e_2) \partial_{\varepsilon_q^2} w_{l_2(e_2,jj)}
&\quad - \frac{2\dt Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_r}(e_2) \partial_{\varepsilon_q^2} u_{l_2^2(e_2,jj)}^s
- \frac{2\dt Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_z}(e_2) \partial_{\varepsilon_q^2} w_{l_2^2(e_2,jj)}^s
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,n_r}(e_2) \partial_{\varepsilon_q^2} \varpi_{l_2^2(e_2,jj)}^2
- \frac{\dt}{3\ca} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r}^s(e_2) \partial_{\varepsilon_q^2} \varepsilon_{l_2^2(e_2,jj)}^2,
\end{aligned}`,
    description: "",
    references: ["4.145"],
    transform: "From (4.145)",
    hidden: false,
  },
  {
    id: '4.199',
    section: 'derivatives_of_m_i_r_with_respect_to_var',
    label: "\u2202M^{r,2}/\u2202\u03b5^2",
    latex: String.raw`\partial_{\varepsilon_q^2}\mathcal{M}_{e_2,ii}^{r,2} = -\frac{\dt}{3\ca} d_{ii,jj,t_r}^s(e_2) \big|_{q=l_2^2(e_2,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.200',
    section: 'derivatives_of_m_i_r_with_respect_to_var',
    label: "\u2202M^{r}/\u2202\u03c9^2",
    latex: String.raw`\begin{aligned}
\partial_{\varpi_q^2}\mathcal{M}_i^r &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\varpi_q^2} \left( \mathcal{M}_{e,ii}^{r,0a} + \mathcal{M}_{e,ii}^{r,0b} + \mathcal{M}_{e,ii}^{r,0c} + \mathcal{M}_{e,ii}^{r,0d} \right)
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{\varpi_q^2} \mathcal{M}_{e_1,ii}^{r,1}
- \frac{2\dt}{3} \partial_{\varpi_q^2} \frac{\varepsilon^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_r^{1,n}(r_{J1},z_{J1})}{\ca}
&\quad + \frac{2\dt}{3} \partial_{\varpi_q^2} \frac{\varepsilon^1(r_a,z_a) \phi_i(r_a,z_a) m_r^{1}(r_a,z_a)}{\ca}
+ \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{\varpi_q^2} \mathcal{M}_{e_2,ii}^{r,2}
&\quad + \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \partial_{\varpi_q^2} \mathcal{M}_{e_3,ii}^{r,3}
+ \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \partial_{\varpi_q^2} \mathcal{M}_{e_4,ii}^{r,4}.
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.201',
    section: 'derivatives_of_m_i_r_with_respect_to_var',
    label: "\u2202M^{r}/\u2202\u03c9^2",
    latex: String.raw`\partial_{\varpi_q^2}\mathcal{M}_i^r = \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{\varpi_q^2} \mathcal{M}_{e_2,ii}^{r,2}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.202',
    section: 'derivatives_of_m_i_r_with_respect_to_var',
    label: "\u2202M^{r,2}/\u2202\u03c9^2",
    latex: String.raw`\begin{aligned}
\partial_{\varpi_q^2}\mathcal{M}_{e_2,ii}^{r,2} &= \frac{2\dt Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_r}(e_2) \partial_{\varpi_q^2} u_{l_2(e_2,jj)}
+ \frac{2\dt Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_z}(e_2) \partial_{\varpi_q^2} w_{l_2(e_2,jj)}
&\quad - \frac{2\dt Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_r}(e_2) \partial_{\varpi_q^2} u_{l_2^2(e_2,jj)}^s
- \frac{2\dt Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_z}(e_2) \partial_{\varpi_q^2} w_{l_2^2(e_2,jj)}^s
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,n_r}(e_2) \partial_{\varpi_q^2} \varpi_{l_2^2(e_2,jj)}^2
- \frac{\dt}{3\ca} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r}^s(e_2) \partial_{\varpi_q^2} \varepsilon_{l_2^2(e_2,jj)}^2,
\end{aligned}`,
    description: "",
    references: ["4.145"],
    transform: "From (4.145)",
    hidden: false,
  },
  {
    id: '4.203',
    section: 'derivatives_of_m_i_r_with_respect_to_var',
    label: "\u2202M^{r,2}/\u2202\u03c9^2",
    latex: String.raw`\partial_{\varpi_q^2}\mathcal{M}_{e_2,ii}^{r,2} = \frac{2\dt}{3} d_{ii,jj,n_r}(e_2) \big|_{q=l_2^2(e_2,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.204',
    section: 'derivatives_of_m_i_r_with_respect_to_lam',
    label: "\u2202M^{r}/\u2202\u03bb^3",
    latex: String.raw`\begin{aligned}
\partial_{\lambda_q^3}\mathcal{M}_i^r &= \sum_{e=1}^{\bar{n}_{el}} \partial_{\lambda_q^3} \left[ \mathcal{M}_{e,ii}^{r,0a} + \mathcal{M}_{e,ii}^{r,0b} + \mathcal{M}_{e,ii}^{r,0c} + \mathcal{M}_{e,ii}^{r,0d} \right]
&\quad + \sum_{e_1=1}^{\bar{n}_{el}^1} \partial_{\lambda_q^3} \mathcal{M}_{e_1,ii}^{r,1}
- \frac{2\dt}{3} \partial_{\lambda_q^3} \frac{\sigma^1(r_j,z_j) \phi_i(r_j,z_j) m_r^{1,n}(r_j,z_j)}{\ca}
&\quad + \frac{2\dt}{3} \partial_{\lambda_q^3} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_r^{1}(r_a,z_a)}{\ca}
+ \sum_{e_2=1}^{\bar{n}_{el}^2} \partial_{\lambda_q^3} \mathcal{M}_{e_2,ii}^{r,2}
&\quad + \sum_{e_3=1}^{\bar{n}_{el}^3} \partial_{\lambda_q^3} \mathcal{M}_{e_3,ii}^{r,3}
+ \sum_{e_4=1}^{\bar{n}_{el}^4} \partial_{\lambda_q^3} \mathcal{M}_{e_4,ii}^{r,4}.
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.205',
    section: 'derivatives_of_m_i_r_with_respect_to_lam',
    label: "\u2202M^{r}/\u2202\u03bb^3",
    latex: String.raw`\partial_{\lambda_q^3}\mathcal{M}_i^r = \sum_{e_3=1}^{\bar{n}_{el}^3} \partial_{\lambda_q^3} \mathcal{M}_{e_3,ii}^{r,3}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.206',
    section: 'derivatives_of_m_i_r_with_respect_to_lam',
    label: "\u2202M^{r,3}/\u2202\u03bb^3",
    latex: String.raw`\partial_{\lambda_q^3}\mathcal{M}_{e_3,ii}^{r,3} = \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} f_{ii,jj,n_r}(e_3) \partial_{\lambda_q^3} \lambda_{l_3(e_3,jj)}^3
+ \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} f_{ii,jj,t_r}(e_3) \partial_{\lambda_q^3} \gamma_{l_3(e_3,jj)}^3`,
    description: "",
    references: ["4.146"],
    transform: "From (4.146)",
    hidden: false,
  },
  {
    id: '4.207',
    section: 'derivatives_of_m_i_r_with_respect_to_lam',
    label: "\u2202M^{r,3}/\u2202\u03bb^3",
    latex: String.raw`\partial_{\lambda_q^3}\mathcal{M}_{e_3,ii}^{r,3} = \frac{2\dt}{3} f_{ii,jj,n_r}(e_3) \big|_{q=l_3(e_3,jj)}`,
    description: "",
    references: ["4.146"],
    transform: "From (4.146)",
    hidden: false,
  },
  {
    id: '4.208',
    section: 'derivatives_of_m_i_r_with_respect_to_gam',
    label: "\u2202M^{r}/\u2202\u03b3^3",
    latex: String.raw`\begin{aligned}
\partial_{\gamma_q^3}\mathcal{M}_i^r &= \sum_{e=1}^{\bar{n}_{el}} \partial_{\gamma_q^3} \left[ \mathcal{M}_{e,ii}^{r,0a} + \mathcal{M}_{e,ii}^{r,0b} + \mathcal{M}_{e,ii}^{r,0c} + \mathcal{M}_{e,ii}^{r,0d} \right]
&\quad + \sum_{e_1=1}^{\bar{n}_{el}^1} \partial_{\gamma_q^3} \mathcal{M}_{e_1,ii}^{r,1}
- \frac{2\dt}{3} \partial_{\gamma_q^3} \frac{\sigma^1(r_{j1},z_{j1}) \phi_i(r_{j1},z_{j1}) m_r^{1,n}(r_{j1},z_{j1})}{\ca}
&\quad + \frac{2\dt}{3} \partial_{\gamma_q^3} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_r^{1}(r_a,z_a)}{\ca}
+ \sum_{e_2=1}^{\bar{n}_{el}^2} \partial_{\gamma_q^3} \mathcal{M}_{e_2,ii}^{r,2}
&\quad + \sum_{e_3=1}^{\bar{n}_{el}^3} \partial_{\gamma_q^3} \mathcal{M}_{e_3,ii}^{r,3}
+ \sum_{e_4=1}^{\bar{n}_{el}^4} \partial_{\gamma_q^3} \mathcal{M}_{e_4,ii}^{r,4}.
\end{aligned}`,
    description: "",
    references: ["4.146"],
    transform: "From (4.146)",
    hidden: false,
  },
  {
    id: '4.209',
    section: 'derivatives_of_m_i_r_with_respect_to_gam',
    label: "\u2202M^{r}/\u2202\u03b3^3",
    latex: String.raw`\partial_{\gamma_q^3}\mathcal{M}_i^r = \sum_{e_3=1}^{\bar{n}_{el}^3} \partial_{\gamma_q^3} \mathcal{M}_{e_3,ii}^{r,3}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.210',
    section: 'derivatives_of_m_i_r_with_respect_to_gam',
    label: "\u2202M^{r,3}/\u2202\u03b3^3",
    latex: String.raw`\partial_{\gamma_q^3}\mathcal{M}_{e_3,ii}^{r,3} = \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} f_{ii,jj,n_r}(e_3) \partial_{\gamma_q^3} \lambda_{l_3(e_3,jj)}^3
+ \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} f_{ii,jj,t_r}(e_3) \partial_{\gamma_q^3} \gamma_{l_3(e_3,jj)}^3`,
    description: "",
    references: ["4.146"],
    transform: "From (4.146)",
    hidden: false,
  },
  {
    id: '4.211',
    section: 'derivatives_of_m_i_r_with_respect_to_gam',
    label: "\u2202M^{r,3}/\u2202\u03b3^3",
    latex: String.raw`\partial_{\gamma_q^3}\mathcal{M}_{e_3,ii}^{r,3} = \frac{2\dt}{3} f_{ii,jj,t_r}(e_3) \big|_{q=l_3(e_3,jj)}`,
    description: "",
    references: ["4.146"],
    transform: "From (4.146)",
    hidden: false,
  },
  {
    id: '4.212',
    section: 'derivatives_of_m_i_r_with_respect_to_lam',
    label: "\u2202M^{r}/\u2202\u03bb^4",
    latex: String.raw`\begin{aligned}
\partial_{\lambda_q^4}\mathcal{M}_i^r &= \sum_{e=1}^{\bar{n}_{el}} \partial_{\lambda_q^4} \left[ \mathcal{M}_{e,ii}^{r,0a} + \mathcal{M}_{e,ii}^{r,0b} + \mathcal{M}_{e,ii}^{r,0c} + \mathcal{M}_{e,ii}^{r,0d} \right]
&\quad + \sum_{e_1=1}^{\bar{n}_{el}^1} \partial_{\lambda_q^4} \mathcal{M}_{e_1,ii}^{r,1}
- \frac{2\dt}{3} \partial_{\lambda_q^4} \frac{\sigma^1(r_j,z_j) \phi_i(r_j,z_j) m_r^{1,n}(r_j,z_j)}{\ca}
&\quad + \frac{2\dt}{3} \partial_{\lambda_q^4} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_r^{1}(r_a,z_a)}{\ca}
+ \sum_{e_2=1}^{\bar{n}_{el}^2} \partial_{\lambda_q^4} \mathcal{M}_{e_2,ii}^{r,2}
&\quad + \sum_{e_3=1}^{\bar{n}_{el}^3} \partial_{\lambda_q^4} \mathcal{M}_{e_3,ii}^{r,3}
+ \sum_{e_4=1}^{\bar{n}_{el}^4} \partial_{\lambda_q^4} \mathcal{M}_{e_4,ii}^{r,4}.
\end{aligned}`,
    description: "",
    references: ["4.146"],
    transform: "From (4.146)",
    hidden: false,
  },
  {
    id: '4.213',
    section: 'derivatives_of_m_i_r_with_respect_to_lam',
    label: "\u2202M^{r}/\u2202\u03bb^4",
    latex: String.raw`\partial_{\lambda_q^4}\mathcal{M}_i^r = \sum_{e_4=1}^{\bar{n}_{el}^4} \partial_{\lambda_q^4} \mathcal{M}_{e_4,ii}^{r,4}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.214',
    section: 'derivatives_of_m_i_r_with_respect_to_lam',
    label: "\u2202M^{r,4}/\u2202\u03bb^4",
    latex: String.raw`\partial_{\lambda_q^4}\mathcal{M}_{e_4,ii}^{r,4} = \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} e_{ii,jj,n_r}(e_4) \partial_{\lambda_q^4} \lambda_{l_4(e_4,jj)}^4
+ \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} e_{ii,jj,t_r}(e_4) \partial_{\lambda_q^4} \gamma_{l_4(e_4,jj)}^4`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.215',
    section: 'derivatives_of_m_i_r_with_respect_to_lam',
    label: "\u2202M^{r,4}/\u2202\u03bb^4",
    latex: String.raw`\partial_{\lambda_q^4}\mathcal{M}_{e_4,ii}^{r,4} = \frac{2\dt}{3} e_{ii,jj,n_r}(e_4) \big|_{q=l_4(e_4,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.216',
    section: 'derivatives_of_m_i_r_with_respect_to_gam',
    label: "\u2202M^{r}/\u2202\u03b3^4",
    latex: String.raw`\begin{aligned}
\partial_{\gamma_q^4}\mathcal{M}_i^r &= \sum_{e=1}^{\bar{n}_{el}} \partial_{\gamma_q^4} \left[ \mathcal{M}_{e,ii}^{r,0a} + \mathcal{M}_{e,ii}^{r,0b} + \mathcal{M}_{e,ii}^{r,0c} + \mathcal{M}_{e,ii}^{r,0d} \right]
&\quad + \sum_{e_1=1}^{\bar{n}_{el}^1} \partial_{\gamma_q^4} \mathcal{M}_{e_1,ii}^{r,1}
- \frac{2\dt}{3} \partial_{\gamma_q^4} \frac{\sigma^1(r_{j1},z_{j1}) \phi_i(r_{j1},z_{j1}) m_r^{1,n}(r_{j1},z_{j1})}{\ca}
&\quad + \frac{2\dt}{3} \partial_{\gamma_q^4} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_r^{1}(r_a,z_a)}{\ca}
+ \sum_{e_2=1}^{\bar{n}_{el}^2} \partial_{\gamma_q^4} \mathcal{M}_{e_2,ii}^{r,2}
&\quad + \sum_{e_3=1}^{\bar{n}_{el}^3} \partial_{\gamma_q^4} \mathcal{M}_{e_3,ii}^{r,3}
+ \sum_{e_4=1}^{\bar{n}_{el}^4} \partial_{\gamma_q^4} \mathcal{M}_{e_4,ii}^{r,4}.
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.217',
    section: 'derivatives_of_m_i_r_with_respect_to_gam',
    label: "\u2202M^{r}/\u2202\u03b3^4",
    latex: String.raw`\partial_{\gamma_q^4}\mathcal{M}_i^r = \sum_{e_4=1}^{\bar{n}_{el}^4} \partial_{\gamma_q^4} \mathcal{M}_{e_4,ii}^{r,4}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.218',
    section: 'derivatives_of_m_i_r_with_respect_to_gam',
    label: "\u2202M^{r,4}/\u2202\u03b3^4",
    latex: String.raw`\partial_{\gamma_q^4}\mathcal{M}_{e_4,ii}^{r,4} = \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} e_{ii,jj,n_r}(e_4) \partial_{\gamma_q^4} \lambda_{l_4(e_4,jj)}^4
+ \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} e_{ii,jj,t_r}(e_4) \partial_{\gamma_q^4} \gamma_{l_4(e_4,jj)}^4`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.219',
    section: 'derivatives_of_m_i_r_with_respect_to_gam',
    label: "\u2202M^{r,4}/\u2202\u03b3^4",
    latex: String.raw`\partial_{\gamma_q^4}\mathcal{M}_{e_4,ii}^{r,4} = \frac{2\dt}{3} e_{ii,jj,t_r}(e_4) \big|_{q=l_4(e_4,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.220',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_i^r &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{h_q} \left( \mathcal{M}_{e,ii}^{r,0a} + \mathcal{M}_{e,ii}^{r,0b} + \mathcal{M}_{e,ii}^{r,0c} + \mathcal{M}_{e,ii}^{r,0d} \right)
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{h_q} \mathcal{M}_{e_1,ii}^{r,1}
- \frac{2\dt}{3} \partial_{h_q} \frac{\varepsilon^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_r^{1,n}(r_{J1},z_{J1})}{\ca}
&\quad + \frac{2\dt}{3} \partial_{h_q} \frac{\varepsilon^1(r_a,z_a) \phi_i(r_a,z_a) m_r^{1}(r_a,z_a)}{\ca}
+ \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{h_q} \mathcal{M}_{e_2,ii}^{r,2}
&\quad + \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \partial_{h_q} \mathcal{M}_{e_3,ii}^{r,3}
+ \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \partial_{h_q} \mathcal{M}_{e_4,ii}^{r,4}.
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.221',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_i^r &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{h_q} \mathcal{M}_{e,ii}^{r,0a}
+ \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{h_q} \mathcal{M}_{e,ii}^{r,0b}
+ \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{h_q} \mathcal{M}_{e,ii}^{r,0c}
+ \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{h_q} \mathcal{M}_{e,ii}^{r,0d}
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{h_q} \mathcal{M}_{e_1,ii}^{r,1}
- \frac{2\dt}{3} \frac{\varepsilon^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1})}{\ca} \partial_{h_q} m_r^{1,n}(r_{J1},z_{J1})
&\quad + \frac{2\dt}{3} \frac{\varepsilon^1(r_a,z_a) \phi_i(r_a,z_a)}{\ca} \partial_{h_q} m_r^{1}(r_a,z_a)
+ \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{h_q} \mathcal{M}_{e_2,ii}^{r,2}
&\quad + \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \partial_{h_q} \mathcal{M}_{e_3,ii}^{r,3}
+ \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \partial_{h_q} \mathcal{M}_{e_4,ii}^{r,4}.
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.222',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,0a}/\u2202h",
    latex: String.raw`\partial_{h_q}\mathcal{M}_{e,ii}^{r,0a} = -\frac{2\dt St}{3} \partial_{h_q} a_{ii,g_r}(e)`,
    description: "",
    references: ["4.140"],
    transform: "From (4.140)",
    hidden: false,
  },
  {
    id: '4.224',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,0b}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e,ii}^{r,0b} &= \frac{2\dt}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \partial_{h_q} a_{ii,jj}^{r,r}(e)
+ \frac{2\dt}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \partial_{h_q} a_{ii,jj}^{z,z}(e)
&\quad + Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \partial_{h_q} a_{ii,jj}(e)
- \frac{4Re}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)}(t_{n-1}) \partial_{h_q} a_{ii,jj}(e)
&\quad + \frac{Re}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)}(t_{n-2}) \partial_{h_q} a_{ii,jj}(e),
\end{aligned}`,
    description: "",
    references: ["4.140", "4.141"],
    transform: "From (4.140), (4.141)",
    hidden: false,
  },
  {
    id: '4.225',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,0b}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e,ii}^{r,0b} &= \sum_{jj=1}^{n_v^e} \frac{2\dt}{3} u_{l(e,jj)} \left( \partial_{h_q} a_{ii,jj}^{r,r}(e) + \partial_{h_q} a_{ii,jj}^{z,z}(e) \right)
&\quad + Re \sum_{jj=1}^{n_v^e} \partial_{h_q} a_{ii,jj}(e) \left[ u_{l(e,jj)} - \frac{4}{3} u_{l(e,jj)}(t_{n-1}) + \frac{1}{3} u_{l(e,jj)}(t_{n-2}) \right],
\end{aligned}`,
    description: "",
    references: ["4.141"],
    transform: "From (4.141)",
    hidden: false,
  },
  {
    id: '4.226',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,0b}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e,ii}^{r,0b} &= \sum_{jj=1}^{n_v^e} \frac{2\dt}{3} u_{l(e,jj)} \left( \partial_{h_{S(e,qq)}} a_{ii,jj}^{r,r}(e) + \partial_{h_{S(e,qq)}} a_{ii,jj}^{z,z}(e) \right)
&\quad + Re \sum_{jj=1}^{n_v^e} \partial_{h_{S(e,qq)}} a_{ii,jj}(e) \left[ u_{l(e,jj)} - \frac{4}{3} u_{l(e,jj)}(t_{n-1}) + \frac{1}{3} u_{l(e,jj)}(t_{n-2}) \right].
\end{aligned}`,
    description: "And using local spine numbers we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.227',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,0c}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e,ii}^{r,0c} &= \frac{2\dt Re}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} u_{l(e,kk)} \partial_{h_q} a_{ii,kk,jj}^r(e)
&\quad + \frac{2\dt Re}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} w_{l(e,kk)} \partial_{h_q} a_{ii,kk,jj}^r(e)
&\quad - Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} a_{ii,kk,jj}^r(e) \partial_{h_q} r_{l(e,kk)}^r
&\quad - Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^r \partial_{h_q} a_{ii,kk,jj}^r(e)
&\quad + \frac{4Re}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^r(t_{n-1}) \partial_{h_q} a_{ii,kk,jj}^r(e)
&\quad - \frac{Re}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^r(t_{n-2}) \partial_{h_q} a_{ii,kk,jj}^r(e)
&\quad - Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} a_{ii,kk,jj}^r(e) \partial_{h_q} z_{l(e,kk)}^r
&\quad - Re \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^r \partial_{h_q} a_{ii,kk,jj}^r(e)
&\quad + \frac{4Re}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^r(t_{n-1}) \partial_{h_q} a_{ii,kk,jj}^r(e)
&\quad - \frac{Re}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^r(t_{n-2}) \partial_{h_q} a_{ii,kk,jj}^r(e),
\end{aligned}`,
    description: "And using local spine numbers we have From equation (4.142) we have",
    references: ["4.142"],
    transform: "From (4.142)",
    hidden: false,
  },
  {
    id: '4.228',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,0c}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e,ii}^{r,0c} = \sum_{jj=1}^{n_v^e} Re\, u_{l(e,jj)} \Bigg\{ &\frac{2\dt}{3} \sum_{kk=1}^{n_v^e} \left( u_{l(e,kk)} \partial_{h_q} a_{ii,kk,jj}^r(e) + w_{l(e,kk)} \partial_{h_q} a_{ii,kk,jj}^r(e) \right)
&- \sum_{kk=1}^{n_v^e} \left[ a_{ii,kk,jj}^r(e) \partial_{h_q} r_{l(e,kk)}^r + \partial_{h_q} a_{ii,kk,jj}^r(e) \left( r_{l(e,kk)}^r - \frac{4}{3} r_{l(e,kk)}^r(t_{n-1}) + \frac{1}{3} r_{l(e,kk)}^r(t_{n-2}) \right) \right]
&- \sum_{kk=1}^{n_v^e} \left[ a_{ii,kk,jj}^r(e) \partial_{h_q} z_{l(e,kk)}^r + \partial_{h_q} a_{ii,kk,jj}^r(e) \left( z_{l(e,kk)}^r - \frac{4}{3} z_{l(e,kk)}^r(t_{n-1}) + \frac{1}{3} z_{l(e,kk)}^r(t_{n-2}) \right) \right] \Bigg\},
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.229',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,0c}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e,ii}^{r,0c} &= \sum_{\substack{jj=1\\ q=S(e,qq)}}^{n_v^e} Re\, u_{l(e,jj)} \Bigg\{ \frac{2\dt}{3} \sum_{kk=1}^{n_v^e} \left( u_{l(e,kk)} \partial_{h_{S(e,qq)}} a_{ii,kk,jj}^r(e) + w_{l(e,kk)} \partial_{h_{S(e,qq)}} a_{ii,kk,jj}^r(e) \right)
&\quad - \sum_{kk=1}^{n_v^e} \left[ a_{ii,kk,jj}^r(e) \partial_{h_{S(e,qq)}} r_{l(e,kk)}^r + \partial_{h_{S(e,qq)}} a_{ii,kk,jj}^r(e) \left( r_{l(e,kk)}^r - \frac{4}{3} r_{l(e,kk)}^r(t_{n-1}) + \frac{1}{3} r_{l(e,kk)}^r(t_{n-2}) \right) \right]
&\quad - \sum_{kk=1}^{n_v^e} \left[ a_{ii,kk,jj}^r(e) \partial_{h_{S(e,qq)}} z_{l(e,kk)}^r + \partial_{h_{S(e,qq)}} a_{ii,kk,jj}^r(e) \left( z_{l(e,kk)}^r - \frac{4}{3} z_{l(e,kk)}^r(t_{n-1}) + \frac{1}{3} z_{l(e,kk)}^r(t_{n-2}) \right) \right] \Bigg\}.
\end{aligned}`,
    description: "And using local spines numbers we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.230',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,0d}/\u2202h",
    latex: String.raw`\partial_{h_q}\mathcal{M}_{e,ii}^{r,0d} = \sum_{jj=1}^{n_p^e} -\frac{2\dt}{3} p_{l^p(e,jj)} \partial_{h_q} b_{jj,ii}^r(e)`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.231',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,0d}/\u2202h",
    latex: String.raw`\partial_{h_q}\mathcal{M}_{e,ii}^{r,0d} = \sum_{\substack{jj=1\\ q=S(e,qq)}}^{n_p^e} -\frac{2\dt}{3} p_{l^p(e,jj)} \partial_{h_{S(e,qq)}} b_{jj,ii}^r(e)`,
    description: "From equation (4.152), we have and using local spine numbers",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.232',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,1}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_1,ii}^{r,1} &= \frac{2\dt}{3\ca} \sum_{jj=1}^{n_v^{1,e_1}} \varepsilon_{l_1(e_1,jj)}^1 \partial_{h_q} c_{jj,ii,t_r}(e_1)
- \frac{2\dt}{3} \sum_{jj=1}^{n_v^{1,e_1}} p_{l_1(e_1,jj)}^g \partial_{h_q} c_{ii,jj,n_r}(e_1)
&\quad - \frac{2\dt}{3} \sum_{j=1}^{n_v} u_j \partial_{h_q} c_{ii,jj,n_r}^r
- \frac{2\dt}{3} \sum_{j=1}^{n_v} w_j \partial_{h_q} c_{ii,jj,n_z}^r,
\end{aligned}`,
    description: "",
    references: ["4.144"],
    transform: "From (4.144)",
    hidden: false,
  },
  {
    id: '4.233',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,1}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_1,ii}^{r,1} &= \sum_{jj=1}^{n_v^{1,e_1}} \frac{2\dt}{3} \left( \frac{1}{\ca} \varepsilon_{l_1(e_1,jj)}^1 \partial_{h_q} c_{jj,ii,t_r}(e_1) - p_{l_1(e_1,jj)}^g \partial_{h_q} c_{ii,jj,n_r}(e_1) \right)
&\quad - \frac{2\dt}{3} \sum_{j=1}^{n_v} u_j \partial_{h_q} c_{ii,jj,n_r}^r
- \frac{2\dt}{3} \sum_{j=1}^{n_v} w_j \partial_{h_q} c_{ii,jj,n_z}^r,
\end{aligned}`,
    description: "",
    references: ["4.144"],
    transform: "From (4.144)",
    hidden: false,
  },
  {
    id: '4.234',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,1}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_1,ii}^{r,1} &= \sum_{\substack{jj=1\\ q=S_1(e_1,qq)}}^{n_v^{1,e_1}} \frac{2\dt}{3} \left( \frac{1}{\ca} \varepsilon_{l_1(e_1,jj)}^1 \partial_{h_{S_1(e_1,qq)}} c_{jj,ii,t_r}(e_1) - p_{l_1(e_1,jj)}^g \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,n_r}(e_1) \right)
&\quad - \frac{2\dt}{3} \sum_{j=1}^{n_v} u_j \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,n_r}^r
- \frac{2\dt}{3} \sum_{j=1}^{n_v} w_j \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,n_z}^r.
\end{aligned}`,
    description: "And using local spine numbers",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.235',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,2}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_2,ii}^{r,2} &= \frac{2\dt Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2(e_2,jj)} \partial_{h_q} d_{ii,jj,t_r,t_r}(e_2)
+ \frac{2\dt Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2(e_2,jj)} \partial_{h_q} d_{ii,jj,t_r,t_z}(e_2)
&\quad - \frac{2\dt Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2^2(e_2,jj)}^s \partial_{h_q} d_{ii,jj,t_r,t_r}(e_2)
- \frac{2\dt Be}{3} \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2^2(e_2,jj)}^s \partial_{h_q} d_{ii,jj,t_r,t_z}(e_2)
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{2,e_2}} \varpi_{l_2^2(e_2,jj)}^2 \partial_{h_q} d_{ii,jj,n_r}(e_2)
- \frac{\dt}{3\ca} \sum_{jj=1}^{n_v^{2,e_2}} \varepsilon_{l_2^2(e_2,jj)}^2 \partial_{h_q} d_{ii,jj,t_r}^s(e_2)
&\quad - \frac{2\dt}{3} \sum_{j=1}^{n_v} u_j \partial_{h_q} d_{ii,jj,n_r}^r
- \frac{2\dt}{3} \sum_{j=1}^{n_v} w_j \partial_{h_q} d_{ii,jj,n_z}^r,
\end{aligned}`,
    description: "And using local spine numbers From equation (4.145) we have",
    references: ["4.145"],
    transform: "From (4.145)",
    hidden: false,
  },
  {
    id: '4.236',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,2}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_2,ii}^{r,2} &= \sum_{jj=1}^{n_v^{2,e_2}} \frac{2\dt}{3} \Bigg[ Be \left( \partial_{h_q} d_{ii,jj,t_r,t_r}(e_2) \{ u_{l_2(e_2,jj)} - u_{l_2^2(e_2,jj)}^s \}
+ \partial_{h_q} d_{ii,jj,t_r,t_z}(e_2) \{ w_{l_2(e_2,jj)} - w_{l_2^2(e_2,jj)}^s \} \right)
&\quad + \varpi_{l_2^2(e_2,jj)}^2 \partial_{h_q} d_{ii,jj,n_r}(e_2)
- \frac{1}{2\ca} \varepsilon_{l_2^2(e_2,jj)}^2 \partial_{h_q} d_{ii,jj,t_r}^s(e_2)
- u_j \partial_{h_q} d_{ii,jj,n_r}^r
- w_j \partial_{h_q} d_{ii,jj,n_z}^r \Bigg],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.237',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,2}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_2,ii}^{r,2} &= \sum_{jj=1}^{n_v^{2,e_2}} \frac{2\dt}{3} \Bigg[ Be \left( \partial_{h_q} d_{ii,jj,t_r,t_r}(e_2) \{ u_{l_2(e_2,jj)} - u_{l_2^2(e_2,jj)}^s \}
+ \partial_{h_q} d_{ii,jj,t_r,t_z}(e_2) \{ w_{l_2(e_2,jj)} - w_{l_2^2(e_2,jj)}^s \} \right)
&\quad + \varpi_{l_2^2(e_2,jj)}^2 \partial_{h_q} d_{ii,jj,n_r}(e_2)
- \frac{1}{2\ca} \varepsilon_{l_2^2(e_2,jj)}^2 \partial_{h_q} d_{ii,jj,t_r}^s(e_2)
- u_j \partial_{h_q} d_{ii,jj,n_r}^r
- w_j \partial_{h_q} d_{ii,jj,n_z}^r \Bigg],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.238',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,2}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_2,ii}^{r,2} &= \sum_{\substack{jj=1\\ q=S_2(e_2,qq)}}^{n_v^{2,e_2}} \frac{2\dt}{3} \Bigg[ Be \left( \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,t_r,t_r}(e_2) \{ u_{l_2(e_2,jj)} - u_{l_2^2(e_2,jj)}^s \}
+ \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,t_r,t_z}(e_2) \{ w_{l_2(e_2,jj)} - w_{l_2^2(e_2,jj)}^s \} \right)
&\quad + \varpi_{l_2^2(e_2,jj)}^2 \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,n_r}(e_2)
- \frac{1}{2\ca} \varepsilon_{l_2^2(e_2,jj)}^2 \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,t_r}^s(e_2)
- u_j \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,n_r}^r
- w_j \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,n_z}^r \Bigg].
\end{aligned}`,
    description: "Ently, and using local spine numbers",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.239',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,3}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_3,ii}^{r,3} &= \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} \lambda_{l_3(e_3,jj)}^3 \partial_{h_q} f_{ii,jj,n_r}(e_3)
+ \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} \gamma_{l_3(e_3,jj)}^3 \partial_{h_q} f_{ii,jj,t_r}(e_3)
&\quad - \frac{2\dt}{3} \sum_{j=1}^{n_v} u_j \partial_{h_q} f_{ii,jj,n_r}^r
- \frac{2\dt}{3} \sum_{j=1}^{n_v} w_j \partial_{h_q} f_{ii,jj,n_z}^r,
\end{aligned}`,
    description: "",
    references: ["4.146"],
    transform: "From (4.146)",
    hidden: false,
  },
  {
    id: '4.240',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,3}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_3,ii}^{r,3} &= \sum_{jj=1}^{n_v^{3,e_3}} \frac{2\dt}{3} \left[ \lambda_{l_3(e_3,jj)}^3 \partial_{h_q} f_{ii,jj,n_r}(e_3) + \gamma_{l_3(e_3,jj)}^3 \partial_{h_q} f_{ii,jj,t_r}(e_3) \right]
&\quad - \frac{2\dt}{3} \sum_{j=1}^{n_v} u_j \partial_{h_q} f_{ii,jj,n_r}^r
- \frac{2\dt}{3} \sum_{j=1}^{n_v} w_j \partial_{h_q} f_{ii,jj,n_z}^r.
\end{aligned}`,
    description: "",
    references: ["4.146"],
    transform: "From (4.146)",
    hidden: false,
  },
  {
    id: '4.241',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,3}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_3,ii}^{r,3} &= \sum_{\substack{jj=1\\ q=S_3(e_3,qq)}}^{n_v^{3,e_3}} \frac{2\dt}{3} \left[ \lambda_{l_3(e_3,jj)}^3 \partial_{h_{S_3(e_3,qq)}} f_{ii,jj,n_r}(e_3) + \gamma_{l_3(e_3,jj)}^3 \partial_{h_{S_3(e_3,qq)}} f_{ii,jj,t_r}(e_3) \right]
&\quad - \frac{2\dt}{3} \sum_{j=1}^{n_v} u_j \partial_{h_{S_3(e_3,qq)}} f_{ii,jj,n_r}^r
- \frac{2\dt}{3} \sum_{j=1}^{n_v} w_j \partial_{h_{S_3(e_3,qq)}} f_{ii,jj,n_z}^r.
\end{aligned}`,
    description: "And using local spine numbers",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.242',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,4}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_4,ii}^{r,4} &= \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} \lambda_{l_4(e_4,jj)}^4 \partial_{h_q} e_{ii,jj,n_r}(e_4)
+ \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} \gamma_{l_4(e_4,jj)}^4 \partial_{h_q} e_{ii,jj,t_r}(e_4)
&\quad - \frac{2\dt}{3} \sum_{j=1}^{n_v} u_j \partial_{h_q} e_{ii,jj,n_r}^r
- \frac{2\dt}{3} \sum_{j=1}^{n_v} w_j \partial_{h_q} e_{ii,jj,n_z}^r,
\end{aligned}`,
    description: "And using local spine numbers Finally, from equation (??), we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.243',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,4}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_4,ii}^{r,4} &= \sum_{jj=1}^{n_v^{4,e_4}} \frac{2\dt}{3} \left[ \lambda_{l_4(e_4,jj)}^4 \partial_{h_q} e_{ii,jj,n_r}(e_4) + \gamma_{l_4(e_4,jj)}^4 \partial_{h_q} e_{ii,jj,t_r}(e_4) \right]
&\quad - \frac{2\dt}{3} \sum_{j=1}^{n_v} u_j \partial_{h_q} e_{ii,jj,n_r}^r
- \frac{2\dt}{3} \sum_{j=1}^{n_v} w_j \partial_{h_q} e_{ii,jj,n_z}^r,
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '4.244',
    section: 'derivatives_of_m_i_r_with_respect_to_h_q',
    label: "\u2202M^{r,4}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_4,ii}^{r,4} &= \sum_{\substack{jj=1\\ q=S_4(e_4,qq)}}^{n_v^{4,e_4}} \frac{2\dt}{3} \left[ \lambda_{l_4(e_4,jj)}^4 \partial_{h_{S_4(e_4,qq)}} e_{ii,jj,n_r}(e_4) + \gamma_{l_4(e_4,jj)}^4 \partial_{h_{S_4(e_4,qq)}} e_{ii,jj,t_r}(e_4) \right]
&\quad - \frac{2\dt}{3} \sum_{j=1}^{n_v} u_j \partial_{h_{S_4(e_4,qq)}} e_{ii,jj,n_r}^r
- \frac{2\dt}{3} \sum_{j=1}^{n_v} w_j \partial_{h_{S_4(e_4,qq)}} e_{ii,jj,n_z}^r.
\end{aligned}`,
    description: "And using local spine numbers",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.1',
    section: 'the_z_momentum_equation',
    label: "z-Momentum Residual",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^z &= Re \int_{\Omega^f} \phi_i \partial_t w + Re \int_{\Omega^f} \phi_i u \partial_r w + Re \int_{\Omega^f} \phi_i w \partial_z w - Re \int_{\Omega^f} \phi_i u^c \partial_r w
&\quad - Re \int_{\Omega^f} \phi_i w^c \partial_z w - St \int_{\Omega^f} \phi_i \hat{g}_z - \int_{\Omega^f} \phi_i e_z \cdot \nabla \cdot \mathbf{P},
\end{aligned}`,
    description: "Using equation (3.2), we define the -th residuals of the -momentum equation as",
    references: ["3.2"],
    transform: "From (3.2)",
    hidden: false,
  },
  {
    id: '5.2',
    section: 'the_z_momentum_equation',
    label: "Tensor Divergence Identity (z)",
    latex: String.raw`\nabla \cdot (\mathbf{x} \cdot \mathbf{A}) = \mathbf{x} \cdot \nabla \cdot \mathbf{A} + \nabla \mathbf{x} : \mathbf{A}`,
    description: "Once again, we recall the tensor identity",
    references: ["3.2"],
    transform: "From (3.2)",
    hidden: false,
  },
  {
    id: '5.3',
    section: 'the_z_momentum_equation',
    label: "Applied to Stress (z)",
    latex: String.raw`-\phi_i \mathbf{e}_z \cdot \nabla \cdot \mathbf{P} = -\nabla \cdot (\phi_i \mathbf{e}_z \cdot \mathbf{P}) + \nabla (\phi_i \mathbf{e}_z) : \mathbf{P}`,
    description: "Once again, we recall the tensor identity taking and , we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.4',
    section: 'the_z_momentum_equation',
    label: "Residual with IBP (z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^z &= Re \int_{\Omega^f} \phi_i \partial_t w + Re \int_{\Omega^f} \phi_i u \partial_r w + Re \int_{\Omega^f} \phi_i w \partial_z w - Re \int_{\Omega^f} \phi_i u^c \partial_r w
&\quad - Re \int_{\Omega^f} \phi_i w^c \partial_z w - St \int_{\Omega^f} \phi_i \hat{g}_z + \int_{\Omega^f} \nabla (\phi_i \mathbf{e}_z) : \mathbf{P} - \int_{\Omega^f} \nabla \cdot (\phi_i \mathbf{e}_z \cdot \mathbf{P}),
\end{aligned}`,
    description: "Once again, we recall the tensor identity taking and , we have which reduces to",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.5',
    section: 'the_z_momentum_equation',
    label: "After Divergence Theorem (z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^z &= Re \int_{\Omega^f} \phi_i \partial_t w + Re \int_{\Omega^f} \phi_i u \partial_r w + Re \int_{\Omega^f} \phi_i w \partial_z w - Re \int_{\Omega^f} \phi_i u^c \partial_r w
&\quad - Re \int_{\Omega^f} \phi_i w^c \partial_z w - St \int_{\Omega^f} \phi_i \hat{g}_z + \int_{\Omega^f} \nabla (\phi_i \mathbf{e}_z) : \mathbf{P} + \int_{\partial \Omega^f} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot \mathbf{n},
\end{aligned}`,
    description: "Which reduces to we can now apply the divergence theorem to the last integral on the right hand side above to obtain",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.6',
    section: 'the_z_momentum_equation',
    label: "Grad-Stress (Matrix, z)",
    latex: String.raw`\nabla (\phi_i \mathbf{e}_z) : \mathbf{P} = \begin{bmatrix} 0 & 0 \\ \partial_r \phi_i & \partial_z \phi_i \end{bmatrix} : \begin{bmatrix} \mathbf{P}_{rr} & \mathbf{P}_{rz} \\ \mathbf{P}_{zr} & \mathbf{P}_{zz} \end{bmatrix}`,
    description: "Where is the boundary of and is the normal to , that points into",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.7',
    section: 'the_z_momentum_equation',
    label: "Grad-Stress (Components, z)",
    latex: String.raw`\nabla (\phi_i \mathbf{e}_z) : \mathbf{P} = \begin{bmatrix} 0 & 0 \\ \partial_r \phi_i & \partial_z \phi_i \end{bmatrix} : \begin{bmatrix} -p + 2\partial_r u & \partial_z u + \partial_r w \\ \partial_r w + \partial_z u & -p + 2\partial_z w \end{bmatrix}`,
    description: "Where is the boundary of and is the normal to , that points into",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.8',
    section: 'the_z_momentum_equation',
    label: "Grad-Stress Simplified (z)",
    latex: String.raw`\nabla (\phi_i \mathbf{e}_z) : \mathbf{P} = \partial_r \phi_i \mathbf{P}_{zr} + \partial_z \phi_i \mathbf{P}_{zz} = \partial_r w \partial_r \phi_i + \partial_z u \partial_r \phi_i - p \partial_z \phi_i + 2 \partial_z w \partial_z \phi_i`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.9',
    section: 'the_z_momentum_equation',
    label: "Full Residual M_i^z",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^z &= Re \int_{\Omega^f} \phi_i \partial_t w + Re \int_{\Omega^f} \phi_i u \partial_r w + Re \int_{\Omega^f} \phi_i w \partial_z w - Re \int_{\Omega^f} \phi_i u^c \partial_r w
&\quad - Re \int_{\Omega^f} \phi_i w^c \partial_z w - St \int_{\Omega^f} \phi_i \hat{g}_z + \int_{\Omega^f} \partial_r w \partial_r \phi_i + \int_{\Omega^f} \partial_z u \partial_r \phi_i
&\quad - \int_{\Omega^f} p \partial_z \phi_i + 2 \int_{\Omega^f} \partial_z w \partial_z \phi_i + \int_{\partial \Omega^f} \phi_i \mathbf{e}_r \cdot \mathbf{P} \cdot \mathbf{n},
\end{aligned}`,
    description: "Which is Therefore we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.10',
    section: 'the_z_momentum_equation',
    label: "Boundary Decomposition (z)",
    latex: String.raw`\begin{aligned}
\int_{\partial \Omega} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot \mathbf{n} &= \int_{\partial \Omega^{1,1}} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot \mathbf{n}^1 + \int_{\partial \Omega^{2,1}} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot \mathbf{n}^2
&\quad + \int_{\partial \Omega^{3}} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot \mathbf{n}^3 + \int_{\partial \Omega^{4}} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot \mathbf{n}^4,
\end{aligned}`,
    description: "We now consider the last integral in the right hand side of the equation above",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.11',
    section: 'the_z_momentum_equation',
    label: "DBC1 Restatement (z)",
    latex: String.raw`\mathbf{P} \cdot \mathbf{n}^1 = -p^g \mathbf{n}^1 - \frac{\nabla^s \cdot [\sigma^1 (\mathbf{I} - \mathbf{n}^1 \mathbf{n}^1)]}{\ca}`,
    description: "For the free surface we have equation (2.10), which states",
    references: ["2.10"],
    transform: "From (2.10)",
    hidden: false,
  },
  {
    id: '5.12',
    section: 'the_z_momentum_equation',
    label: "phi_i e_z dot P dot n^1",
    latex: String.raw`\phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot \mathbf{n}^1 = -\phi_i p^g \mathbf{e}_z \cdot \mathbf{n}^1 - \frac{1}{\ca} \phi_i \mathbf{e}_z \cdot \nabla^s \cdot [\sigma^1 (\mathbf{I} - \mathbf{n}^1 \mathbf{n}^1)]`,
    description: "For the free surface we have equation (2.10), which states and therefore",
    references: ["2.10"],
    transform: "From (2.10)",
    hidden: false,
  },
  {
    id: '5.13',
    section: 'the_z_momentum_equation',
    label: "Surface Div Identity (z)",
    latex: String.raw`\nabla^s \cdot (\mathbf{x} \cdot \mathbf{A}) = \mathbf{A} : \nabla^s \mathbf{x} + \mathbf{x} \cdot \nabla^s \cdot \mathbf{A}`,
    description: "For the free surface we have equation (2.10), which states and therefore Now, we have the following surface vector calculus identity",
    references: ["2.10"],
    transform: "From (2.10)",
    hidden: false,
  },
  {
    id: '5.14',
    section: 'the_z_momentum_equation',
    label: "Identity Applied (z)",
    latex: String.raw`\nabla^s \cdot (\phi_i \mathbf{e}_z \cdot \sigma^1 (\mathbf{I} - \mathbf{n}^1 \mathbf{n}^1)) = \sigma^1 (\mathbf{I} - \mathbf{n}^1 \mathbf{n}^1) : \nabla^s (\phi_i \mathbf{e}_z) + \phi_i \mathbf{e}_z \cdot \nabla^s \cdot \sigma^1 (\mathbf{I} - \mathbf{n}^1 \mathbf{n}^1)`,
    description: "Now, we have the following surface vector calculus identity taking and , we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.15',
    section: 'the_z_momentum_equation',
    label: "Rearranged (z)",
    latex: String.raw`-\phi_i \mathbf{e}_z \cdot \nabla^s \cdot \sigma^1 (\mathbf{I} - \mathbf{n}^1 \mathbf{n}^1) = -\nabla^s \cdot (\phi_i \mathbf{e}_z \cdot \sigma^1 (\mathbf{I} - \mathbf{n}^1 \mathbf{n}^1)) + \sigma^1 (\mathbf{I} - \mathbf{n}^1 \mathbf{n}^1) : \nabla^s (\phi_i \mathbf{e}_z)`,
    description: "Taking and , we have which yields",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.16',
    section: 'the_z_momentum_equation',
    label: "Surface Gradient 1D (z)",
    latex: String.raw`\nabla^s (\phi_i \mathbf{e}_z) = \begin{bmatrix} 0 & \partial_s \phi_i t_z^1 \\ 0 & \partial_s \phi_i t_z^1 \end{bmatrix}`,
    description: "Which yields In this 1D surface case, we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.17',
    section: 'the_z_momentum_equation',
    label: "Projection Computation (z)",
    latex: String.raw`(\mathbf{I} - \mathbf{n}^1 \mathbf{n}^1) : \nabla^s (\phi_i \mathbf{e}_z) = \begin{bmatrix} 1 - n_z^1 n_z^1 & -n_z^1 n_z^1 \\ -n_z^1 n_z^1 & 1 - n_z^1 n_z^1 \end{bmatrix} : \begin{bmatrix} 0 & \partial_s \phi_i t_z^1 \\ 0 & \partial_s \phi_i t_z^1 \end{bmatrix} = \partial_s \phi_i t_z^1`,
    description: "Which yields In this 1D surface case, we have , and therefore",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.18',
    section: 'the_z_momentum_equation',
    label: "Simplified Projection (z)",
    latex: String.raw`(\mathbf{I} - \mathbf{n}^1 \mathbf{n}^1) : \nabla^s (\phi_i \mathbf{e}_z) = \partial_s \phi_i t_z^1 - \partial_s \phi_i n_z^1 (t^1 \cdot \mathbf{n}^1) = \partial_s \phi_i t_z^1`,
    description: "In this 1D surface case, we have , and therefore",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.19',
    section: 'the_z_momentum_equation',
    label: "Surface Div Result (z)",
    latex: String.raw`-\phi_i \mathbf{e}_z \cdot \nabla^s \cdot \sigma^1 (\mathbf{I} - \mathbf{n}^1 \mathbf{n}^1) = -\nabla^s \cdot (\phi_i \mathbf{e}_z \cdot \sigma^1 (\mathbf{I} - \mathbf{n}^1 \mathbf{n}^1)) + \sigma^1 \partial_s \phi_i t_z^1`,
    description: "",
    references: ["5.15"],
    transform: "From (5.15)",
    hidden: false,
  },
  {
    id: '5.20',
    section: 'the_z_momentum_equation',
    label: "Stress dot n^1 Final (z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^z &= Re \int_{\Omega^f} \phi_i \partial_t w + Re \int_{\Omega^f} \phi_i u \partial_r w + Re \int_{\Omega^f} \phi_i w \partial_z w - Re \int_{\Omega^f} \phi_i u^c \partial_r w
&\quad - Re \int_{\Omega^f} \phi_i w^c \partial_z w - St \int_{\Omega^f} \phi_i \hat{g}_z + \int_{\Omega^f} \partial_r w \partial_r \phi_i + \int_{\Omega^f} \partial_z w \partial_r \phi_i + 2 \int_{\Omega^f} \partial_z w \partial_z \phi_i
&\quad - \int_{\Omega^f} p \partial_z \phi_i - \int_{\partial \Omega^1} \phi_i p^g \mathbf{e}_z \cdot n^1 - \frac{1}{\ca} \int_{\partial \Omega^1} \nabla^s \cdot (\sigma^1 \phi_i \mathbf{e}_z \cdot (\mathbf{I} - \mathbf{n}^1 \mathbf{n}^1))
&\quad + \frac{1}{\ca} \int_{\partial \Omega^1} \sigma^1 \partial_s \phi_i t_z^1 + \int_{\partial \Omega^2} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot n^2 + \int_{\partial \Omega^3} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot n^3 + \int_{\partial \Omega^4} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot n^4.
\end{aligned}`,
    description: "",
    references: ["5.10", "5.12", "5.15", "5.19", "5.9"],
    transform: "From (5.10), (5.12), (5.15), (5.19), (5.9)",
    hidden: false,
  },
  {
    id: '5.21',
    section: 'the_z_momentum_equation',
    label: "M^{z,1} Div Theorem",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^z &= Re \int_{\Omega^f} \phi_i \partial_t w + Re \int_{\Omega^f} \phi_i u \partial_r w + Re \int_{\Omega^f} \phi_i w \partial_z w - Re \int_{\Omega^f} \phi_i u^c \partial_r w
&\quad - Re \int_{\Omega^f} \phi_i w^c \partial_z w - St \int_{\Omega^f} \phi_i \hat{g}_z + \int_{\Omega^f} \partial_r w \partial_r \phi_i + \int_{\Omega^f} \partial_z w \partial_r \phi_i + 2 \int_{\Omega^f} \partial_z w \partial_z \phi_i
&\quad - \int_{\Omega^f} p \partial_z \phi_i - \int_{\partial \Omega^1} \phi_i p^g n_z^1 + \frac{1}{\ca} \int_{C_1} \sigma^1 \phi_i \mathbf{e}_z \cdot m^1 + \frac{1}{\ca} \int_{\partial \Omega^1} \sigma^1 \partial_s \phi_i t_z^1
&\quad + \int_{\partial \Omega^2} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot n^2 + \int_{\partial \Omega^3} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot n^3 + \int_{\partial \Omega^4} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot n^4,
\end{aligned}`,
    description: "Using the surface divergence theorem and the definition of the surface divergence for a 1D surface, we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.22',
    section: 'the_z_momentum_equation',
    label: "M^{z,1} with Endpoints",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^z &= Re \int_{\Omega^f} \phi_i \partial_t w + Re \int_{\Omega^f} \phi_i u \partial_r w + Re \int_{\Omega^f} \phi_i w \partial_z w - Re \int_{\Omega^f} \phi_i u^c \partial_r w - Re \int_{\Omega^f} \phi_i w^c \partial_z w
&\quad - St \int_{\Omega^f} \phi_i \hat{g}_z + \int_{\Omega^f} \partial_r w \partial_r \phi_i + \int_{\Omega^f} \partial_z u \partial_r \phi_i + 2 \int_{\Omega^f} \partial_z w \partial_z \phi_i - \int_{\Omega^f} p \partial_z \phi_i - \int_{\partial \Omega^1} p^g \phi_i n_z^1
&\quad + \frac{\sigma^1(r_{j1},z_{j1}) \phi_i(r_{j1},z_{j1}) m_z^{1,n}(r_{j1},z_{j1})}{\ca} + \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a)}{\ca}
&\quad + \frac{1}{\ca} \int_{\partial \Omega^1} \sigma^1 \partial_s \phi_i t_z^1 + \int_{\partial \Omega^2} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot n^2 + \int_{\partial \Omega^3} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot n^3 + \int_{\partial \Omega^4} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot n^4,
\end{aligned}`,
    description: "Where is actually the two points bounding the free surface, and is the vector that is tangent to the free surface, normal to the separatrix line or symmetry axis (accordingly) and points into the",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.23',
    section: 'the_z_momentum_equation',
    label: "Apex Normal Vector (z)",
    latex: String.raw`\int_{\partial \Omega^{2,1}} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot \mathbf{n}^2`,
    description: "We consider now the term",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.24',
    section: 'the_z_momentum_equation',
    label: "Bdry 2 Stress Integral (z)",
    latex: String.raw`\begin{aligned}
\phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot \mathbf{n}^2 &= \phi_i \mathbf{e}_z \cdot \underbrace{(\mathbf{I} - \mathbf{n}^2 \mathbf{n}^2) \cdot \mathbf{P} \cdot \mathbf{n}^2}_{\be (\mathbf{u} - \mathbf{u}^s) \cdot (\mathbf{I} - \mathbf{n}^2 \mathbf{n}^2) - \frac{1}{2\ca} \nabla^2 \sigma^2} + \phi_i \mathbf{e}_z \cdot \underbrace{(\mathbf{n}^2 \cdot \mathbf{P} \cdot \mathbf{n}^2)}_{\lambda^2} \mathbf{n}^2,
\end{aligned}`,
    description: "We consider now the term We have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.25',
    section: 'the_z_momentum_equation',
    label: "GNSC Substitution (z)",
    latex: String.raw`\begin{aligned}
\phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot \mathbf{n}^2 &= \be \phi_i \mathbf{e}_z \cdot (\mathbf{u} \cdot \mathbf{t}^2) \mathbf{t}^2 - \be \phi_i \mathbf{e}_z \cdot (\mathbf{u}^s \cdot \mathbf{t}^2) \mathbf{t}^2 - \frac{1}{2\ca} \phi_i \mathbf{e}_z \cdot \nabla^2 \sigma^2 + \lambda^2 \phi_i \mathbf{e}_z \cdot \mathbf{n}^2,
\end{aligned}`,
    description: "We have where is the normal stress on surface 2 and we have used the GNSC [2.53], and therefore",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.26',
    section: 'the_z_momentum_equation',
    label: "Stress dot n^2 Expanded (z)",
    latex: String.raw`\begin{aligned}
\phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot \mathbf{n}^2 &= \be \phi_i \mathbf{e}_z \cdot (u t_r^2 + w t_z^2) \mathbf{t}^2 - \be \phi_i \mathbf{e}_z \cdot (u^s t_r^2 + w^s t_z^2) \mathbf{t}^2
&\quad - \frac{1}{2\ca} \phi_i (\partial_s \sigma^2) \mathbf{e}_z \cdot \mathbf{t}^2 + \lambda^2 \phi_i n_z^2,
\end{aligned}`,
    description: "Where is the normal stress on surface 2 and we have used the GNSC [2.53], and therefore i.e",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.27',
    section: 'the_z_momentum_equation',
    label: "Stress dot n^2 Components (z)",
    latex: String.raw`\begin{aligned}
\phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot \mathbf{n}^2 &= \be \phi_i u t_r^2 t_z^2 + \be \phi_i w t_z^2 t_z^2 - \be \phi_i u^s t_r^2 t_z^2 - \be \phi_i w^s t_z^2 t_z^2
&\quad - \frac{1}{2\ca} \phi_i t_z^2 \partial_s \sigma^2 + \lambda^2 \phi_i n_z^2.
\end{aligned}`,
    description: "Equivalently, we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.28',
    section: 'the_z_momentum_equation',
    label: "Stress dot n^2 Regrouped (z)",
    latex: String.raw`\begin{aligned}
\int_{\partial \Omega^{2,1}} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot \mathbf{n}^2 &= \be \int_{\partial \Omega^{2,1}} \phi_i u t_r^2 t_z^2 + \be \int_{\partial \Omega^{2,1}} \phi_i w t_z^2 t_z^2 - \be \int_{\partial \Omega^{2,1}} \phi_i u^s t_r^2 t_z^2
&\quad - \be \int_{\partial \Omega^{2,1}} \phi_i w^s t_z^2 t_z^2 - \frac{1}{2\ca} \int_{\partial \Omega^{2,1}} \phi_i t_z^2 \partial_s \sigma^2 + \int_{\partial \Omega^{2,1}} \lambda^2 \phi_i n_z^2.
\end{aligned}`,
    description: "Equivalently, we have Consequently we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.30',
    section: 'the_z_momentum_equation',
    label: "M^{z,2} Expression",
    latex: String.raw`\begin{aligned}
\int_{\partial \Omega^{3}} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot \mathbf{n}^3, \quad
\mathbf{P} \cdot \mathbf{n}^3 = \mathbf{n}^3 \underbrace{\mathbf{n}^3 \cdot \mathbf{P} \cdot \mathbf{n}^3}_{\lambda^3} + \underbrace{(\mathbf{I} - \mathbf{n}^3 \mathbf{n}^3) \cdot \mathbf{P} \cdot \mathbf{n}^3}_{\gamma^3 \mathbf{t}^3},
\end{aligned}`,
    description: "Consequently we have Similarly, we have for the term",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.31',
    section: 'the_z_momentum_equation',
    label: "Bdry 3 Stress Integral (z)",
    latex: String.raw`\mathbf{P} \cdot \mathbf{n}^3 = \lambda^3 \mathbf{n}^3 + \gamma^3 \mathbf{t}^3`,
    description: "Similarly, we have for the term where is the normal stress on surface 3 and is the tangential stress on surface 3",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.32',
    section: 'the_z_momentum_equation',
    label: "Stress dot n^3 Decomposed (z)",
    latex: String.raw`\int_{\partial \Omega^{3}} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot \mathbf{n}^3 = \int_{\partial \Omega^{3}} \phi_i \lambda^3 \mathbf{e}_z \cdot \mathbf{n}^3 + \int_{\partial \Omega^{3}} \phi_i \gamma^3 \mathbf{e}_z \cdot \mathbf{t}^3`,
    description: "We therefore have Consequently we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.33',
    section: 'the_z_momentum_equation',
    label: "M^{z,3} Expression",
    latex: String.raw`\int_{\partial \Omega^{3}} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot \mathbf{n}^3 = \int_{\partial \Omega^{3}} \lambda^3 n_z^3 \phi_i + \int_{\partial \Omega^{3}} \gamma^3 t_z^3 \phi_i`,
    description: "We therefore have Consequently we have i.e",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.35',
    section: 'the_z_momentum_equation',
    label: "Stress dot n^4 Decomposed (z)",
    latex: String.raw`\int_{\partial \Omega^{4}} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot \mathbf{n}^4, \quad
\mathbf{P} \cdot \mathbf{n}^4 = \mathbf{n}^4 \underbrace{\mathbf{n}^4 \cdot \mathbf{P} \cdot \mathbf{n}^4}_{\lambda^4} + \underbrace{(\mathbf{I} - \mathbf{n}^4 \mathbf{n}^4) \cdot \mathbf{P} \cdot \mathbf{n}^4}_{\gamma^4 \mathbf{t}^4}`,
    description: "Finally, for the term",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.36',
    section: 'the_z_momentum_equation',
    label: "Stress dot n^4 Simplified (z)",
    latex: String.raw`\mathbf{P} \cdot \mathbf{n}^4 = \lambda^4 \mathbf{n}^4 + \gamma^4 \mathbf{t}^4`,
    description: "Finally, for the term where is the normal stress on surface 4 and is the tangential stress on surface 4",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.37',
    section: 'the_z_momentum_equation',
    label: "M^{z,4} Expression",
    latex: String.raw`\int_{\partial \Omega^{4}} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot \mathbf{n}^4 = \int_{\partial \Omega^{4}} \phi_i \lambda^4 \mathbf{e}_z \cdot \mathbf{n}^4 + \int_{\partial \Omega^{4}} \phi_i \gamma^4 \mathbf{e}_z \cdot \mathbf{t}^4`,
    description: "We therefore have Consequently we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.38',
    section: 'the_z_momentum_equation',
    label: "M^{z,0} with BDF2",
    latex: String.raw`\int_{\partial \Omega^{4}} \phi_i \mathbf{e}_z \cdot \mathbf{P} \cdot \mathbf{n}^4 = \int_{\partial \Omega^{4}} \lambda^4 n_z^4 \phi_i + \int_{\partial \Omega^{4}} \gamma^4 t_z^4 \phi_i`,
    description: "We therefore have Consequently we have i.e",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.39',
    section: 'the_z_momentum_equation',
    label: "M^{z,1} with BDF2",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^z &= Re \int_{\Omega^f} \phi_i \partial_t w + Re \int_{\Omega^f} \phi_i u \partial_r w + Re \int_{\Omega^f} \phi_i w \partial_z w - Re \int_{\Omega^f} \phi_i u^c \partial_r w
&\quad - Re \int_{\Omega^f} \phi_i w^c \partial_z w - St \int_{\Omega^f} \phi_i \hat{g}_z + \int_{\Omega^f} \partial_r w \partial_r \phi_i + \int_{\Omega^f} \partial_z u \partial_r \phi_i + 2 \int_{\Omega^f} \partial_z w \partial_z \phi_i
&\quad - \int_{\Omega^f} p \partial_z \phi_i - \int_{\partial \Omega^{1,f}} \phi_i p^g n_z^1 + \frac{\sigma^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_z^{1,n}(r_{J1},z_{J1})}{\ca}
&\quad + \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a)}{\ca} + \frac{1}{\ca} \int_{\partial \Omega^{1,f}} \sigma^1 \partial_s \phi_i t_z^1 + \be \int_{\partial \Omega^{2,f}} \phi_i u t_r^2 t_z^2
&\quad + \be \int_{\partial \Omega^{2,f}} \phi_i w t_z^2 t_z^2 - \be \int_{\partial \Omega^{2,f}} \phi_i u^s t_r^2 t_z^2 - \be \int_{\partial \Omega^{2,f}} \phi_i w^s t_z^2 t_z^2
&\quad - \frac{1}{2\ca} \int_{\partial \Omega^{2,f}} \phi_i t_z^2 \partial_s \sigma^2 + \int_{\partial \Omega^{2,f}} \lambda^2 \phi_i n_z^2 + \int_{\partial \Omega^{3}} \lambda^3 n_z^3 \phi_i + \int_{\partial \Omega^{3}} \gamma^3 t_z^3 \phi_i
&\quad + \int_{\partial \Omega^{4}} \lambda^4 n_z^4 \phi_i + \int_{\partial \Omega^{4}} \gamma^4 t_z^4 \phi_i,
\end{aligned}`,
    description: "Consequently we have i.e",
    references: ["5.22", "5.28", "5.33"],
    transform: "From (5.22), (5.28), (5.33)",
    hidden: false,
  },
  {
    id: '5.40',
    section: 'the_z_momentum_equation',
    label: "M^{z,2} with BDF2",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^z &= Re \int_{\Omega^f} \phi_i \frac{3w(t_n) - 4w(t_{n-1}) + w(t_{n-2})}{2\dt} + Re \int_{\Omega^f} \phi_i u \partial_r w
&\quad + Re \int_{\Omega^f} \phi_i w \partial_z w - Re \int_{\Omega^f} \phi_i \frac{3r^c(t_n) - 4r^c(t_{n-1}) + r^c(t_{n-2})}{2\dt} \partial_r w
&\quad - Re \int_{\Omega^f} \phi_i \frac{3z^c(t_n) - 4z^c(t_{n-1}) + z^c(t_{n-2})}{2\dt} \partial_z w - St \int_{\Omega^f} \phi_i \bar{g}_z
&\quad + \int_{\Omega^f} \partial_r w \partial_r \phi_i + \int_{\Omega^f} \partial_z w \partial_r \phi_i + 2 \int_{\Omega^f} \partial_z w \partial_z \phi_i - \int_{\Omega^f} p \partial_z \phi_i
&\quad - \int_{\partial \Omega^{1,f}} \phi_i p^g n_z^1 + \frac{\sigma^1(r_{J^1},z_{J^1}) \phi_i(r_{J^1},z_{J^1}) m_z^{1,n}(r_{J^1},z_{J^1})}{\ca}
&\quad + \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a)}{\ca} + \frac{1}{\ca} \int_{\partial \Omega^{1,f}} \sigma^1 \partial_s \phi_i t_z^1
&\quad + \be \int_{\partial \Omega^{2,f}} \phi_i u t_r^2 t_z^2 + \be \int_{\partial \Omega^{2,f}} \phi_i w t_z^2 t_z^2 - \be \int_{\partial \Omega^{2,f}} \phi_i u^s t_r^2 t_z^2
&\quad - \be \int_{\partial \Omega^{2,f}} \phi_i w^s t_z^2 t_z^2 - \frac{1}{2\ca} \int_{\partial \Omega^{2,f}} \phi_i t_z^2 \partial_s \sigma^2 + \int_{\partial \Omega^{2,f}} \lambda^2 \phi_i n_z^2
&\quad + \int_{\partial \Omega^{3}} \lambda^3 n_z^3 \phi_i + \int_{\partial \Omega^{3}} \gamma^3 t_z^3 \phi_i + \int_{\partial \Omega^{4}} \lambda^4 n_z^4 \phi_i + \int_{\partial \Omega^{4}} \gamma^4 t_z^4 \phi_i,
\end{aligned}`,
    description: "",
    references: ["4.52", "4.55", "5.39"],
    transform: "From (4.52), (4.55), (5.39)",
    hidden: false,
  },
  {
    id: '5.41',
    section: 'the_z_momentum_equation',
    label: "M^{z,3} with BDF2",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^z &= Re \int_{\Omega^f} \phi_i w - \frac{4Re}{3} \int_{\Omega^f} \phi_i w(t_{n-1}) + \frac{Re}{3} \int_{\Omega^f} \phi_i w(t_{n-2})
&\quad + \frac{2\dt Re}{3} \int_{\Omega^f} \phi_i u \partial_r w + \frac{2\dt Re}{3} \int_{\Omega^f} \phi_i w \partial_z w
&\quad - Re \int_{\Omega^f} \phi_i r^c \partial_r w + \frac{4Re}{3} \int_{\Omega^f} \phi_i r^c(t_{n-1}) \partial_r w - \frac{Re}{3} \int_{\Omega^f} \phi_i r^c(t_{n-2}) \partial_r w
&\quad - Re \int_{\Omega^f} \phi_i z^c \partial_z w + \frac{4Re}{3} \int_{\Omega^f} \phi_i z^c(t_{n-1}) \partial_z w - \frac{Re}{3} \int_{\Omega^f} \phi_i z^c(t_{n-2}) \partial_z w
&\quad - \frac{2\dt St}{3} \int_{\Omega^f} \phi_i \hat{g}_z + \frac{2\dt}{3} \int_{\Omega^f} \partial_r w \partial_r \phi_i + \frac{2\dt}{3} \int_{\Omega^f} \partial_z u \partial_r \phi_i + \frac{4\dt}{3} \int_{\Omega^f} \partial_z w \partial_z \phi_i
&\quad - \frac{2\dt}{3} \int_{\Omega^f} p \partial_z \phi_i - \frac{2\dt}{3} \int_{\partial \Omega^{1,f}} \phi_i p^g n_z^1 + \frac{2\dt}{3\ca} \sigma^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_z^{1,n}(r_{J1},z_{J1})
&\quad + \frac{2\dt}{3\ca} \sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a) + \frac{2\dt}{3\ca} \int_{\partial \Omega^{1,f}} \sigma^1 \partial_s \phi_i t_z^1
&\quad + \frac{2\dt \be}{3} \int_{\partial \Omega^{2,f}} \phi_i u t_r^2 t_z^2 + \frac{2\dt \be}{3} \int_{\partial \Omega^{2,f}} \phi_i w t_z^2 t_z^2
&\quad - \frac{2\dt \be}{3} \int_{\partial \Omega^{2,f}} \phi_i u^s t_r^2 t_z^2 - \frac{2\dt \be}{3} \int_{\partial \Omega^{2,f}} \phi_i w^s t_z^2 t_z^2
&\quad - \frac{\dt}{3\ca} \int_{\partial \Omega^{2,f}} \phi_i t_z^2 \partial_s \sigma^2 + \frac{2\dt}{3} \int_{\partial \Omega^{2,f}} \lambda^2 \phi_i n_z^2
&\quad + \frac{2\dt}{3} \int_{\partial \Omega^{3}} \lambda^3 n_z^3 \phi_i + \frac{2\dt}{3} \int_{\partial \Omega^{3}} \gamma^3 t_z^3 \phi_i
&\quad + \frac{2\dt}{3} \int_{\partial \Omega^{4}} \lambda^4 n_z^4 \phi_i + \frac{2\dt}{3} \int_{\partial \Omega^{4}} \gamma^4 t_z^4 \phi_i,
\end{aligned}`,
    description: "",
    references: ["5.40"],
    transform: "From (5.40)",
    hidden: false,
  },
  {
    id: '5.42',
    section: 'the_z_momentum_equation',
    label: "M^{z,4} with BDF2",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^z &= Re \int_{\Omega^f} \phi_i \sum_{j=1}^{n_v} w_j \phi_j - \frac{4Re}{3} \int_{\Omega^f} \phi_i \sum_{j=1}^{n_v} w_j(t_{n-1}) \phi_j + \frac{Re}{3} \int_{\Omega^f} \phi_i \sum_{j=1}^{n_v} w_j(t_{n-2}) \phi_j
&\quad + \frac{2\dt Re}{3} \int_{\Omega^f} \phi_i \left( \sum_{k=1}^{n_v} u_k \phi_k \right) \partial_r \left( \sum_{j=1}^{n_v} w_j \phi_j \right) + \frac{2\dt Re}{3} \int_{\Omega^f} \phi_i \left( \sum_{k=1}^{n_v} w_k \phi_k \right) \partial_z \left( \sum_{j=1}^{n_v} w_j \phi_j \right)
&\quad - Re \int_{\Omega^f} \phi_i \left( \sum_{k=1}^{n_v} r_k^c \phi_k \right) \partial_r \left( \sum_{j=1}^{n_v} w_j \phi_j \right) + \frac{4Re}{3} \int_{\Omega^f} \phi_i \left( \sum_{k=1}^{n_v} r_k^c(t_{n-1}) \phi_k \right) \partial_r \left( \sum_{j=1}^{n_v} w_j \phi_j \right)
&\quad - \frac{Re}{3} \int_{\Omega^f} \phi_i \left( \sum_{k=1}^{n_v} r_k^c(t_{n-2}) \phi_k \right) \partial_r \left( \sum_{j=1}^{n_v} w_j \phi_j \right)
&\quad - Re \int_{\Omega^f} \phi_i \left( \sum_{k=1}^{n_v} z_k^c \phi_k \right) \partial_z \left( \sum_{j=1}^{n_v} w_j \phi_j \right) + \frac{4Re}{3} \int_{\Omega^f} \phi_i \left( \sum_{k=1}^{n_v} z_k^c(t_{n-1}) \phi_k \right) \partial_z \left( \sum_{j=1}^{n_v} w_j \phi_j \right)
&\quad - \frac{Re}{3} \int_{\Omega^f} \phi_i \left( \sum_{k=1}^{n_v} z_k^c(t_{n-2}) \phi_k \right) \partial_z \left( \sum_{j=1}^{n_v} w_j \phi_j \right) - \frac{2\dt St}{3} \int_{\Omega^f} \phi_i \hat{g}_z
&\quad + \frac{2\dt}{3} \int_{\Omega^f} \partial_r \left( \sum_{j=1}^{n_v} w_j \phi_j \right) \partial_r \phi_i + \frac{2\dt}{3} \int_{\Omega^f} \partial_z \left( \sum_{j=1}^{n_v} u_j \phi_j \right) \partial_r \phi_i
&\quad + \frac{4\dt}{3} \int_{\Omega^f} \partial_z \left( \sum_{j=1}^{n_v} w_j \phi_j \right) \partial_z \phi_i - \frac{2\dt}{3} \int_{\Omega^f} \left( \sum_{j=1}^{n_p} p_j \psi_j \right) \partial_z \phi_i
&\quad - \frac{2\dt}{3} \int_{\partial \Omega^{1,f}} \phi_i \left( \sum_{j=1}^{n_v} \tilde{p}_j^g \phi_j^1 \right) n_z^1 + \frac{2\dt}{3\ca} \sigma^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_z^{1,n}(r_{J1},z_{J1})
&\quad + \frac{2\dt}{3\ca} \sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a) + \frac{2\dt}{3\ca} \int_{\partial \Omega^{1,f}} \left( \sum_{j=1}^{n_v} \tilde{\sigma}_j^1 \phi_j^1 \right) t_z^1 \partial_s \phi_i
&\quad + \frac{2\dt \be}{3} \int_{\partial \Omega^{2,f}} \phi_i t_r^2 t_z^2 \left( \sum_{j=1}^{n_v} u_j \phi_j \right) + \frac{2\dt \be}{3} \int_{\partial \Omega^{2,f}} \phi_i t_z^2 t_z^2 \left( \sum_{j=1}^{n_v} w_j \phi_j \right)
&\quad - \frac{2\dt \be}{3} \int_{\partial \Omega^{2,f}} \phi_i \left( \sum_{j=1}^{n_v} \tilde{u}_j^s \phi_j \right) t_r^2 t_z^2 - \frac{2\dt \be}{3} \int_{\partial \Omega^{2,f}} \phi_i \left( \sum_{j=1}^{n_v} \tilde{w}_j^s \phi_j \right) t_z^2 t_z^2
&\quad - \frac{\dt}{3\ca} \int_{\partial \Omega^{2,f}} \phi_i t_z^2 \partial_s \left( \sum_{j=1}^{n_v} \tilde{\sigma}_j^2 \phi_j^2 \right) + \frac{2\dt}{3} \int_{\partial \Omega^{2,f}} \left( \sum_{j=1}^{n_v} \tilde{\lambda}_j^2 \phi_j \right) \phi_i n_z^2
&\quad + \frac{2\dt}{3} \int_{\partial \Omega^{3}} \left( \sum_{j=1}^{n_v} \tilde{\lambda}_j^3 \phi_j \right) n_z^3 \phi_i + \frac{2\dt}{3} \int_{\partial \Omega^{3}} \left( \sum_{j=1}^{n_v} \tilde{\gamma}_j^3 \phi_j \right) t_z^3 \phi_i
&\quad + \frac{2\dt}{3} \int_{\partial \Omega^{4}} \left( \sum_{j=1}^{n_v} \tilde{\lambda}_j^4 \phi_j \right) n_z^4 \phi_i + \frac{2\dt}{3} \int_{\partial \Omega^{4}} \left( \sum_{j=1}^{n_v} \tilde{\gamma}_j^4 \phi_j \right) t_z^4 \phi_i,
\end{aligned}`,
    description: "Where time dependent function whose time argument is not indicated are evaluated at time",
    references: ["4.66", "4.80", "5.41"],
    transform: "From (4.66), (4.80), (5.41)",
    hidden: false,
  },
  {
    id: '5.45',
    section: 'the_z_momentum_equation',
    label: "M^{z,0} Rescaled",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,0} &= Re \sum_{j=1}^{n_v} w_j \int_{\Omega^f} \phi_i \phi_j - \frac{4Re}{3} \sum_{j=1}^{n_v} w_j(t_{n-1}) \int_{\Omega^f} \phi_i \phi_j + \frac{Re}{3} \sum_{j=1}^{n_v} w_j(t_{n-2}) \int_{\Omega^f} \phi_i \phi_j
&\quad + \frac{2\dt Re}{3} \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} u_k \int_{\Omega^f} \phi_i \phi_k \partial_r \phi_j + \frac{2\dt Re}{3} \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} w_k \int_{\Omega^f} \phi_i \phi_k \partial_z \phi_j
&\quad - Re \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} r_k^c \int_{\Omega^f} \phi_i \phi_k \partial_r \phi_j + \frac{4Re}{3} \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} r_k^c(t_{n-1}) \int_{\Omega^f} \phi_i \phi_k \partial_r \phi_j
&\quad - \frac{Re}{3} \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} r_k^c(t_{n-2}) \int_{\Omega^f} \phi_i \phi_k \partial_r \phi_j - Re \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} z_k^c \int_{\Omega^f} \phi_i \phi_k \partial_z \phi_j
&\quad + \frac{4Re}{3} \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} z_k^c(t_{n-1}) \int_{\Omega^f} \phi_i \phi_k \partial_z \phi_j - \frac{Re}{3} \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} z_k^c(t_{n-2}) \int_{\Omega^f} \phi_i \phi_k \partial_z \phi_j
&\quad - \frac{2\dt St}{3} \int_{\Omega^f} \phi_i \hat{g}_z + \sum_{j=1}^{n_v} w_j \frac{2\dt}{3} \int_{\Omega^f} \partial_r \phi_j \partial_r \phi_i + \frac{2\dt}{3} \sum_{j=1}^{n_v} u_j \int_{\Omega^f} \partial_z \phi_j \partial_r \phi_i
&\quad + \frac{4\dt}{3} \sum_{j=1}^{n_v} w_j \int_{\Omega^f} \partial_z \phi_j \partial_z \phi_i - \frac{2\dt}{3} \sum_{j=1}^{n_p} p_j \int_{\Omega^f} \psi_j \partial_z \phi_i,
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.46',
    section: 'the_z_momentum_equation',
    label: "M^{z,1} Rescaled",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,1} &= -\frac{2\dt}{3} \sum_{j=1}^{n_v} \tilde{p}_j^g \int_{\partial \Omega^{1,f}} \phi_i \phi_j^1 n_z^1 + \frac{2\dt}{3\ca} \sigma^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_z^{1}(r_{J1},z_{J1})
&\quad + \frac{2\dt}{3\ca} \sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a) + \frac{2\dt}{3\ca} \sum_{j=1}^{n_v} \tilde{\sigma}_j^1 \int_{\partial \Omega^{1,f}} \phi_j^1 t_z^1 \partial_s \phi_i,
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.47',
    section: 'the_z_momentum_equation',
    label: "M^{z,2} Rescaled",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,2} &= \frac{2\dt \be}{3} \sum_{j=1}^{n_v} u_j \int_{\partial \Omega^{2,f}} \phi_i t_r^2 t_z^2 \phi_j + \frac{2\dt \be}{3} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega^{2,f}} \phi_i t_z^2 t_z^2 \phi_j
&\quad - \frac{2\dt \be}{3} \sum_{j=1}^{n_v} \tilde{u}_j^s \int_{\partial \Omega^{2,f}} \phi_i \phi_j t_r^2 t_z^2 - \frac{2\dt \be}{3} \sum_{j=1}^{n_v} \tilde{w}_j^s \int_{\partial \Omega^{2,f}} \phi_i \phi_j t_z^2 t_z^2
&\quad - \frac{\dt}{3\ca} \sum_{j=1}^{n_v} \tilde{\sigma}_j^2 \int_{\partial \Omega^{2,f}} \phi_i t_z^2 \partial_s \phi_j^2 + \frac{2\dt}{3} \sum_{j=1}^{n_v} \tilde{\lambda}_j^2 \int_{\partial \Omega^{2,f}} \phi_j \phi_i n_z^2,
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.48',
    section: 'the_z_momentum_equation',
    label: "M^{z,3} Rescaled",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,3} &= \frac{2\dt}{3} \sum_{j=1}^{n_v} \tilde{\lambda}_j^3 \int_{\partial \Omega^{3}} \phi_j n_z^3 \phi_i + \frac{2\dt}{3} \sum_{j=1}^{n_v} \tilde{\gamma}_j^3 \int_{\partial \Omega^{3}} t_z^3 \phi_j \phi_i,
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.49',
    section: 'the_z_momentum_equation',
    label: "M^{z,4} Rescaled",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,4} &= \frac{2\dt}{3} \sum_{j=1}^{n_v} \tilde{\lambda}_j^4 \int_{\partial \Omega^{4}} \phi_j n_z^4 \phi_i + \frac{2\dt}{3} \sum_{j=1}^{n_v} \tilde{\gamma}_j^4 \int_{\partial \Omega^{4}} t_z^4 \phi_j \phi_i.
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.50',
    section: 'the_z_momentum_equation',
    label: "M^{z} Residual Decomposition",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,0} &= -\frac{2\dt St}{3} \int_{\Omega^f} \phi_i \hat{g}_z + Re \sum_{j=1}^{n_v} w_j \int_{\Omega^f} \phi_i \phi_j - \frac{4Re}{3} \sum_{j=1}^{n_v} w_j(t_{n-1}) \int_{\Omega^f} \phi_i \phi_j
&\quad + \frac{Re}{3} \sum_{j=1}^{n_v} w_j(t_{n-2}) \int_{\Omega^f} \phi_i \phi_j + \sum_{j=1}^{n_v} w_j \frac{2\dt}{3} \int_{\Omega^f} \partial_r \phi_j \partial_r \phi_i + \frac{2\dt}{3} \sum_{j=1}^{n_v} u_j \int_{\Omega^f} \partial_z \phi_j \partial_r \phi_i
&\quad + \frac{4\dt}{3} \sum_{j=1}^{n_v} w_j \int_{\Omega^f} \partial_z \phi_j \partial_z \phi_i + \frac{2\dt Re}{3} \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} u_k \int_{\Omega^f} \phi_i \phi_k \partial_r \phi_j
&\quad + \frac{2\dt Re}{3} \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} w_k \int_{\Omega^f} \phi_i \phi_k \partial_z \phi_j - Re \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} r_k^c \int_{\Omega^f} \phi_i \phi_k \partial_r \phi_j
&\quad + \frac{4Re}{3} \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} r_k^c(t_{n-1}) \int_{\Omega^f} \phi_i \phi_k \partial_r \phi_j - \frac{Re}{3} \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} r_k^c(t_{n-2}) \int_{\Omega^f} \phi_i \phi_k \partial_r \phi_j
&\quad - Re \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} z_k^c \int_{\Omega^f} \phi_i \phi_k \partial_z \phi_j + \frac{4Re}{3} \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} z_k^c(t_{n-1}) \int_{\Omega^f} \phi_i \phi_k \partial_z \phi_j
&\quad - \frac{Re}{3} \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} z_k^c(t_{n-2}) \int_{\Omega^f} \phi_i \phi_k \partial_z \phi_j - \frac{2\dt}{3} \sum_{j=1}^{n_p} p_j \int_{\Omega^f} \psi_j \partial_z \phi_i,
\end{aligned}`,
    description: "And Re-arranging terms we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.51',
    section: 'the_z_momentum_equation',
    label: "M^{z,0} Global Sums",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,1} &= \frac{2\dt}{3\ca} \sigma^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_z^{1}(r_{J1},z_{J1})
&\quad + \frac{2\dt}{3\ca} \sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a)
&\quad + \frac{2\dt}{3\ca} \sum_{j=1}^{n_v} \tilde{\sigma}_j^1 \int_{\partial \Omega^{1,f}} \phi_j^1 t_z^1 \partial_s \phi_i - \frac{2\dt}{3} \sum_{j=1}^{n_v} \tilde{p}_j^g \int_{\partial \Omega^{1,f}} \phi_i \phi_j^1 n_z^1,
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.52',
    section: 'the_z_momentum_equation',
    label: "M^{z,1} Global Sums",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,2} &= \frac{2\dt \be}{3} \sum_{j=1}^{n_v} u_j \int_{\partial \Omega^{2,f}} \phi_i t_r^2 t_z^2 \phi_j + \frac{2\dt \be}{3} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega^{2,f}} \phi_i t_z^2 t_z^2 \phi_j
&\quad - \frac{2\dt \be}{3} \sum_{j=1}^{n_v} \tilde{u}_j^s \int_{\partial \Omega^{2,f}} \phi_i \phi_j t_r^2 t_z^2 - \frac{2\dt \be}{3} \sum_{j=1}^{n_v} \tilde{w}_j^s \int_{\partial \Omega^{2,f}} \phi_i \phi_j t_z^2 t_z^2
&\quad - \frac{\dt}{3\ca} \sum_{j=1}^{n_v} \tilde{\sigma}_j^2 \int_{\partial \Omega^{2,f}} \phi_i t_z^2 \partial_s \phi_j^2 + \frac{2\dt}{3} \sum_{j=1}^{n_v} \tilde{\lambda}_j^2 \int_{\partial \Omega^{2,f}} \phi_j \phi_i n_z^2,
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.53',
    section: 'the_z_momentum_equation',
    label: "M^{z,2} Global Sums",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,3} &= \frac{2\dt}{3} \sum_{j=1}^{n_v} \tilde{\lambda}_j^3 \int_{\partial \Omega^{3}} \phi_j n_z^3 \phi_i + \frac{2\dt}{3} \sum_{j=1}^{n_v} \tilde{\gamma}_j^3 \int_{\partial \Omega^{3}} t_z^3 \phi_j \phi_i,
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.54',
    section: 'the_z_momentum_equation',
    label: "M^{z,3} Global Sums",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,4} &= \frac{2\dt}{3} \sum_{j=1}^{n_v} \tilde{\lambda}_j^4 \int_{\partial \Omega^{4}} \phi_j n_z^4 \phi_i + \frac{2\dt}{3} \sum_{j=1}^{n_v} \tilde{\gamma}_j^4 \int_{\partial \Omega^{4}} t_z^4 \phi_j \phi_i.
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.55',
    section: 'the_z_momentum_equation',
    label: "M^{z,4} Global Sums",
    latex: String.raw`\mathcal{M}_i^z = \underbrace{\mathcal{M}_i^{z,0a} + \mathcal{M}_i^{z,0b} + \mathcal{M}_i^{z,0c} + \mathcal{M}_i^{z,0d} + \mathcal{M}_i^{z,1} + \mathcal{M}_i^{z,2} + \mathcal{M}_i^{z,3} + \mathcal{M}_i^{z,4}}_{\mathcal{M}_i^{z,0}}`,
    description: "Those portions of the boundary of the triangular elements that lie on the domain boundary",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.56',
    section: 'the_z_momentum_equation',
    label: "M^{z,0} Rearranged",
    latex: String.raw`\mathcal{M}_i^{z,0a} = \sum_{e=1}^{n_{el}} \left[ -\frac{2\dt St}{3} \int_{\Omega_e} \phi_i \hat{g}_z \right]`,
    description: "Those portions of the boundary of the triangular elements that lie on the domain boundary",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.57',
    section: 'the_z_momentum_equation',
    label: "M^{z,1} Rearranged",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,0b} &= \sum_{e=1}^{n_{el}} \Bigg[ Re \sum_{j=1}^{n_v} w_j \int_{\Omega_e} \phi_i \phi_j - \frac{4Re}{3} \sum_{j=1}^{n_v} w_j(t_{n-1}) \int_{\Omega_e} \phi_i \phi_j + \frac{Re}{3} \sum_{j=1}^{n_v} w_j(t_{n-2}) \int_{\Omega_e} \phi_i \phi_j
&\quad + \sum_{j=1}^{n_v} w_j \frac{2\dt}{3} \int_{\Omega_e} \partial_r \phi_j \partial_r \phi_i + \frac{2\dt}{3} \sum_{j=1}^{n_v} u_j \int_{\Omega_e} \partial_z \phi_j \partial_r \phi_i + \frac{4\dt}{3} \sum_{j=1}^{n_v} w_j \int_{\Omega_e} \partial_z \phi_j \partial_z \phi_i \Bigg],
\end{aligned}`,
    description: "Those portions of the boundary of the triangular elements that lie on the domain boundary",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.58',
    section: 'the_z_momentum_equation',
    label: "M^{z,2} Rearranged",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,0c} &= \sum_{e=1}^{n_{el}} \Bigg[ \frac{2\dt Re}{3} \sum_{j=1}^{n_v} \sum_{k=1}^{n_v} u_k \int_{\Omega_e} \phi_i \phi_k \partial_r \phi_j + \frac{2\dt Re}{3} \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} w_k \int_{\Omega_e} \phi_i \phi_k \partial_z \phi_j
&\quad - Re \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} r_k^c \int_{\Omega_e} \phi_i \phi_k \partial_r \phi_j + \frac{4Re}{3} \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} r_k^c(t_{n-1}) \int_{\Omega_e} \phi_i \phi_k \partial_r \phi_j
&\quad - \frac{Re}{3} \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} r_k^c(t_{n-2}) \int_{\Omega_e} \phi_i \phi_k \partial_r \phi_j - Re \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} z_k^c \int_{\Omega_e} \phi_i \phi_k \partial_z \phi_j
&\quad + \frac{4Re}{3} \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} z_k^c(t_{n-1}) \int_{\Omega_e} \phi_i \phi_k \partial_z \phi_j - \frac{Re}{3} \sum_{j=1}^{n_v} w_j \sum_{k=1}^{n_v} z_k^c(t_{n-2}) \int_{\Omega_e} \phi_i \phi_k \partial_z \phi_j \Bigg],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.59',
    section: 'the_z_momentum_equation',
    label: "M^{z,3} Rearranged",
    latex: String.raw`\mathcal{M}_i^{z,0d} = \sum_{e=1}^{n_{el}} \left[ -\frac{2\dt}{3} \sum_{j=1}^{n_p} p_j \int_{\Omega_e} \psi_j \partial_z \phi_i \right]`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.60',
    section: 'the_z_momentum_equation',
    label: "M^{z,4} Rearranged",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,1} &= \frac{2\dt}{3\ca} \sigma^1(r_{j1},z_{j1}) \phi_i(r_{j1},z_{j1}) m_z^{1}(r_{j1},z_{j1})
&\quad + \frac{2\dt}{3\ca} \sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a)
&\quad + \sum_{e_1=1}^{n_{el}^1} \left[ \frac{2\dt}{3\ca} \sum_{j=1}^{n_v} \tilde{\sigma}_j^1 \int_{\partial \Omega_{e_1}^1} \phi_j^1 t_z^1 \partial_s \phi_i - \frac{2\dt}{3} \sum_{j=1}^{n_v} \tilde{p}_j^g \int_{\partial \Omega_{e_1}^1} \phi_i \phi_j^1 n_z^1 \right],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.61',
    section: 'the_z_momentum_equation',
    label: "M^{z,0} Reordered",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,2} &= \sum_{e_2=1}^{n_{el}^2} \Bigg[ \frac{2\dt \be}{3} \sum_{j=1}^{n_v} u_j \int_{\partial \Omega_{e_2}^2} \phi_i t_r^2 t_z^2 \phi_j + \frac{2\dt \be}{3} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega_{e_2}^2} \phi_i t_z^2 t_z^2 \phi_j
&\quad - \frac{2\dt \be}{3} \sum_{j=1}^{n_v} \tilde{u}_j^s \int_{\partial \Omega_{e_2}^2} \phi_i t_r^2 t_z^2 - \frac{2\dt \be}{3} \sum_{j=1}^{n_v} \tilde{w}_j^s \int_{\partial \Omega_{e_2}^2} \phi_i \phi_j t_z^2 t_z^2
&\quad - \frac{\dt}{3\ca} \sum_{j=1}^{n_v} \tilde{\sigma}_j^2 \int_{\partial \Omega_{e_2}^2} \phi_i t_z^2 \partial_s \phi_j^2 + \frac{2\dt}{3} \sum_{j=1}^{n_v} \tilde{\lambda}_j^2 \int_{\partial \Omega_{e_2}^2} \phi_j \phi_i n_z^2 \Bigg],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.62',
    section: 'the_z_momentum_equation',
    label: "M^{z,1} Reordered",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,3} = \sum_{e_3=1}^{n_{el}^3} \left[ \frac{2\dt}{3} \sum_{j=1}^{n_v} \tilde{\lambda}_j^3 \int_{\partial \Omega_{e_3}^3} \phi_j n_z^3 \phi_i + \frac{2\dt}{3} \sum_{j=1}^{n_v} \tilde{\gamma}_j^3 \int_{\partial \Omega_{e_3}^3} t_z^3 \phi_j \phi_i \right],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.63',
    section: 'the_z_momentum_equation',
    label: "M^{z,2} Reordered",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,4} = \sum_{e_4=1}^{n_{el}^4} \left[ \frac{2\dt}{3} \sum_{j=1}^{n_v} \tilde{\lambda}_j^4 \int_{\partial \Omega_{e_4}^4} \phi_j n_z^4 \phi_i + \frac{2\dt}{3} \sum_{j=1}^{n_v} \tilde{\gamma}_j^4 \int_{\partial \Omega_{e_4}^4} t_z^4 \phi_j \phi_i \right];
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.64',
    section: 'the_z_momentum_equation',
    label: "M^{z,3} Reordered",
    latex: String.raw`\mathcal{M}_i^{z,0a} = \sum_{\substack{e=1\\ i=l(e,ii)}}^{n_{el}} \left[ -\frac{2\dt St}{3} \int_{\Omega_e} \phi_{l(e,ii)} \hat{g}_z \right]`,
    description: "Hence, it is better to re-write the sum above as",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.65',
    section: 'the_z_momentum_equation',
    label: "M^{z,4} Reordered",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,0b} &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{n_{el}} \Bigg[ Re \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,jj)}
&\quad - \frac{4Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)}(t_{n-1}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,jj)}
&\quad + \frac{Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)}(t_{n-2}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,jj)}
&\quad + \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \frac{2\dt}{3} \int_{\Omega_e} \partial_r \phi_{l(e,jj)} \partial_r \phi_{l(e,ii)}
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \int_{\Omega_e} \partial_z \phi_{l(e,jj)} \partial_r \phi_{l(e,ii)}
&\quad + \frac{4\dt}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \int_{\Omega_e} \partial_z \phi_{l(e,jj)} \partial_z \phi_{l(e,ii)} \Bigg],
\end{aligned}`,
    description: "Hence, it is better to re-write the sum above as",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.66',
    section: 'the_z_momentum_equation',
    label: "Element-wise Decomposition (z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,0c} &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{n_{el}} \Bigg[ \frac{2\dt Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} u_{l(e,kk)} \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)}
&\quad + \frac{2\dt Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} w_{l(e,kk)} \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)}
&\quad - Re \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)}
&\quad + \frac{4Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-1}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)}
&\quad - \frac{Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-2}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)}
&\quad - Re \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)}
&\quad + \frac{4Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-1}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)}
&\quad - \frac{Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-2}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} \Bigg],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.67',
    section: 'the_z_momentum_equation',
    label: "Gravity Term (z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,0d} &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{n_{el}} \left[ -\frac{2\dt}{3} \sum_{jj=1}^{n_p^e} p_{l^p(e,jj)} \int_{\Omega_e} \psi_{l^p(e,jj)} \partial_z \phi_{l(e,ii)} \right],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.68',
    section: 'the_z_momentum_equation',
    label: "Viscous + Mass Term (z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,1} &= \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{n_{el}^1} \Bigg[ \frac{2\dt}{3\ca} \sum_{jj=1}^{n_v^{1,e_1}} \sigma_{l_1(e_1,jj)}^1 \int_{\partial \Omega_{e_1}^1} \phi_{l_1(e_1,jj)}^1 t_z^1 \partial_s \phi_{l_1(e_1,ii)}^1
&\quad - \frac{2\dt}{3} \sum_{jj=1}^{n_v^{1,e_1}} p_{l_1(e_1,jj)}^g \int_{\partial \Omega_{e_1}^1} \phi_{l_1(e_1,ii)}^1 \phi_{l_1(e_1,jj)}^1 n_z^1 \Bigg],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.69',
    section: 'the_z_momentum_equation',
    label: "Convection + ALE Term (z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,2} &= \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{n_{el}^2} \Bigg[ \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2(e_2,jj)} \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)} t_r^2 t_z^2 \phi_{l_2(e_2,jj)}
&\quad + \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2(e_2,jj)} \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)} t_z^2 t_z^2 \phi_{l_2(e_2,jj)}
&\quad - \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2^2(e_2,jj)}^s \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)} \phi_{l_2(e_2,jj)} t_r^2 t_z^2
&\quad - \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2^2(e_2,jj)}^s \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)} \phi_{l_2(e_2,jj)} t_z^2 t_z^2
&\quad - \frac{\dt}{3\ca} \sum_{jj=1}^{n_v^{2,e_2}} \sigma_{l_2^2(e_2,jj)}^2 \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)} t_z^2 \partial_s \phi_{l_2(e_2,jj)}^2
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{2,e_2}} \lambda_{l_2^2(e_2,jj)}^2 \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,jj)} \phi_{l_2(e_2,ii)} n_z^2 \Bigg],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.70',
    section: 'the_z_momentum_equation',
    label: "Pressure Term (z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,3} &= \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{n_{el}^3} \Bigg[ \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} \lambda_{l_3(e_3,jj)}^3 \int_{\partial \Omega_{e_3}^3} \phi_{l_3(e_3,jj)} n_z^3 \phi_{l_3(e_3,ii)}
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} \gamma_{l_3(e_3,jj)}^3 \int_{\partial \Omega_{e_3}^3} t_z^3 \phi_{l_3(e_3,jj)} \phi_{l_3(e_3,ii)} \Bigg],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.71',
    section: 'the_z_momentum_equation',
    label: "Bdry 1 (Elements, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,4} &= \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{n_{el}^4} \Bigg[ \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} \lambda_{l_4(e_4,jj)}^4 \int_{\partial \Omega_{e_4}^4} \phi_{l_4(e_4,jj)} n_z^4 \phi_{l_4(e_4,ii)}
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} \gamma_{l_4(e_4,jj)}^4 \int_{\partial \Omega_{e_4}^4} t_z^4 \phi_{l_4(e_4,jj)} \phi_{l_4(e_4,ii)} \Bigg];
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.72',
    section: 'the_z_momentum_equation',
    label: "Bdry 2 (Elements, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,0a} &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{n_{el}} \left[ -\frac{2\dt St}{3} \int_{\Omega_e} \phi_{l(e,ii)} \hat{g}_z \right],
\end{aligned}`,
    description: "Hence, it is more convenient to loop over each element's nodes and find the contribution to for each of the s that are indices of the nodes in the element at hand, and to sum this contribution to each",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.73',
    section: 'the_z_momentum_equation',
    label: "Bdry 3 (Elements, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,0b} &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{n_{el}} \Bigg[ Re \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,jj)}
&\quad - \frac{4Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)}(t_{n-1}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,jj)}
&\quad + \frac{Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)}(t_{n-2}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,jj)}
&\quad + \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \frac{2\dt}{3} \int_{\Omega_e} \partial_r \phi_{l(e,jj)} \partial_r \phi_{l(e,ii)}
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \int_{\Omega_e} \partial_z \phi_{l(e,jj)} \partial_r \phi_{l(e,ii)}
&\quad + \frac{4\dt}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \int_{\Omega_e} \partial_z \phi_{l(e,jj)} \partial_z \phi_{l(e,ii)} \Bigg],
\end{aligned}`,
    description: "Hence, it is more convenient to loop over each element's nodes and find the contribution to for each of the s that are indices of the nodes in the element at hand, and to sum this contribution to each",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.74',
    section: 'the_z_momentum_equation',
    label: "Bdry 4 (Elements, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,0c} &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{n_{el}} \Bigg[ \frac{2\dt Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} u_{l(e,kk)} \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)}
&\quad + \frac{2\dt Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} w_{l(e,kk)} \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)}
&\quad - Re \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)}
&\quad + \frac{4Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-1}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)}
&\quad - \frac{Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-2}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)}
&\quad - Re \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)}
&\quad + \frac{4Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-1}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)}
&\quad - \frac{Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-2}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} \Bigg],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.75',
    section: 'the_z_momentum_equation',
    label: "Gravity (Local, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,0d} &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{n_{el}} \left[ -\frac{2\dt}{3} \sum_{jj=1}^{n_p^e} p_{l^p(e,jj)} \int_{\Omega_e} \psi_{l^p(e,jj)} \partial_z \phi_{l(e,ii)} \right],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.76',
    section: 'the_z_momentum_equation',
    label: "Viscous+Mass (Local, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,1} &= \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{n_{el}^1} \Bigg[ \frac{2\dt}{3\ca} \sum_{jj=1}^{n_v^{1,e_1}} \sigma_{l_1(e_1,jj)}^1 \int_{\partial \Omega_{e_1}^1} \phi_{l_1(e_1,jj)}^1 t_z^1 \partial_s \phi_{l_1(e_1,ii)}^1
&\quad - \frac{2\dt}{3} \sum_{jj=1}^{n_v^{1,e_1}} p_{l_1(e_1,jj)}^g \int_{\partial \Omega_{e_1}^1} \phi_{l_1(e_1,ii)}^1 \phi_{l_1(e_1,jj)}^1 n_z^1 \Bigg],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.77',
    section: 'the_z_momentum_equation',
    label: "Convection (Local, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,2} &= \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{n_{el}^2} \Bigg[ \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2(e_2,jj)} \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)} t_r^2 t_z^2 \phi_{l_2(e_2,jj)}
&\quad + \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2(e_2,jj)} \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)} t_z^2 t_z^2 \phi_{l_2(e_2,jj)}
&\quad - \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2^2(e_2,jj)}^s \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)} \phi_{l_2(e_2,jj)} t_r^2 t_z^2
&\quad - \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2^2(e_2,jj)}^s \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)} \phi_{l_2(e_2,jj)} t_z^2 t_z^2
&\quad - \frac{\dt}{3\ca} \sum_{jj=1}^{n_v^{2,e_2}} \sigma_{l_2^2(e_2,jj)}^2 \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)} t_z^2 \partial_s \phi_{l_2(e_2,jj)}^2
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{2,e_2}} \lambda_{l_2^2(e_2,jj)}^2 \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,jj)} \phi_{l_2(e_2,ii)} n_z^2 \Bigg],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.78',
    section: 'the_z_momentum_equation',
    label: "Pressure (Local, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,3} &= \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{n_{el}^3} \Bigg[ \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} \lambda_{l_3(e_3,jj)}^3 \int_{\partial \Omega_{e_3}^3} \phi_{l_3(e_3,jj)} n_z^3 \phi_{l_3(e_3,ii)}
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} \gamma_{l_3(e_3,jj)}^3 \int_{\partial \Omega_{e_3}^3} t_z^3 \phi_{l_3(e_3,jj)} \phi_{l_3(e_3,ii)} \Bigg],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.79',
    section: 'the_z_momentum_equation',
    label: "Bdry 1 (Local, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,4} &= \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{n_{el}^4} \Bigg[ \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} \lambda_{l_4(e_4,jj)}^4 \int_{\partial \Omega_{e_4}^4} \phi_{l_4(e_4,jj)} n_z^4 \phi_{l_4(e_4,ii)}
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} \gamma_{l_4(e_4,jj)}^4 \int_{\partial \Omega_{e_4}^4} t_z^4 \phi_{l_4(e_4,jj)} \phi_{l_4(e_4,ii)} \Bigg].
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.80',
    section: 'the_z_momentum_equation',
    label: "Bdry 2 (Local, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^z &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \mathcal{M}_{e,ii}^{z,0} + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \mathcal{M}_{e_1,ii}^{z,1} + \frac{2\dt}{3} \frac{\sigma^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_z^{1,n}(r_{J1},z_{J1})}{\ca}
&\quad + \frac{2\dt}{3} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a)}{\ca} + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \mathcal{M}_{e_2,ii}^{z,2}
&\quad + \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \mathcal{M}_{e_3,ii}^{z,3} + \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \mathcal{M}_{e_4,ii}^{z,4},
\end{aligned}`,
    description: "We can now re-write the -momentum residual as",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.81',
    section: 'the_z_momentum_equation',
    label: "Bdry 3 (Local, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^{z,1} &= \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \mathcal{M}_{e_1,ii}^{z,1} + \frac{2\dt}{3} \frac{\sigma^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_z^{1,n}(r_{J1},z_{J1})}{\ca}
&\quad + \frac{2\dt}{3} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a)}{\ca},
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.82',
    section: 'the_z_momentum_equation',
    label: "Bdry 4 (Local, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e,ii}^{z,0a} &= -\frac{2\dt St}{3} \int_{\Omega_e} \phi_{l(e,ii)} \hat{g}_z \equiv a_{ii,g_z}(e),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.83',
    section: 'the_z_momentum_equation',
    label: "Gravity (Bdry Numbering, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e,ii}^{z,0b} &= Re \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,jj)} \equiv a_{ii,jj}(e)
&\quad - \frac{4Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)}(t_{n-1}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,jj)} \equiv a_{ii,jj}(e)
&\quad + \frac{Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)}(t_{n-2}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,jj)} \equiv a_{ii,jj}(e)
&\quad + \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \frac{2\dt}{3} \int_{\Omega_e} \partial_r \phi_{l(e,jj)} \partial_r \phi_{l(e,ii)} \equiv a_{ii,jj}^{r,r}(e)
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \int_{\Omega_e} \partial_r \phi_{l(e,ii)} \partial_z \phi_{l(e,jj)} \equiv a_{ii,jj}^{r,z}(e)
&\quad + \frac{4\dt}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \int_{\Omega_e} \partial_z \phi_{l(e,jj)} \partial_z \phi_{l(e,ii)} \equiv a_{ii,jj}^{z,z}(e),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.84',
    section: 'the_z_momentum_equation',
    label: "Visc+Mass (Bdry Num, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e,ii}^{z,0c} &= \frac{2\dt Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} u_{l(e,kk)} \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} \equiv a_{ii,kk,jj}^r(e)
&\quad + \frac{2\dt Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} w_{l(e,kk)} \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} \equiv a_{ii,kk,jj}^z(e)
&\quad - Re \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} \equiv a_{ii,kk,jj}^r(e)
&\quad + \frac{4Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-1}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} \equiv a_{ii,kk,jj}^r(e)
&\quad - \frac{Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-2}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)} \equiv a_{ii,kk,jj}^r(e)
&\quad - Re \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} \equiv a_{ii,kk,jj}^z(e)
&\quad + \frac{4Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-1}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} \equiv a_{ii,kk,jj}^z(e)
&\quad - \frac{Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-2}) \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)} \equiv a_{ii,kk,jj}^z(e),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.85',
    section: 'the_z_momentum_equation',
    label: "Convection (Bdry Num, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e,ii}^{z,0d} &= -\frac{2\dt}{3} \sum_{jj=1}^{n_p^e} p_{l^p(e,jj)} \int_{\Omega_e} \psi_{l^p(e,jj)} \partial_z \phi_{l(e,ii)} \equiv b_{jj,ii}^z(e),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.86',
    section: 'the_z_momentum_equation',
    label: "Pressure (Bdry Num, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e_1,ii}^{z,1} &= \frac{2\dt}{3\ca} \sum_{jj=1}^{n_v^{1,e_1}} \sigma_{l_1(e_1,jj)}^1 \int_{\partial \Omega_{e_1}^1} \phi_{l_1(e_1,jj)}^1 t_z^1 \partial_s \phi_{l_1(e_1,ii)}^1
&\quad - \frac{2\dt}{3} \sum_{jj=1}^{n_v^{1,e_1}} p_{l_1(e_1,jj)}^g \int_{\partial \Omega_{e_1}^1} \phi_{l_1(e_1,ii)}^1 \phi_{l_1(e_1,jj)}^1 n_z^1,
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.87',
    section: 'the_z_momentum_equation',
    label: "Bdry 1 (Bdry Num, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e_2,ii}^{z,2} &= \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2(e_2,jj)} \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)} t_r^2 t_z^2 \phi_{l_2(e_2,jj)}
&\quad + \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2(e_2,jj)} \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)} t_z^2 t_z^2 \phi_{l_2(e_2,jj)}
&\quad - \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2^2(e_2,jj)}^s \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)} \phi_{l_2(e_2,jj)} t_r^2 t_z^2
&\quad - \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2^2(e_2,jj)}^s \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)} \phi_{l_2(e_2,jj)} t_z^2 t_z^2
&\quad - \frac{\dt}{3\ca} \sum_{jj=1}^{n_v^{2,e_2}} \sigma_{l_2^2(e_2,jj)}^2 \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)} t_z^2 \partial_s \phi_{l_2(e_2,jj)}^2
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{2,e_2}} \lambda_{l_2^2(e_2,jj)}^2 \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,jj)} \phi_{l_2(e_2,ii)} n_z^2,
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.88',
    section: 'the_z_momentum_equation',
    label: "Bdry 2 (Bdry Num, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e_3,ii}^{z,3} &= \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} \lambda_{l_3(e_3,jj)}^3 \int_{\partial \Omega_{e_3}^3} \phi_{l_3(e_3,jj)} n_z^3 \phi_{l_3(e_3,ii)} \equiv f_{ii,jj,n_z}(e_3)
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} \gamma_{l_3(e_3,jj)}^3 \int_{\partial \Omega_{e_3}^3} t_z^3 \phi_{l_3(e_3,jj)} \phi_{l_3(e_3,ii)} \equiv f_{ii,jj,t_z}(e_3),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.89',
    section: 'the_z_momentum_equation',
    label: "Bdry 3 (Bdry Num, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e_4,ii}^{z,4} &= \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} \lambda_{l_4(e_4,jj)}^4 \int_{\partial \Omega_{e_4}^4} \phi_{l_4(e_4,jj)} n_z^4 \phi_{l_4(e_4,ii)} \equiv e_{ii,jj,n_z}(e_4)
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} \gamma_{l_4(e_4,jj)}^4 \int_{\partial \Omega_{e_4}^4} t_z^4 \phi_{l_4(e_4,jj)} \phi_{l_4(e_4,ii)} \equiv e_{ii,jj,t_z}(e_4).
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.90',
    section: 'the_z_momentum_equation',
    label: "Bdry 4 (Bdry Num, z)",
    latex: String.raw`\mathcal{M}_{e,ii}^{z,0a} = -\frac{2\dt St}{3} a_{ii,g_z}(e)`,
    description: "Using the notation introduced above and re-arranging terms we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.91',
    section: 'the_z_momentum_equation',
    label: "Gravity (ii Index, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e,ii}^{z,0b} &= \frac{2\dt}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} a_{ii,jj}^{r,z}(e) + \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \frac{2\dt}{3} a_{ii,jj}^{r,r}(e)
&\quad + \frac{4\dt}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} a_{ii,jj}^{z,z}(e) + Re \sum_{jj=1}^{n_v^e} w_{l(e,jj)} a_{ii,jj}(e)
&\quad - \frac{4Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)}(t_{n-1}) a_{ii,jj}(e) + \frac{Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)}(t_{n-2}) a_{ii,jj}(e),
\end{aligned}`,
    description: "Using the notation introduced above and re-arranging terms we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.92',
    section: 'the_z_momentum_equation',
    label: "Visc+Mass (ii Index, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e,ii}^{z,0c} &= \sum_{jj=1}^{n_v^e} Re\, w_{l(e,jj)} \Bigg[ \frac{2\dt}{3} \sum_{kk=1}^{n_v^e} \left( u_{l(e,kk)} a_{ii,kk,jj}^r(e) + w_{l(e,kk)} a_{ii,kk,jj}^z(e) \right)
&\quad - \sum_{kk=1}^{n_v^e} a_{ii,kk,jj}^r(e) \left( r_{l(e,kk)}^c - \frac{4}{3} r_{l(e,kk)}^c(t_{n-1}) + \frac{1}{3} r_{l(e,kk)}^c(t_{n-2}) \right)
&\quad - \sum_{kk=1}^{n_v^e} a_{ii,kk,jj}^z(e) \left( z_{l(e,kk)}^c - \frac{4}{3} z_{l(e,kk)}^c(t_{n-1}) + \frac{1}{3} z_{l(e,kk)}^c(t_{n-2}) \right) \Bigg],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.93',
    section: 'the_z_momentum_equation',
    label: "Convection (ii Index, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e,ii}^{z,0d} &= -\frac{2\dt}{3} \sum_{jj=1}^{n_p^e} p_{l^p(e,jj)} b_{jj,ii}^z(e),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.94',
    section: 'the_z_momentum_equation',
    label: "Pressure (ii Index, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e_1,ii}^{z,1} &= \sum_{jj=1}^{n_v^{1,e_1}} \frac{2\dt}{3} \left( \frac{1}{\ca} \sigma_{l_1(e_1,jj)}^1 c_{jj,ii,t_z}(e_1) - p_{l_1(e_1,jj)}^g c_{ii,jj,n_z}(e_1) \right),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.95',
    section: 'the_z_momentum_equation',
    label: "Bdry 1 (ii Index, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e_2,ii}^{z,2} &= \sum_{jj=1}^{n_v^{2,e_2}} \frac{2\dt}{3} \Bigg[ \be \left( d_{ii,jj,t_r,t_r}(e_2) \{ u_{l_2(e_2,jj)} - u_{l_2^2(e_2,jj)}^s \} \right.
&\quad \left. + d_{ii,jj,t_r,t_z}(e_2) \{ w_{l_2(e_2,jj)} - w_{l_2^2(e_2,jj)}^s \} \right)
&\quad - \frac{1}{2\ca} \sigma_{l_2^2(e_2,jj)}^2 d_{ii,jj,t_z}(e_2) + \lambda_{l_2^2(e_2,jj)}^2 d_{ii,jj,n_z}(e_2) \Bigg],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.96',
    section: 'the_z_momentum_equation',
    label: "Bdry 2 (ii Index, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e_3,ii}^{z,3} &= \sum_{jj=1}^{n_v^{3,e_3}} \frac{2\dt}{3} \left( \lambda_{l_3(e_3,jj)}^3 f_{ii,jj,n_z}(e_3) + \gamma_{l_3(e_3,jj)}^3 f_{ii,jj,t_z}(e_3) \right),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.97',
    section: 'the_z_momentum_equation',
    label: "Bdry 3 (ii Index, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e_4,ii}^{z,4} &= \sum_{jj=1}^{n_v^{4,e_4}} \frac{2\dt}{3} \left( \lambda_{l_4(e_4,jj)}^4 e_{ii,jj,n_z}(e_4) + \gamma_{l_4(e_4,jj)}^4 e_{ii,jj,t_z}(e_4) \right).
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.98',
    section: 'the_z_momentum_equation',
    label: "Bdry 4 (ii Index, z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_i^z &= \sum_{e=1}^{n_{el}} \mathcal{M}_{e,ii}^{z,0a} + \sum_{e=1}^{n_{el}} \mathcal{M}_{e,ii}^{z,0b} + \sum_{e=1}^{n_{el}} \mathcal{M}_{e,ii}^{z,0c} + \sum_{e=1}^{n_{el}} \mathcal{M}_{e,ii}^{z,0d} + \sum_{e_1=1}^{n_{el}^1} \mathcal{M}_{e_1,ii}^{z,1}
&\quad + \frac{2\dt}{3} \frac{\sigma^1(r_{j1},z_{j1}) \phi_i(r_{j1},z_{j1}) m_z^{1,n}(r_{j1},z_{j1})}{\ca}
&\quad + \frac{2\dt}{3} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a)}{\ca}
&\quad + \sum_{e_2=1}^{n_{el}^2} \mathcal{M}_{e_2,ii}^{z,2} + \sum_{e_3=1}^{n_{el}^3} \mathcal{M}_{e_3,ii}^{z,3} + \sum_{e_4=1}^{n_{el}^4} \mathcal{M}_{e_4,ii}^{z,4},
\end{aligned}`,
    description: "And Finally, we summarise the -momentum residual as",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.99',
    section: 'the_z_momentum_equation',
    label: "Full Decomposition (z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e,ii}^{z,0a} &= -\frac{2\dt St}{3} a_{ii,g_z}(e),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.100',
    section: 'the_z_momentum_equation',
    label: "M^{z,1} Boundary",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e,ii}^{z,0b} &= \sum_{jj=1}^{n_v^e} \frac{2\dt}{3} \left[ u_{l(e,jj)} a_{ii,jj}^{r,z}(e) + w_{l(e,jj)} \left( a_{ii,jj}^{r,r}(e) + 2 a_{ii,jj}^{z,z}(e) \right) \right]
&\quad + \sum_{jj=1}^{n_v^e} Re\, a_{ii,jj}(e) \left[ w_{l(e,jj)} - \frac{4}{3} w_{l(e,jj)}(t_{n-1}) + \frac{1}{3} w_{l(e,jj)}(t_{n-2}) \right],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.101',
    section: 'the_z_momentum_equation',
    label: "Gravity Integral (z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e,ii}^{z,0c} &= \sum_{jj=1}^{n_v^e} Re\, w_{l(e,jj)} \Bigg[ \frac{2\dt}{3} \sum_{kk=1}^{n_v^e} \left( u_{l(e,kk)} a_{ii,kk,jj}^r(e) + w_{l(e,kk)} a_{ii,kk,jj}^z(e) \right)
&\quad - \sum_{kk=1}^{n_v^e} a_{ii,kk,jj}^r(e) \left( r_{l(e,kk)}^c - \frac{4}{3} r_{l(e,kk)}^c(t_{n-1}) + \frac{1}{3} r_{l(e,kk)}^c(t_{n-2}) \right)
&\quad - \sum_{kk=1}^{n_v^e} a_{ii,kk,jj}^z(e) \left( z_{l(e,kk)}^c - \frac{4}{3} z_{l(e,kk)}^c(t_{n-1}) + \frac{1}{3} z_{l(e,kk)}^c(t_{n-2}) \right) \Bigg],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.102',
    section: 'the_z_momentum_equation',
    label: "Viscous+Mass Integrals (z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e,ii}^{z,0d} &= \sum_{jj=1}^{n_p^e} \frac{2\dt}{3} p_{l^p(e,jj)} b_{jj,ii}^z(e),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.103',
    section: 'the_z_momentum_equation',
    label: "Convection Integrals (z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e_1,ii}^{z,1} &= \sum_{jj=1}^{n_v^{1,e_1}} \frac{2\dt}{3} \left( \frac{1}{\ca} \sigma_{l_1(e_1,jj)}^1 c_{jj,ii,t_z}(e_1) - p_{l_1(e_1,jj)}^g c_{ii,jj,n_z}(e_1) \right),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.104',
    section: 'the_z_momentum_equation',
    label: "Pressure Integral (z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e_2,ii}^{z,2} &= \sum_{jj=1}^{n_v^{2,e_2}} \frac{2\dt}{3} \Bigg[ \be \left( d_{ii,jj,t_r,t_r}(e_2) \{ u_{l_2(e_2,jj)} - u_{l_2^2(e_2,jj)}^s \} \right.
&\quad \left. + d_{ii,jj,t_r,t_z}(e_2) \{ w_{l_2(e_2,jj)} - w_{l_2^2(e_2,jj)}^s \} \right)
&\quad - \frac{1}{2\ca} \sigma_{l_2^2(e_2,jj)}^2 d_{ii,jj,t_z}(e_2) + \lambda_{l_2^2(e_2,jj)}^2 d_{ii,jj,n_z}(e_2) \Bigg],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.105',
    section: 'the_z_momentum_equation',
    label: "Bdry 1 Integrals (z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e_3,ii}^{z,3} &= \sum_{jj=1}^{n_v^{3,e_3}} \frac{2\dt}{3} \left( \lambda_{l_3(e_3,jj)}^3 f_{ii,jj,n_z}(e_3) + \gamma_{l_3(e_3,jj)}^3 f_{ii,jj,t_z}(e_3) \right),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.106',
    section: 'the_z_momentum_equation',
    label: "Bdry 2 Integrals (z)",
    latex: String.raw`\begin{aligned}
\mathcal{M}_{e_4,ii}^{z,4} &= \sum_{jj=1}^{n_v^{4,e_4}} \frac{2\dt}{3} \left( \lambda_{l_4(e_4,jj)}^4 e_{ii,jj,n_z}(e_4) + \gamma_{l_4(e_4,jj)}^4 e_{ii,jj,t_z}(e_4) \right).
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.107',
    section: 'derivatives_of_m_i_z_with_respect_to_u_q',
    label: "\u2202M^{z}/\u2202u",
    latex: String.raw`\begin{aligned}
\partial_{u_q}\mathcal{M}_i^z &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{u_q} \mathcal{M}_{e,ii}^{z,0a} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{u_q} \mathcal{M}_{e,ii}^{z,0b} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{u_q} \mathcal{M}_{e,ii}^{z,0c} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{u_q} \mathcal{M}_{e,ii}^{z,0d}
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{u_q} \mathcal{M}_{e_1,ii}^{z,1} + \frac{2\dt}{3} \partial_{u_q} \frac{\sigma^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_z^{1,n}(r_{J1},z_{J1})}{\ca}
&\quad + \frac{2\dt}{3} \partial_{u_q} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a)}{\ca}
&\quad + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{u_q} \mathcal{M}_{e_2,ii}^{z,2} + \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \partial_{u_q} \mathcal{M}_{e_3,ii}^{z,3} + \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \partial_{u_q} \mathcal{M}_{e_4,ii}^{z,4},
\end{aligned}`,
    description: "",
    references: ["5.98"],
    transform: "From (5.98)",
    hidden: false,
  },
  {
    id: '5.108',
    section: 'derivatives_of_m_i_z_with_respect_to_u_q',
    label: "\u2202M^{z}/\u2202u",
    latex: String.raw`\partial_{u_q}\mathcal{M}_i^z = \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{u_q} \mathcal{M}_{e,ii}^{z,0b} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{u_q} \mathcal{M}_{e,ii}^{z,0c} + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{u_q} \mathcal{M}_{e_2,ii}^{z,2}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.109',
    section: 'derivatives_of_m_i_z_with_respect_to_u_q',
    label: "\u2202M^{z,0b}/\u2202u",
    latex: String.raw`\begin{aligned}
\partial_{u_q}\mathcal{M}_{e,ii}^{z,0b} &= \frac{2\dt}{3} \sum_{jj=1}^{n_v^e} a_{ii,jj}^{r,z}(e) \partial_{u_q} u_{l(e,jj)} + \sum_{jj=1}^{n_v^e} \frac{2\dt}{3} a_{ii,jj}^{r,r}(e) \partial_{u_q} w_{l(e,jj)}
&\quad + \frac{4\dt}{3} \sum_{jj=1}^{n_v^e} a_{ii,jj}^{z,z}(e) \partial_{u_q} w_{l(e,jj)} + Re \sum_{jj=1}^{n_v^e} a_{ii,jj}(e) \partial_{u_q} w_{l(e,jj)}
&\quad - \frac{4Re}{3} \sum_{jj=1}^{n_v^e} a_{ii,jj}(e) \partial_{u_q} w_{l(e,jj)}(t_{n-1}) + \frac{Re}{3} \sum_{jj=1}^{n_v^e} a_{ii,jj}(e) \partial_{u_q} w_{l(e,jj)}(t_{n-2}),
\end{aligned}`,
    description: "",
    references: ["5.91"],
    transform: "From (5.91)",
    hidden: false,
  },
  {
    id: '5.110',
    section: 'derivatives_of_m_i_z_with_respect_to_u_q',
    label: "\u2202M^{z,0b}/\u2202u",
    latex: String.raw`\partial_{u_q}\mathcal{M}_{e,ii}^{z,0b} = \frac{2\dt}{3} a_{ii,jj}^{r,z}(e) \big|_{q=l(e,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.111',
    section: 'derivatives_of_m_i_z_with_respect_to_u_q',
    label: "\u2202M^{z,0c}/\u2202u",
    latex: String.raw`\begin{aligned}
\partial_{u_q}\mathcal{M}_{e,ii}^{z,0c} &= \frac{2\dt Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} \partial_{u_q} u_{l(e,kk)} a_{ii,kk,jj}^r(e)
&\quad + \frac{2\dt Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} \partial_{u_q} w_{l(e,kk)} a_{ii,kk,jj}^z(e)
&\quad - Re \sum_{jj=1}^{n_v^e} \partial_{u_q} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c a_{ii,kk,jj}^r(e)
&\quad + \frac{4Re}{3} \sum_{jj=1}^{n_v^e} \partial_{u_q} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-1}) a_{ii,kk,jj}^r(e)
&\quad - \frac{Re}{3} \sum_{jj=1}^{n_v^e} \partial_{u_q} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-2}) a_{ii,kk,jj}^r(e)
&\quad - Re \sum_{jj=1}^{n_v^e} \partial_{u_q} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c a_{ii,kk,jj}^z(e)
&\quad + \frac{4Re}{3} \sum_{jj=1}^{n_v^e} \partial_{u_q} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-1}) a_{ii,kk,jj}^z(e)
&\quad - \frac{Re}{3} \sum_{jj=1}^{n_v^e} \partial_{u_q} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-2}) a_{ii,kk,jj}^z(e),
\end{aligned}`,
    description: "",
    references: ["5.92"],
    transform: "From (5.92)",
    hidden: false,
  },
  {
    id: '5.112',
    section: 'derivatives_of_m_i_z_with_respect_to_u_q',
    label: "\u2202M^{z,0c}/\u2202u",
    latex: String.raw`\partial_{u_q}\mathcal{M}_{e,ii}^{z,0c} = \frac{2\dt Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} a_{ii,kk,jj}^r(e) \big|_{q=l(e,kk)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.113',
    section: 'derivatives_of_m_i_z_with_respect_to_u_q',
    label: "\u2202M^{z,2}/\u2202u",
    latex: String.raw`\begin{aligned}
\partial_{u_q}\mathcal{M}_{e_2,ii}^{z,2} &= \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_z}(e_2) \partial_{u_q} u_{l_2(e_2,jj)}
&\quad + \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_z,t_z}(e_2) \partial_{u_q} w_{l_2(e_2,jj)}
&\quad - \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_z}(e_2) \partial_{u_q} u_{l_2^2(e_2,jj)}^s
&\quad - \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_z,t_z}(e_2) \partial_{u_q} w_{l_2^2(e_2,jj)}^s
&\quad - \frac{\dt}{3\ca} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_z}^s(e_2) \partial_{u_q} \sigma_{l_2^2(e_2,jj)}^2 + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,n_z}(e_2) \partial_{u_q} \lambda_{l_2^2(e_2,jj)}^2,
\end{aligned}`,
    description: "",
    references: ["5.95"],
    transform: "From (5.95)",
    hidden: false,
  },
  {
    id: '5.114',
    section: 'derivatives_of_m_i_z_with_respect_to_u_q',
    label: "\u2202M^{z,2}/\u2202u",
    latex: String.raw`\partial_{u_q}\mathcal{M}_{e_2,ii}^{z,2} = \frac{2\dt \be}{3} d_{ii,jj,t_r,t_z}(e_2) \big|_{q=l_2(e_2,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.115',
    section: 'derivatives_of_m_i_z_with_respect_to_w_q',
    label: "\u2202M^{z}/\u2202w",
    latex: String.raw`\begin{aligned}
\partial_{w_q}\mathcal{M}_i^z &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{w_q} \mathcal{M}_{e,ii}^{z,0a} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{w_q} \mathcal{M}_{e,ii}^{z,0b} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{w_q} \mathcal{M}_{e,ii}^{z,0c} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{w_q} \mathcal{M}_{e,ii}^{z,0d}
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{w_q} \mathcal{M}_{e_1,ii}^{z,1} + \frac{2\dt}{3} \partial_{w_q} \frac{\sigma^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_z^{1,n}(r_{J1},z_{J1})}{\ca}
&\quad + \frac{2\dt}{3} \partial_{w_q} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a)}{\ca}
&\quad + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{w_q} \mathcal{M}_{e_2,ii}^{z,2} + \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \partial_{w_q} \mathcal{M}_{e_3,ii}^{z,3} + \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \partial_{w_q} \mathcal{M}_{e_4,ii}^{z,4},
\end{aligned}`,
    description: "",
    references: ["5.98"],
    transform: "From (5.98)",
    hidden: false,
  },
  {
    id: '5.116',
    section: 'derivatives_of_m_i_z_with_respect_to_w_q',
    label: "\u2202M^{z}/\u2202w",
    latex: String.raw`\partial_{w_q}\mathcal{M}_i^z = \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{w_q} \mathcal{M}_{e,ii}^{z,0b} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{w_q} \mathcal{M}_{e,ii}^{z,0c} + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{w_q} \mathcal{M}_{e_2,ii}^{z,2}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.117',
    section: 'derivatives_of_m_i_z_with_respect_to_w_q',
    label: "\u2202M^{z,0b}/\u2202w",
    latex: String.raw`\begin{aligned}
\partial_{w_q}\mathcal{M}_{e,ii}^{z,0b} &= \frac{2\dt}{3} \sum_{jj=1}^{n_v^e} a_{ii,jj}^{r,z}(e) \partial_{w_q} u_{l(e,jj)} + \sum_{jj=1}^{n_v^e} \frac{2\dt}{3} a_{ii,jj}^{r,r}(e) \partial_{w_q} w_{l(e,jj)}
&\quad + \frac{4\dt}{3} \sum_{jj=1}^{n_v^e} a_{ii,jj}^{z,z}(e) \partial_{w_q} w_{l(e,jj)} + Re \sum_{jj=1}^{n_v^e} a_{ii,jj}(e) \partial_{w_q} w_{l(e,jj)}
&\quad - \frac{4Re}{3} \sum_{jj=1}^{n_v^e} a_{ii,jj}(e) \partial_{w_q} w_{l(e,jj)}(t_{n-1}) + \frac{Re}{3} \sum_{jj=1}^{n_v^e} a_{ii,jj}(e) \partial_{w_q} w_{l(e,jj)}(t_{n-2}),
\end{aligned}`,
    description: "",
    references: ["5.91"],
    transform: "From (5.91)",
    hidden: false,
  },
  {
    id: '5.118',
    section: 'derivatives_of_m_i_z_with_respect_to_w_q',
    label: "\u2202M^{z,0b}/\u2202w",
    latex: String.raw`\partial_{w_q}\mathcal{M}_{e,ii}^{z,0b} = \frac{2\dt}{3} a_{ii,jj}^{r,r}(e) \big|_{q=l(e,jj)} + \frac{4\dt}{3} a_{ii,jj}^{z,z}(e) \big|_{q=l(e,jj)} + Re\, a_{ii,jj}(e) \big|_{q=l(e,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.119',
    section: 'derivatives_of_m_i_z_with_respect_to_w_q',
    label: "\u2202M^{z,0b}/\u2202w",
    latex: String.raw`\partial_{w_q}\mathcal{M}_{e,ii}^{z,0b} = \frac{2\dt}{3} \left( Re\, a_{ii,jj}(e) + a_{ii,jj}^{r,r}(e) + 2 a_{ii,jj}^{z,z}(e) \right) \big|_{q=l(e,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.120',
    section: 'derivatives_of_m_i_z_with_respect_to_w_q',
    label: "\u2202M^{z,0c}/\u2202w",
    latex: String.raw`\begin{aligned}
\partial_{w_q}\mathcal{M}_{e,ii}^{z,0c} &= \frac{2\dt Re}{3} \sum_{jj=1}^{n_v^e} \partial_{w_q} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} u_{l(e,kk)} a_{ii,kk,jj}^r(e)
&\quad + \frac{2\dt Re}{3} \sum_{jj=1}^{n_v^e} \partial_{w_q} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} w_{l(e,kk)} a_{ii,kk,jj}^z(e)
&\quad + \frac{2\dt Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} \partial_{w_q} w_{l(e,kk)} a_{ii,kk,jj}^z(e)
&\quad - Re \sum_{jj=1}^{n_v^e} \partial_{w_q} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c a_{ii,kk,jj}^r(e)
&\quad + \frac{4Re}{3} \sum_{jj=1}^{n_v^e} \partial_{w_q} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-1}) a_{ii,kk,jj}^r(e)
&\quad - \frac{Re}{3} \sum_{jj=1}^{n_v^e} \partial_{w_q} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-2}) a_{ii,kk,jj}^r(e)
&\quad - Re \sum_{jj=1}^{n_v^e} \partial_{w_q} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c a_{ii,kk,jj}^z(e)
&\quad + \frac{4Re}{3} \sum_{jj=1}^{n_v^e} \partial_{w_q} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-1}) a_{ii,kk,jj}^z(e)
&\quad - \frac{Re}{3} \sum_{jj=1}^{n_v^e} \partial_{w_q} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-2}) a_{ii,kk,jj}^z(e),
\end{aligned}`,
    description: "",
    references: ["5.92"],
    transform: "From (5.92)",
    hidden: false,
  },
  {
    id: '5.121',
    section: 'derivatives_of_m_i_z_with_respect_to_w_q',
    label: "\u2202M^{z,0c}/\u2202w",
    latex: String.raw`\begin{aligned}
\partial_{w_q}\mathcal{M}_{e,ii}^{z,0c} &= \frac{2\dt Re}{3} \sum_{kk=1}^{n_v^e} \big|_{q=l(e,jj)} u_{l(e,kk)} a_{ii,kk,jj}^r(e) + \frac{2\dt Re}{3} \sum_{kk=1}^{n_v^e} \big|_{q=l(e,jj)} w_{l(e,kk)} a_{ii,kk,jj}^z(e)
&\quad + \frac{2\dt Re}{3} \sum_{jj=1}^{n_v^e} \big|_{q=l(e,kk)} w_{l(e,jj)} a_{ii,kk,jj}^z(e)
&\quad - Re \sum_{kk=1}^{n_v^e} \big|_{q=l(e,jj)} r_{l(e,kk)}^c a_{ii,kk,jj}^r(e)
&\quad + \frac{4Re}{3} \sum_{kk=1}^{n_v^e} \big|_{q=l(e,jj)} r_{l(e,kk)}^c(t_{n-1}) a_{ii,kk,jj}^r(e) - \frac{Re}{3} \sum_{kk=1}^{n_v^e} \big|_{q=l(e,jj)} r_{l(e,kk)}^c(t_{n-2}) a_{ii,kk,jj}^r(e)
&\quad - Re \sum_{kk=1}^{n_v^e} \big|_{q=l(e,jj)} z_{l(e,kk)}^c a_{ii,kk,jj}^z(e)
&\quad + \frac{4Re}{3} \sum_{kk=1}^{n_v^e} \big|_{q=l(e,jj)} z_{l(e,kk)}^c(t_{n-1}) a_{ii,kk,jj}^z(e) - \frac{Re}{3} \sum_{kk=1}^{n_v^e} \big|_{q=l(e,jj)} z_{l(e,kk)}^c(t_{n-2}) a_{ii,kk,jj}^z(e),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.122',
    section: 'derivatives_of_m_i_z_with_respect_to_w_q',
    label: "\u2202M^{z,0c}/\u2202w",
    latex: String.raw`\begin{aligned}
\partial_{w_q}\mathcal{M}_{e,ii}^{z,0c} &= \sum_{jj=1}^{n_v^e} \Bigg[ \frac{2\dt Re}{3} \sum_{\substack{kk=1\\ q=l(e,jj)}}^{n_v^e} w_{l(e,jj)} a_{ii,kk,jj}^z(e)
&\quad + \frac{2\dt Re}{3} \sum_{\substack{kk=1\\ q=l(e,jj)}}^{n_v^e} \left( u_{l(e,kk)} a_{ii,kk,jj}^r(e) + w_{l(e,kk)} a_{ii,kk,jj}^z(e) \right)
&\quad - Re \sum_{\substack{kk=1\\ q=l(e,jj)}}^{n_v^e} a_{ii,kk,jj}^r(e) \left( r_{l(e,kk)}^c - \frac{4}{3} r_{l(e,kk)}^c(t_{n-1}) + \frac{1}{3} r_{l(e,kk)}^c(t_{n-2}) \right)
&\quad - Re \sum_{\substack{kk=1\\ q=l(e,jj)}}^{n_v^e} a_{ii,kk,jj}^z(e) \left( z_{l(e,kk)}^c - \frac{4}{3} z_{l(e,kk)}^c(t_{n-1}) - \frac{1}{3} z_{l(e,kk)}^c(t_{n-2}) \right) \Bigg].
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.123',
    section: 'derivatives_of_m_i_z_with_respect_to_w_q',
    label: "\u2202M^{z,2}/\u2202w",
    latex: String.raw`\begin{aligned}
\partial_{w_q}\mathcal{M}_{e_2,ii}^{z,2} &= \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_z}(e_2) \partial_{w_q} u_{l_2(e_2,jj)}
&\quad + \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_z,t_z}(e_2) \partial_{w_q} w_{l_2(e_2,jj)}
&\quad - \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_z}(e_2) \partial_{w_q} u_{l_2^2(e_2,jj)}^s
&\quad - \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_z,t_z}(e_2) \partial_{w_q} w_{l_2^2(e_2,jj)}^s
&\quad - \frac{\dt}{3\ca} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_z}^s(e_2) \partial_{w_q} \sigma_{l_2^2(e_2,jj)}^2 + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,n_z}(e_2) \partial_{w_q} \lambda_{l_2^2(e_2,jj)}^2,
\end{aligned}`,
    description: "",
    references: ["5.95"],
    transform: "From (5.95)",
    hidden: false,
  },
  {
    id: '5.124',
    section: 'derivatives_of_m_i_z_with_respect_to_w_q',
    label: "\u2202M^{z,2}/\u2202w",
    latex: String.raw`\partial_{w_q}\mathcal{M}_{e_2,ii}^{z,2} = \frac{2\dt \be}{3} d_{ii,jj,t_z,t_z}(e_2) \big|_{q=l_2(e_2,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.125',
    section: 'derivatives_of_m_i_z_with_respect_to_p_q',
    label: "\u2202M^{z}/\u2202p",
    latex: String.raw`\begin{aligned}
\partial_{p_q}\mathcal{M}_i^z &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{p_q} \mathcal{M}_{e,ii}^{z,0a} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{p_q} \mathcal{M}_{e,ii}^{z,0b} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{p_q} \mathcal{M}_{e,ii}^{z,0c} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{p_q} \mathcal{M}_{e,ii}^{z,0d}
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{p_q} \mathcal{M}_{e_1,ii}^{z,1} + \frac{2\dt}{3} \partial_{p_q} \frac{\sigma^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_z^{1,n}(r_{J1},z_{J1})}{\ca}
&\quad + \frac{2\dt}{3} \partial_{p_q} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a)}{\ca}
&\quad + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{p_q} \mathcal{M}_{e_2,ii}^{z,2} + \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \partial_{p_q} \mathcal{M}_{e_3,ii}^{z,3} + \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \partial_{p_q} \mathcal{M}_{e_4,ii}^{z,4},
\end{aligned}`,
    description: "",
    references: ["5.98"],
    transform: "From (5.98)",
    hidden: false,
  },
  {
    id: '5.126',
    section: 'derivatives_of_m_i_z_with_respect_to_p_q',
    label: "\u2202M^{z}/\u2202p",
    latex: String.raw`\partial_{p_q}\mathcal{M}_i^z = \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{p_q} \mathcal{M}_{e,ii}^{z,0d}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.127',
    section: 'derivatives_of_m_i_z_with_respect_to_p_q',
    label: "\u2202M^{z,0d}/\u2202p",
    latex: String.raw`\partial_{p_q}\mathcal{M}_{e,ii}^{z,0d} = -\frac{2\dt}{3} \sum_{jj=1}^{n_p^e} b_{jj,ii}^z(e) \partial_{p_q} p_{l^p(e,jj)}`,
    description: "",
    references: ["5.93"],
    transform: "From (5.93)",
    hidden: false,
  },
  {
    id: '5.128',
    section: 'derivatives_of_m_i_z_with_respect_to_p_q',
    label: "\u2202M^{z,0d}/\u2202p",
    latex: String.raw`\partial_{p_q}\mathcal{M}_{e,ii}^{z,0d} = -\frac{2\dt}{3} b_{jj,ii}^z(e) \big|_{q=l^p(e,jj)}`,
    description: "",
    references: ["5.93"],
    transform: "From (5.93)",
    hidden: false,
  },
  {
    id: '5.129',
    section: 'derivatives_of_m_i_z_with_respect_to_sig',
    label: "\u2202M^{z}/\u2202\u03c3^1",
    latex: String.raw`\begin{aligned}
\partial_{\sigma_q^1}\mathcal{M}_i^z &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\sigma_q^1} \mathcal{M}_{e,ii}^{z,0a} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\sigma_q^1} \mathcal{M}_{e,ii}^{z,0b} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\sigma_q^1} \mathcal{M}_{e,ii}^{z,0c} + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{\sigma_q^1} \mathcal{M}_{e_1,ii}^{z,0d}
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{\sigma_q^1} \mathcal{M}_{e_1,ii}^{z,1} + \frac{2\dt}{3} \partial_{\sigma_q^1} \frac{\sigma^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_z^{1,n}(r_{J1},z_{J1})}{\ca}
&\quad + \frac{2\dt}{3} \partial_{\sigma_q^1} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a)}{\ca}
&\quad + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{\sigma_q^1} \mathcal{M}_{e_2,ii}^{z,2} + \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \partial_{\sigma_q^1} \mathcal{M}_{e_3,ii}^{z,3} + \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \partial_{\sigma_q^1} \mathcal{M}_{e_4,ii}^{z,4},
\end{aligned}`,
    description: "",
    references: ["5.93", "5.98"],
    transform: "From (5.93), (5.98)",
    hidden: false,
  },
  {
    id: '5.130',
    section: 'derivatives_of_m_i_z_with_respect_to_sig',
    label: "\u2202M^{z}/\u2202\u03c3^1",
    latex: String.raw`\begin{aligned}
\partial_{\sigma_q^1}\mathcal{M}_i^z &= \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{\sigma_q^1} \mathcal{M}_{e_1,ii}^{z,1}
&\quad + \frac{2\dt}{3} \frac{\phi_i(r_{J1},z_{J1}) m_z^{1,n}(r_{J1},z_{J1})}{\ca} \partial_{\sigma_q^1} \sigma^1(r_{J1},z_{J1})
&\quad + \frac{2\dt}{3} \frac{\phi_i(r_a,z_a) m_z^{1}(r_a,z_a)}{\ca} \partial_{\sigma_q^1} \sigma^1(r_a,z_a),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.131',
    section: 'derivatives_of_m_i_z_with_respect_to_sig',
    label: "\u2202M^{z}/\u2202\u03c3^1",
    latex: String.raw`\begin{aligned}
\partial_{\sigma_q^1}\mathcal{M}_i^z &= \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{\sigma_q^1} \mathcal{M}_{e_1,ii}^{z,1}
&\quad + \frac{2\dt}{3} \frac{\phi_i(r_{J1},z_{J1}) m_z^{1,n}(r_{J1},z_{J1})}{\ca} \big|_{q=J1} + \frac{2\dt}{3} \frac{\phi_i(r_a,z_a) m_z^{1}(r_a,z_a)}{\ca} \big|_{q=a}.
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.132',
    section: 'derivatives_of_m_i_z_with_respect_to_sig',
    label: "\u2202M^{z,1}/\u2202\u03c3^1",
    latex: String.raw`\begin{aligned}
\partial_{\sigma_q^1}\mathcal{M}_{e_1,ii}^{z,1} &= \frac{2\dt}{3\ca} \sum_{jj=1}^{n_v^{1,e_1}} c_{jj,ii,t_z}^s \partial_{\sigma_q^1} \sigma_{l_1(e_1,jj)}^1 - \frac{2\dt}{3} \sum_{jj=1}^{n_v^{1,e_1}} c_{ii,jj,n_z}(e_1) \partial_{\sigma_q^1} p_{l_1(e_1,jj)}^g,
\end{aligned}`,
    description: "",
    references: ["5.94"],
    transform: "From (5.94)",
    hidden: false,
  },
  {
    id: '5.133',
    section: 'derivatives_of_m_i_z_with_respect_to_sig',
    label: "\u2202M^{z,1}/\u2202\u03c3^1",
    latex: String.raw`\partial_{\sigma_q^1}\mathcal{M}_{e_1,ii}^{z,1} = \frac{2\dt}{3\ca} c_{jj,ii,t_z}^s \big|_{q=l_1(e_1,jj)}`,
    description: "",
    references: ["5.94"],
    transform: "From (5.94)",
    hidden: false,
  },
  {
    id: '5.134',
    section: 'derivatives_of_m_i_z_with_respect_to_var',
    label: "\u2202M^{z}/\u2202\u03b5^2",
    latex: String.raw`\begin{aligned}
\partial_{\varepsilon_q^2}\mathcal{M}_i^z &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\varepsilon_q^2} \mathcal{M}_{e,ii}^{z,0a} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\varepsilon_q^2} \mathcal{M}_{e,ii}^{z,0b} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\varepsilon_q^2} \mathcal{M}_{e,ii}^{z,0c} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\varepsilon_q^2} \mathcal{M}_{e,ii}^{z,0d}
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{\varepsilon_q^2} \mathcal{M}_{e_1,ii}^{z,1} + \frac{2\dt}{3} \partial_{\varepsilon_q^2} \frac{\sigma^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_z^{1,n}(r_{J1},z_{J1})}{\ca}
&\quad + \frac{2\dt}{3} \partial_{\varepsilon_q^2} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a)}{\ca}
&\quad + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{\varepsilon_q^2} \mathcal{M}_{e_2,ii}^{z,2} + \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \partial_{\varepsilon_q^2} \mathcal{M}_{e_3,ii}^{z,3} + \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \partial_{\varepsilon_q^2} \mathcal{M}_{e_4,ii}^{z,4},
\end{aligned}`,
    description: "",
    references: ["5.94", "5.98"],
    transform: "From (5.94), (5.98)",
    hidden: false,
  },
  {
    id: '5.135',
    section: 'derivatives_of_m_i_z_with_respect_to_var',
    label: "\u2202M^{z}/\u2202\u03b5^2",
    latex: String.raw`\partial_{\varepsilon_q^2}\mathcal{M}_i^z = \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{\varepsilon_q^2} \mathcal{M}_{e_2,ii}^{z,2}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.136',
    section: 'derivatives_of_m_i_z_with_respect_to_var',
    label: "\u2202M^{z,2}/\u2202\u03b5^2",
    latex: String.raw`\begin{aligned}
\partial_{\varepsilon_q^2}\mathcal{M}_{e_2,ii}^{z,2} &= \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_z}(e_2) \partial_{\varepsilon_q^2} u_{l_2(e_2,jj)}
&\quad + \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_z,t_z}(e_2) \partial_{\varepsilon_q^2} w_{l_2(e_2,jj)}
&\quad - \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_z}(e_2) \partial_{\varepsilon_q^2} u_{l_2^2(e_2,jj)}^s
&\quad - \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_z,t_z}(e_2) \partial_{\varepsilon_q^2} w_{l_2^2(e_2,jj)}^s
&\quad - \frac{\dt}{3\ca} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_z}^s(e_2) \partial_{\varepsilon_q^2} \sigma_{l_2^2(e_2,jj)}^2 + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,n_z}(e_2) \partial_{\varepsilon_q^2} \lambda_{l_2^2(e_2,jj)}^2,
\end{aligned}`,
    description: "Which yields From equation (5.95) we have",
    references: ["5.95"],
    transform: "From (5.95)",
    hidden: false,
  },
  {
    id: '5.137',
    section: 'derivatives_of_m_i_z_with_respect_to_var',
    label: "\u2202M^{z,2}/\u2202\u03b5^2",
    latex: String.raw`\partial_{\varepsilon_q^2}\mathcal{M}_{e_2,ii}^{z,2} = -\frac{\dt}{3\ca} d_{ii,jj,t_z}^s(e_2) \big|_{q=l_2^2(e_2,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.138',
    section: 'derivatives_of_m_i_z_with_respect_to_var',
    label: "\u2202M^{z}/\u2202\u03c9^2",
    latex: String.raw`\begin{aligned}
\partial_{\varpi_q^2}\mathcal{M}_i^z &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\varpi_q^2} \mathcal{M}_{e,ii}^{z,0a} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\varpi_q^2} \mathcal{M}_{e,ii}^{z,0b} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\varpi_q^2} \mathcal{M}_{e,ii}^{z,0c} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\varpi_q^2} \mathcal{M}_{e,ii}^{z,0d}
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{\varpi_q^2} \mathcal{M}_{e_1,ii}^{z,1} + \frac{2\dt}{3} \partial_{\varpi_q^2} \frac{\sigma^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_z^{1,n}(r_{J1},z_{J1})}{\ca}
&\quad + \frac{2\dt}{3} \partial_{\varpi_q^2} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a)}{\ca}
&\quad + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{\varpi_q^2} \mathcal{M}_{e_2,ii}^{z,2} + \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \partial_{\varpi_q^2} \mathcal{M}_{e_3,ii}^{z,3} + \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \partial_{\varpi_q^2} \mathcal{M}_{e_4,ii}^{z,4},
\end{aligned}`,
    description: "",
    references: ["5.98"],
    transform: "From (5.98)",
    hidden: false,
  },
  {
    id: '5.139',
    section: 'derivatives_of_m_i_z_with_respect_to_var',
    label: "\u2202M^{z}/\u2202\u03c9^2",
    latex: String.raw`\partial_{\varpi_q^2}\mathcal{M}_i^z = \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{\varpi_q^2} \mathcal{M}_{e_2,ii}^{z,2}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.140',
    section: 'derivatives_of_m_i_z_with_respect_to_var',
    label: "\u2202M^{z,2}/\u2202\u03c9^2",
    latex: String.raw`\begin{aligned}
\partial_{\varpi_q^2}\mathcal{M}_{e_2,ii}^{z,2} &= \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_z}(e_2) \partial_{\varpi_q^2} u_{l_2(e_2,jj)}
&\quad + \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_z,t_z}(e_2) \partial_{\varpi_q^2} w_{l_2(e_2,jj)}
&\quad - \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_r,t_z}(e_2) \partial_{\varpi_q^2} u_{l_2^2(e_2,jj)}^s
&\quad - \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_z,t_z}(e_2) \partial_{\varpi_q^2} w_{l_2^2(e_2,jj)}^s
&\quad - \frac{\dt}{3\ca} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,t_z}^s(e_2) \partial_{\varpi_q^2} \sigma_{l_2^2(e_2,jj)}^2 + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{2,e_2}} d_{ii,jj,n_z}(e_2) \partial_{\varpi_q^2} \lambda_{l_2^2(e_2,jj)}^2,
\end{aligned}`,
    description: "Which yields From equation (5.95) we have",
    references: ["5.95"],
    transform: "From (5.95)",
    hidden: false,
  },
  {
    id: '5.141',
    section: 'derivatives_of_m_i_z_with_respect_to_var',
    label: "\u2202M^{z,2}/\u2202\u03c9^2",
    latex: String.raw`\partial_{\varpi_q^2}\mathcal{M}_{e_2,ii}^{z,2} = \frac{2\dt}{3} d_{ii,jj,n_z}(e_2) \big|_{q=l_2^2(e_2,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.142',
    section: 'derivatives_of_m_i_z_with_respect_to_lam',
    label: "\u2202M^{z}/\u2202\u03bb^3",
    latex: String.raw`\begin{aligned}
\partial_{\lambda_q^3}\mathcal{M}_i^z &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\lambda_q^3} \mathcal{M}_{e,ii}^{z,0a} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\lambda_q^3} \mathcal{M}_{e,ii}^{z,0b} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\lambda_q^3} \mathcal{M}_{e,ii}^{z,0c} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\lambda_q^3} \mathcal{M}_{e,ii}^{z,0d}
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{\lambda_q^3} \mathcal{M}_{e_1,ii}^{z,1} + \frac{2\dt}{3} \partial_{\lambda_q^3} \frac{\sigma^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_z^{1,n}(r_{J1},z_{J1})}{\ca}
&\quad + \frac{2\dt}{3} \partial_{\lambda_q^3} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a)}{\ca}
&\quad + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{\lambda_q^3} \mathcal{M}_{e_2,ii}^{z,2} + \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \partial_{\lambda_q^3} \mathcal{M}_{e_3,ii}^{z,3} + \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \partial_{\lambda_q^3} \mathcal{M}_{e_4,ii}^{z,4},
\end{aligned}`,
    description: "",
    references: ["5.98"],
    transform: "From (5.98)",
    hidden: false,
  },
  {
    id: '5.143',
    section: 'derivatives_of_m_i_z_with_respect_to_lam',
    label: "\u2202M^{z}/\u2202\u03bb^3",
    latex: String.raw`\partial_{\lambda_q^3}\mathcal{M}_i^z = \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \partial_{\lambda_q^3} \mathcal{M}_{e_3,ii}^{z,3}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.144',
    section: 'derivatives_of_m_i_z_with_respect_to_lam',
    label: "\u2202M^{z,3}/\u2202\u03bb^3",
    latex: String.raw`\begin{aligned}
\partial_{\lambda_q^3}\mathcal{M}_{e_3,ii}^{z,3} &= \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} f_{ii,jj,n_z}(e_3) \partial_{\lambda_q^3} \lambda_{l_3(e_3,jj)}^3
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} f_{ii,jj,t_z}(e_3) \partial_{\lambda_q^3} \gamma_{l_3(e_3,jj)}^3,
\end{aligned}`,
    description: "Which yields From equation (5.96) we have",
    references: ["5.96"],
    transform: "From (5.96)",
    hidden: false,
  },
  {
    id: '5.145',
    section: 'derivatives_of_m_i_z_with_respect_to_lam',
    label: "\u2202M^{z,3}/\u2202\u03bb^3",
    latex: String.raw`\partial_{\lambda_q^3}\mathcal{M}_{e_3,ii}^{z,3} = \frac{2\dt}{3} f_{ii,jj,n_z}(e_3) \big|_{q=l_3(e_3,jj)}`,
    description: "",
    references: ["5.96"],
    transform: "From (5.96)",
    hidden: false,
  },
  {
    id: '5.146',
    section: 'derivatives_of_m_i_z_with_respect_to_gam',
    label: "\u2202M^{z}/\u2202\u03b3^3",
    latex: String.raw`\begin{aligned}
\partial_{\gamma_q^3}\mathcal{M}_i^z &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\gamma_q^3} \mathcal{M}_{e,ii}^{z,0a} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\gamma_q^3} \mathcal{M}_{e,ii}^{z,0b} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\gamma_q^3} \mathcal{M}_{e,ii}^{z,0c} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\gamma_q^3} \mathcal{M}_{e,ii}^{z,0d}
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{\gamma_q^3} \mathcal{M}_{e_1,ii}^{z,1} + \frac{2\dt}{3} \partial_{\gamma_q^3} \frac{\sigma^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_z^{1,n}(r_{J1},z_{J1})}{\ca}
&\quad + \frac{2\dt}{3} \partial_{\gamma_q^3} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a)}{\ca}
&\quad + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{\gamma_q^3} \mathcal{M}_{e_2,ii}^{z,2} + \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \partial_{\gamma_q^3} \mathcal{M}_{e_3,ii}^{z,3} + \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \partial_{\gamma_q^3} \mathcal{M}_{e_4,ii}^{z,4},
\end{aligned}`,
    description: "",
    references: ["5.98"],
    transform: "From (5.98)",
    hidden: false,
  },
  {
    id: '5.147',
    section: 'derivatives_of_m_i_z_with_respect_to_gam',
    label: "\u2202M^{z}/\u2202\u03b3^3",
    latex: String.raw`\partial_{\gamma_q^3}\mathcal{M}_i^z = \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \partial_{\gamma_q^3} \mathcal{M}_{e_3,ii}^{z,3}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.148',
    section: 'derivatives_of_m_i_z_with_respect_to_gam',
    label: "\u2202M^{z,3}/\u2202\u03b3^3",
    latex: String.raw`\begin{aligned}
\partial_{\gamma_q^3}\mathcal{M}_{e_3,ii}^{z,3} &= \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} f_{ii,jj,n_z}(e_3) \partial_{\gamma_q^3} \lambda_{l_3(e_3,jj)}^3
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} f_{ii,jj,t_z}(e_3) \partial_{\gamma_q^3} \gamma_{l_3(e_3,jj)}^3,
\end{aligned}`,
    description: "Which yields From equation (5.96) we have",
    references: ["5.96"],
    transform: "From (5.96)",
    hidden: false,
  },
  {
    id: '5.149',
    section: 'derivatives_of_m_i_z_with_respect_to_gam',
    label: "\u2202M^{z,3}/\u2202\u03b3^3",
    latex: String.raw`\partial_{\gamma_q^3}\mathcal{M}_{e_3,ii}^{z,3} = \frac{2\dt}{3} f_{ii,jj,t_z}(e_3) \big|_{q=l_3(e_3,jj)}`,
    description: "",
    references: ["5.96"],
    transform: "From (5.96)",
    hidden: false,
  },
  {
    id: '5.150',
    section: 'derivatives_of_m_i_z_with_respect_to_lam',
    label: "\u2202M^{z}/\u2202\u03bb^4",
    latex: String.raw`\begin{aligned}
\partial_{\lambda_q^4}\mathcal{M}_i^z &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\lambda_q^4} \mathcal{M}_{e,ii}^{z,0a} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\lambda_q^4} \mathcal{M}_{e,ii}^{z,0b} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\lambda_q^4} \mathcal{M}_{e,ii}^{z,0c} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\lambda_q^4} \mathcal{M}_{e,ii}^{z,0d}
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{\lambda_q^4} \mathcal{M}_{e_1,ii}^{z,1} + \frac{2\dt}{3} \partial_{\lambda_q^4} \frac{\sigma^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_z^{1,n}(r_{J1},z_{J1})}{\ca}
&\quad + \frac{2\dt}{3} \partial_{\lambda_q^4} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a)}{\ca}
&\quad + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{\lambda_q^4} \mathcal{M}_{e_2,ii}^{z,2} + \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \partial_{\lambda_q^4} \mathcal{M}_{e_3,ii}^{z,3} + \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \partial_{\lambda_q^4} \mathcal{M}_{e_4,ii}^{z,4},
\end{aligned}`,
    description: "",
    references: ["5.98"],
    transform: "From (5.98)",
    hidden: false,
  },
  {
    id: '5.151',
    section: 'derivatives_of_m_i_z_with_respect_to_lam',
    label: "\u2202M^{z}/\u2202\u03bb^4",
    latex: String.raw`\partial_{\lambda_q^4}\mathcal{M}_i^z = \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \partial_{\lambda_q^4} \mathcal{M}_{e_4,ii}^{z,4}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.152',
    section: 'derivatives_of_m_i_z_with_respect_to_lam',
    label: "\u2202M^{z,4}/\u2202\u03bb^4",
    latex: String.raw`\begin{aligned}
\partial_{\lambda_q^4}\mathcal{M}_{e_4,ii}^{z,4} &= \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} e_{ii,jj,n_z}(e_4) \partial_{\lambda_q^4} \lambda_{l_4(e_4,jj)}^4
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} e_{ii,jj,t_z}(e_4) \partial_{\lambda_q^4} \gamma_{l_4(e_4,jj)}^4,
\end{aligned}`,
    description: "Which yields From equation (5.97) we have",
    references: ["5.97"],
    transform: "From (5.97)",
    hidden: false,
  },
  {
    id: '5.153',
    section: 'derivatives_of_m_i_z_with_respect_to_lam',
    label: "\u2202M^{z,4}/\u2202\u03bb^4",
    latex: String.raw`\partial_{\lambda_q^4}\mathcal{M}_{e_4,ii}^{z,4} = \frac{2\dt}{3} e_{ii,jj,n_z}(e_4) \big|_{q=l_4(e_4,jj)}`,
    description: "",
    references: ["5.97"],
    transform: "From (5.97)",
    hidden: false,
  },
  {
    id: '5.154',
    section: 'derivatives_of_m_i_z_with_respect_to_gam',
    label: "\u2202M^{z}/\u2202\u03b3^4",
    latex: String.raw`\begin{aligned}
\partial_{\gamma_q^4}\mathcal{M}_i^z &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\gamma_q^4} \mathcal{M}_{e,ii}^{z,0a} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\gamma_q^4} \mathcal{M}_{e,ii}^{z,0b} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{\gamma_q^4} \mathcal{M}_{e,ii}^{z,0c} + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{\gamma_q^4} \mathcal{M}_{e_1,ii}^{z,0d}
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{\gamma_q^4} \mathcal{M}_{e_1,ii}^{z,1} + \frac{2\dt}{3} \partial_{\gamma_q^4} \frac{\sigma^1(r_{J1},z_{J1}) \phi_i(r_{J1},z_{J1}) m_z^{1,n}(r_{J1},z_{J1})}{\ca}
&\quad + \frac{2\dt}{3} \partial_{\gamma_q^4} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a) m_z^{1}(r_a,z_a)}{\ca}
&\quad + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{\gamma_q^4} \mathcal{M}_{e_2,ii}^{z,2} + \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \partial_{\gamma_q^4} \mathcal{M}_{e_3,ii}^{z,3} + \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \partial_{\gamma_q^4} \mathcal{M}_{e_4,ii}^{z,4},
\end{aligned}`,
    description: "",
    references: ["5.98"],
    transform: "From (5.98)",
    hidden: false,
  },
  {
    id: '5.155',
    section: 'derivatives_of_m_i_z_with_respect_to_gam',
    label: "\u2202M^{z}/\u2202\u03b3^4",
    latex: String.raw`\partial_{\gamma_q^4}\mathcal{M}_i^z = \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \partial_{\gamma_q^4} \mathcal{M}_{e_4,ii}^{z,4}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.156',
    section: 'derivatives_of_m_i_z_with_respect_to_gam',
    label: "\u2202M^{z,4}/\u2202\u03b3^4",
    latex: String.raw`\begin{aligned}
\partial_{\gamma_q^4}\mathcal{M}_{e_4,ii}^{z,4} &= \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} e_{ii,jj,n_z}(e_4) \partial_{\gamma_q^4} \lambda_{l_4(e_4,jj)}^4
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} e_{ii,jj,t_z}(e_4) \partial_{\gamma_q^4} \gamma_{l_4(e_4,jj)}^4,
\end{aligned}`,
    description: "Which yields From equation (5.97) we have",
    references: ["5.97"],
    transform: "From (5.97)",
    hidden: false,
  },
  {
    id: '5.157',
    section: 'derivatives_of_m_i_z_with_respect_to_gam',
    label: "\u2202M^{z,4}/\u2202\u03b3^4",
    latex: String.raw`\partial_{\gamma_q^4}\mathcal{M}_{e_4,ii}^{z,4} = \frac{2\dt}{3} e_{ii,jj,t_z}(e_4) \big|_{q=l_4(e_4,jj)}`,
    description: "",
    references: ["5.97"],
    transform: "From (5.97)",
    hidden: false,
  },
  {
    id: '5.158',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_i^z &= \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{h_q} \mathcal{M}_{e,ii}^{z,0a} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{h_q} \mathcal{M}_{e,ii}^{z,0b} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{h_q} \mathcal{M}_{e,ii}^{z,0c} + \sum_{\substack{e=1\\ i=l(e,ii)}}^{\bar{n}_{el}} \partial_{h_q} \mathcal{M}_{e,ii}^{z,0d}
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{\bar{n}_{el}^1} \partial_{h_q} \mathcal{M}_{e_1,ii}^{z,1} + \frac{2\dt}{3} \frac{\sigma^1(r_{j1},z_{j1}) \phi_i(r_{j1},z_{j1})}{\ca} \partial_{h_q} m_z^{1,n}(r_{j1},z_{j1})
&\quad + \frac{2\dt}{3} \frac{\sigma^1(r_a,z_a) \phi_i(r_a,z_a)}{\ca} \partial_{h_q} m_z^{1}(r_a,z_a)
&\quad + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{\bar{n}_{el}^2} \partial_{h_q} \mathcal{M}_{e_2,ii}^{z,2} + \sum_{\substack{e_3=1\\ i=l_3(e_3,ii)}}^{\bar{n}_{el}^3} \partial_{h_q} \mathcal{M}_{e_3,ii}^{z,3} + \sum_{\substack{e_4=1\\ i=l_4(e_4,ii)}}^{\bar{n}_{el}^4} \partial_{h_q} \mathcal{M}_{e_4,ii}^{z,4}.
\end{aligned}`,
    description: "",
    references: ["5.98"],
    transform: "From (5.98)",
    hidden: false,
  },
  {
    id: '5.159',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,0a}/\u2202h",
    latex: String.raw`\partial_{h_q}\mathcal{M}_{e,ii}^{z,0a} = -\frac{2\dt St}{3} \partial_{h_q} a_{ii,g_z}(e)`,
    description: "",
    references: ["5.90"],
    transform: "From (5.90)",
    hidden: false,
  },
  {
    id: '5.160',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,0a}/\u2202h",
    latex: String.raw`\partial_{h_q}\mathcal{M}_{e,ii}^{z,0a} = -\frac{2\dt St}{3} \partial_{h_{S(e,qq)}} a_{ii,g_z}(e) \big|_{q=S(e,qq)}`,
    description: "From equation (5.90) and passing to local spine numbers",
    references: ["5.90"],
    transform: "From (5.90)",
    hidden: false,
  },
  {
    id: '5.161',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,0b}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e,ii}^{z,0b} &= \frac{2\dt}{3} \sum_{jj=1}^{n_v^e} u_{l(e,jj)} \partial_{h_q} a_{ii,jj}^{r,z}(e) + \sum_{jj=1}^{n_v^e} \frac{2\dt}{3} w_{l(e,jj)} \partial_{h_q} a_{ii,jj}^{r,r}(e)
&\quad + \frac{4\dt}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \partial_{h_q} a_{ii,jj}^{z,z}(e) + Re \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \partial_{h_q} a_{ii,jj}(e)
&\quad - \frac{4Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)}(t_{n-1}) \partial_{h_q} a_{ii,jj}(e) + \frac{Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)}(t_{n-2}) \partial_{h_q} a_{ii,jj}(e),
\end{aligned}`,
    description: "",
    references: ["5.90", "5.91"],
    transform: "From (5.90), (5.91)",
    hidden: false,
  },
  {
    id: '5.162',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,0b}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e,ii}^{z,0b} &= \sum_{jj=1}^{n_v^e} \Bigg\{ \frac{2\dt}{3} \left[ u_{l(e,jj)} \partial_{h_q} a_{ii,jj}^{r,z}(e) + w_{l(e,jj)} \left( \partial_{h_q} a_{ii,jj}^{r,r}(e) + 2 \partial_{h_q} a_{ii,jj}^{z,z}(e) \right) \right]
&\quad + Re\, \partial_{h_q} a_{ii,jj}(e) \left[ w_{l(e,jj)} - \frac{4}{3} w_{l(e,jj)}(t_{n-1}) + \frac{1}{3} w_{l(e,jj)}(t_{n-2}) \right] \Bigg\},
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.163',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,0b}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e,ii}^{z,0b} &= \sum_{\substack{jj=1\\ q=S(e,qq)}}^{n_v^e} \Bigg\{ \frac{2\dt}{3} \left[ u_{l(e,jj)} \partial_{h_{S(e,qq)}} a_{ii,jj}^{r,z}(e) \right.
&\quad \left. + w_{l(e,jj)} \left( \partial_{h_{S(e,qq)}} a_{ii,jj}^{r,r}(e) + 2 \partial_{h_{S(e,qq)}} a_{ii,jj}^{z,z}(e) \right) \right]
&\quad + Re\, \partial_{h_{S(e,qq)}} a_{ii,jj}(e) \left[ w_{l(e,jj)} - \frac{4}{3} w_{l(e,jj)}(t_{n-1}) + \frac{1}{3} w_{l(e,jj)}(t_{n-2}) \right] \Bigg\}.
\end{aligned}`,
    description: "And passing to local spine numbers we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.164',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,0c}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e,ii}^{z,0c} &= \frac{2\dt Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} u_{l(e,kk)} \partial_{h_q} a_{ii,kk,jj}^r(e)
&\quad + \frac{2\dt Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} w_{l(e,kk)} \partial_{h_q} a_{ii,kk,jj}^z(e)
&\quad - Re \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} a_{ii,kk,jj}^r(e) \partial_{h_q} r_{l(e,kk)}^c
&\quad - Re \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c \partial_{h_q} a_{ii,kk,jj}^r(e)
&\quad + \frac{4Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-1}) \partial_{h_q} a_{ii,kk,jj}^r(e)
&\quad - \frac{Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} r_{l(e,kk)}^c(t_{n-2}) \partial_{h_q} a_{ii,kk,jj}^r(e)
&\quad - Re \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} a_{ii,kk,jj}^z(e) \partial_{h_q} z_{l(e,kk)}^c
&\quad - Re \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c \partial_{h_q} a_{ii,kk,jj}^z(e)
&\quad + \frac{4Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-1}) \partial_{h_q} a_{ii,kk,jj}^z(e)
&\quad - \frac{Re}{3} \sum_{jj=1}^{n_v^e} w_{l(e,jj)} \sum_{kk=1}^{n_v^e} z_{l(e,kk)}^c(t_{n-2}) \partial_{h_q} a_{ii,kk,jj}^z(e),
\end{aligned}`,
    description: "Sing to local spine numbers we have From equation (5.92) we have",
    references: ["5.92"],
    transform: "From (5.92)",
    hidden: false,
  },
  {
    id: '5.165',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,0c}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e,ii}^{z,0c} &= \sum_{jj=1}^{n_v^e} Re\, w_{l(e,jj)} \Bigg\{ \frac{2\dt}{3} \sum_{kk=1}^{n_v^e} \left( u_{l(e,kk)} \partial_{h_q} a_{ii,kk,jj}^r(e) + w_{l(e,kk)} \partial_{h_q} a_{ii,kk,jj}^z(e) \right)
&\quad - \sum_{kk=1}^{n_v^e} \left[ a_{ii,kk,jj}^r(e) \partial_{h_q} r_{l(e,kk)}^c + \partial_{h_q} a_{ii,kk,jj}^r(e) \left( r_{l(e,kk)}^c - \frac{4}{3} r_{l(e,kk)}^c(t_{n-1}) + \frac{1}{3} r_{l(e,kk)}^c(t_{n-2}) \right) \right]
&\quad - \sum_{kk=1}^{n_v^e} \left[ a_{ii,kk,jj}^z(e) \partial_{h_q} z_{l(e,kk)}^c + \partial_{h_q} a_{ii,kk,jj}^z(e) \left( z_{l(e,kk)}^c - \frac{4}{3} z_{l(e,kk)}^c(t_{n-1}) + \frac{1}{3} z_{l(e,kk)}^c(t_{n-2}) \right) \right] \Bigg\},
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.166',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,0c}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e,ii}^{z,0c} &= \sum_{\substack{jj=1\\ q=S(e,qq)}}^{n_v^e} Re\, w_{l(e,jj)} \Bigg\{ \frac{2\dt}{3} \sum_{kk=1}^{n_v^e} \left( u_{l(e,kk)} \partial_{h_{S(e,qq)}} a_{ii,kk,jj}^r(e) + w_{l(e,kk)} \partial_{h_{S(e,qq)}} a_{ii,kk,jj}^z(e) \right)
&\quad - \sum_{kk=1}^{n_v^e} \left[ a_{ii,kk,jj}^r(e) \partial_{h_{S(e,qq)}} r_{l(e,kk)}^c + \partial_{h_{S(e,qq)}} a_{ii,kk,jj}^r(e) \left( r_{l(e,kk)}^c - \frac{4}{3} r_{l(e,kk)}^c(t_{n-1}) + \frac{1}{3} r_{l(e,kk)}^c(t_{n-2}) \right) \right]
&\quad - \sum_{kk=1}^{n_v^e} \left[ a_{ii,kk,jj}^z(e) \partial_{h_{S(e,qq)}} z_{l(e,kk)}^c + \partial_{h_{S(e,qq)}} a_{ii,kk,jj}^z(e) \left( z_{l(e,kk)}^c - \frac{4}{3} z_{l(e,kk)}^c(t_{n-1}) + \frac{1}{3} z_{l(e,kk)}^c(t_{n-2}) \right) \right] \Bigg\}.
\end{aligned}`,
    description: "And passing to local spine numbers we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.167',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,0d}/\u2202h",
    latex: String.raw`\partial_{h_q}\mathcal{M}_{e,ii}^{z,0d} = -\frac{2\dt}{3} \sum_{jj=1}^{n_p^e} p_{l^p(e,jj)} \partial_{h_q} b_{jj,ii}^z(e)`,
    description: "",
    references: ["5.93"],
    transform: "From (5.93)",
    hidden: false,
  },
  {
    id: '5.168',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,0d}/\u2202h",
    latex: String.raw`\partial_{h_q}\mathcal{M}_{e,ii}^{z,0d} = -\frac{2\dt}{3} \sum_{\substack{jj=1\\ q=S(e,qq)}}^{n_p^e} p_{l^p(e,jj)} \partial_{h_{S(e,qq)}} b_{jj,ii}^z(e)`,
    description: "Now, from equation (5.93), we have and passing to local spine numbers we have",
    references: ["5.93"],
    transform: "From (5.93)",
    hidden: false,
  },
  {
    id: '5.169',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,1}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_1,ii}^{z,1} &= \frac{2\dt}{3\ca} \sum_{jj=1}^{n_v^{1,e_1}} \sigma_{l_1(e_1,jj)}^1 \partial_{h_q} c_{jj,ii,t_z}(e_1)
&\quad - \frac{2\dt}{3} \sum_{jj=1}^{n_v^{1,e_1}} p_{l_1(e_1,jj)}^g \partial_{h_q} c_{ii,jj,n_z}(e_1),
\end{aligned}`,
    description: "Now, from equation (5.93), we have and passing to local spine numbers we have Now from equation (5.94) we have",
    references: ["5.93", "5.94"],
    transform: "From (5.93), (5.94)",
    hidden: false,
  },
  {
    id: '5.170',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,1}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_1,ii}^{z,1} &= \sum_{jj=1}^{n_v^{1,e_1}} \frac{2\dt}{3} \left( \frac{1}{\ca} \sigma_{l_1(e_1,jj)}^1 \partial_{h_q} c_{jj,ii,t_z}(e_1) - p_{l_1(e_1,jj)}^g \partial_{h_q} c_{ii,jj,n_z}(e_1) \right),
\end{aligned}`,
    description: "And passing to local spine numbers we have Now from equation (5.94) we have i.e",
    references: ["5.94"],
    transform: "From (5.94)",
    hidden: false,
  },
  {
    id: '5.171',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,1}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_1,ii}^{z,1} &= \sum_{\substack{jj=1\\ q=S_1(e_1,qq)}}^{n_v^{1,e_1}} \frac{2\dt}{3} \left( \frac{1}{\ca} \sigma_{l_1(e_1,jj)}^1 \partial_{h_{S_1(e_1,qq)}} c_{jj,ii,t_z}(e_1) - p_{l_1(e_1,jj)}^g \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,n_z}(e_1) \right).
\end{aligned}`,
    description: "And passing to local spine numbers",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.172',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,2}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_2,ii}^{z,2} &= \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2(e_2,jj)} \partial_{h_q} d_{ii,jj,t_r,t_z}(e_2)
&\quad + \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2(e_2,jj)} \partial_{h_q} d_{ii,jj,t_z,t_z}(e_2)
&\quad - \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2^2(e_2,jj)}^s \partial_{h_q} d_{ii,jj,t_r,t_z}(e_2)
&\quad - \frac{2\dt \be}{3} \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2^2(e_2,jj)}^s \partial_{h_q} d_{ii,jj,t_z,t_z}(e_2)
&\quad - \frac{\dt}{3\ca} \sum_{jj=1}^{n_v^{2,e_2}} \sigma_{l_2^2(e_2,jj)}^2 \partial_{h_q} d_{ii,jj,t_z}^s(e_2)
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{2,e_2}} \lambda_{l_2^2(e_2,jj)}^2 \partial_{h_q} d_{ii,jj,n_z}(e_2),
\end{aligned}`,
    description: "And passing to local spine numbers From equation (5.95) we have",
    references: ["5.95"],
    transform: "From (5.95)",
    hidden: false,
  },
  {
    id: '5.173',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,2}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_2,ii}^{z,2} &= \sum_{jj=1}^{n_v^{2,e_2}} \frac{2\dt}{3} \Bigg[ \be \left( \partial_{h_q} d_{ii,jj,t_r,t_z}(e_2) \{ u_{l_2(e_2,jj)} - u_{l_2^2(e_2,jj)}^s \} \right.
&\quad \left. + \partial_{h_q} d_{ii,jj,t_z,t_z}(e_2) \{ w_{l_2(e_2,jj)} - w_{l_2^2(e_2,jj)}^s \} \right)
&\quad - \frac{1}{2\ca} \sigma_{l_2^2(e_2,jj)}^2 \partial_{h_q} d_{ii,jj,t_z}^s(e_2) + \lambda_{l_2^2(e_2,jj)}^2 \partial_{h_q} d_{ii,jj,n_z}(e_2) \Bigg],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.174',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,2}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_2,ii}^{z,2} &= \sum_{\substack{jj=1\\ q=S_2(e_2,qq)}}^{n_v^{2,e_2}} \frac{2\dt}{3} \Bigg[ \be \left( \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,t_r,t_z}(e_2) \{ u_{l_2(e_2,jj)} - u_{l_2^2(e_2,jj)}^s \} \right.
&\quad \left. + \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,t_z,t_z}(e_2) \{ w_{l_2(e_2,jj)} - w_{l_2^2(e_2,jj)}^s \} \right)
&\quad - \frac{1}{2\ca} \sigma_{l_2^2(e_2,jj)}^2 \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,t_z}^s(e_2)
&\quad + \lambda_{l_2^2(e_2,jj)}^2 \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,n_z}(e_2) \Bigg].
\end{aligned}`,
    description: "And passing to local spine numbers",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.175',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,3}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_3,ii}^{z,3} &= \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} \lambda_{l_3(e_3,jj)}^3 \partial_{h_q} f_{ii,jj,n_z}(e_3)
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{3,e_3}} \gamma_{l_3(e_3,jj)}^3 \partial_{h_q} f_{ii,jj,t_z}(e_3),
\end{aligned}`,
    description: "",
    references: ["5.96"],
    transform: "From (5.96)",
    hidden: false,
  },
  {
    id: '5.176',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,3}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_3,ii}^{z,3} &= \sum_{jj=1}^{n_v^{3,e_3}} \frac{2\dt}{3} \left[ \lambda_{l_3(e_3,jj)}^3 \partial_{h_q} f_{ii,jj,n_z}(e_3) + \gamma_{l_3(e_3,jj)}^3 \partial_{h_q} f_{ii,jj,t_z}(e_3) \right],
\end{aligned}`,
    description: "",
    references: ["5.96"],
    transform: "From (5.96)",
    hidden: false,
  },
  {
    id: '5.177',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,3}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_3,ii}^{z,3} &= \sum_{\substack{jj=1\\ q=S_3(e_3,qq)}}^{n_v^{3,e_3}} \frac{2\dt}{3} \left[ \lambda_{l_3(e_3,jj)}^3 \partial_{h_{S_3(e_3,qq)}} f_{ii,jj,n_z}(e_3) + \gamma_{l_3(e_3,jj)}^3 \partial_{h_{S_3(e_3,qq)}} f_{ii,jj,t_z}(e_3) \right].
\end{aligned}`,
    description: "And passing to local spine numbers",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '5.178',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,4}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_4,ii}^{z,4} &= \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} \lambda_{l_4(e_4,jj)}^4 \partial_{h_q} e_{ii,jj,n_z}(e_4)
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{4,e_4}} \gamma_{l_4(e_4,jj)}^4 \partial_{h_q} e_{ii,jj,t_z}(e_4),
\end{aligned}`,
    description: "And passing to local spine numbers From equation (5.97) we have",
    references: ["5.97"],
    transform: "From (5.97)",
    hidden: false,
  },
  {
    id: '5.179',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,4}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_4,ii}^{z,4} &= \sum_{jj=1}^{n_v^{4,e_4}} \frac{2\dt}{3} \left[ \lambda_{l_4(e_4,jj)}^4 \partial_{h_q} e_{ii,jj,n_z}(e_4) + \gamma_{l_4(e_4,jj)}^4 \partial_{h_q} e_{ii,jj,t_z}(e_4) \right],
\end{aligned}`,
    description: "",
    references: ["5.97"],
    transform: "From (5.97)",
    hidden: false,
  },
  {
    id: '5.180',
    section: 'derivatives_of_m_i_z_with_respect_to_h_q',
    label: "\u2202M^{z,4}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q}\mathcal{M}_{e_4,ii}^{z,4} &= \sum_{\substack{jj=1\\ q=S_4(e_4,qq)}}^{n_v^{4,e_4}} \frac{2\dt}{3} \left[ \lambda_{l_4(e_4,jj)}^4 \partial_{h_{S_4(e_4,qq)}} e_{ii,jj,n_z}(e_4) + \gamma_{l_4(e_4,jj)}^4 \partial_{h_{S_4(e_4,qq)}} e_{ii,jj,t_z}(e_4) \right].
\end{aligned}`,
    description: "And passing to local spine numbers",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '6.1',
    section: 'the_continuity_equation',
    label: "Continuity Equation",
    latex: String.raw`\partial_r u + \partial_z w = 0`,
    description: "And passing to local spine numbers % 6 We consider",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '6.2',
    section: 'the_continuity_equation',
    label: "Continuity Residual C_i",
    latex: String.raw`\mathcal{C}_i = \int_{\Omega^f} \psi_i \partial_r u + \int_{\Omega^f} \psi_i \partial_z w`,
    description: "And passing to local spine numbers % 6 We consider and we define",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '6.3',
    section: 'the_continuity_equation',
    label: "C_i with FE Approximation",
    latex: String.raw`\mathcal{C}_i = \int_{\Omega^f} \psi_i \partial_r \left( \sum_{j=1}^{n_v} u_j \phi_j \right) + \int_{\Omega^f} \psi_i \partial_z \left( \sum_{j=1}^{n_v} w_j \phi_j \right)`,
    description: "We consider and we define where is an index that runs through the pressure node numbering",
    references: ["4.66", "4.67"],
    transform: "From (4.66), (4.67)",
    hidden: false,
  },
  {
    id: '6.4',
    section: 'the_continuity_equation',
    label: "C_i Rearranged",
    latex: String.raw`\mathcal{C}_i = \sum_{j=1}^{n_v} u_j \int_{\Omega^f} \psi_i \partial_r \phi_j + \sum_{j=1}^{n_v} w_j \int_{\Omega^f} \psi_i \partial_z \phi_j`,
    description: "We can re-write this as",
    references: ["4.66", "4.67"],
    transform: "From (4.66), (4.67)",
    hidden: false,
  },
  {
    id: '6.5',
    section: 'the_continuity_equation',
    label: "C_i Gathered Sums",
    latex: String.raw`\mathcal{C}_i = \sum_{j=1}^{n_v} \left[ u_j \int_{\Omega^f} \psi_i \partial_r \phi_j + w_j \int_{\Omega^f} \psi_i \partial_z \phi_j \right]`,
    description: "We can re-write this as gathering the sums we have",
    references: ["4.66", "4.67"],
    transform: "From (4.66), (4.67)",
    hidden: false,
  },
  {
    id: '6.6',
    section: 'the_continuity_equation',
    label: "C_i Element-wise",
    latex: String.raw`\mathcal{C}_i = \sum_{e=n_{el,s}}^{n_{el}} \sum_{j=1}^{n_v} \left[ u_j \int_{\Omega_e} \psi_i \partial_r \phi_j + w_j \int_{\Omega_e} \psi_i \partial_z \phi_j \right]`,
    description: "We can re-write this as gathering the sums we have We now express the integrals as a sum over the integrals on each element",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '6.7',
    section: 'the_continuity_equation',
    label: "C_i Local Numbering (j)",
    latex: String.raw`\mathcal{C}_i = \sum_{e=n_{el,s}}^{n_{el}} \sum_{jj=1}^{n_v^e} \left[ u_{l(e,jj)} \int_{\Omega_e} \psi_i \partial_r \phi_{l(e,jj)} + w_{l(e,jj)} \int_{\Omega_e} \psi_i \partial_z \phi_{l(e,jj)} \right]`,
    description: "Moving to local numbering in variable we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '6.8',
    section: 'the_continuity_equation',
    label: "C_i Local Numbering (i,j)",
    latex: String.raw`\begin{aligned}
\mathcal{C}_i &= \sum_{e=n_{el,s}}^{n_{el}} \sum_{jj=1}^{n_v^e} \left[ u_{l(e,jj)} \int_{\Omega_e} \psi_{l^p(e,ii)} \partial_r \phi_{l(e,jj)} \right.
&\quad \left. + w_{l(e,jj)} \int_{\Omega_e} \psi_{l^p(e,ii)} \partial_z \phi_{l(e,jj)} \right],
\end{aligned}`,
    description: "Moving to local numbering in variable we have Moving to local node numbers for index variable we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '6.9',
    section: 'the_continuity_equation',
    label: "C_i = Sum of C_{e,ii}",
    latex: String.raw`\mathcal{C}_i = \sum_{e=n_{el,s}}^{n_{el}} \mathcal{C}_{e,ii}`,
    description: "Moving to local node numbers for index variable we have i.e",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '6.10',
    section: 'the_continuity_equation',
    label: "C_{e,ii} Definition",
    latex: String.raw`\mathcal{C}_{e,ii} = \sum_{jj=1}^{n_v^e} \left[ u_{l(e,jj)} b_{ii,jj}^r(e) + w_{l(e,jj)} b_{ii,jj}^z(e) \right]`,
    description: "Moving to local node numbers for index variable we have i.e",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '6.11',
    section: 'derivatives_of_c_i_with_respect_to_u_q',
    label: "dC_i/du Global",
    latex: String.raw`\partial_{u_q} \mathcal{C}_i = \sum_{e=n_{el,s}}^{n_{el}} \partial_{u_q} \mathcal{C}_{e,ii}`,
    description: "Where % 6.1 We now consider the derivatives of with respect to , and",
    references: ["6.9"],
    transform: "From (6.9)",
    hidden: false,
  },
  {
    id: '6.12',
    section: 'derivatives_of_c_i_with_respect_to_u_q',
    label: "dC_{e,ii}/du Expanded",
    latex: String.raw`\begin{aligned}
\partial_{u_q} \mathcal{C}_{e,ii} &= \sum_{jj=1}^{n_v^e} \left[ b_{ii,jj}^r(e) \partial_{u_q} u_{l(e,jj)} + b_{ii,jj}^z(e) \partial_{u_q} w_{l(e,jj)} \right],
\end{aligned}`,
    description: "Where % 6.1 We now consider the derivatives of with respect to , and",
    references: ["6.10", "6.9"],
    transform: "From (6.10), (6.9)",
    hidden: false,
  },
  {
    id: '6.13',
    section: 'derivatives_of_c_i_with_respect_to_u_q',
    label: "dC_{e,ii}/du Compact",
    latex: String.raw`\partial_{u_q} \mathcal{C}_{e,ii} = b_{ii,jj}^r(e) \big|_{q=l(e,jj)}`,
    description: "SubsectionJacobian terms % 6.1 We now consider the derivatives of with respect to , and",
    references: ["6.10", "6.9"],
    transform: "From (6.10), (6.9)",
    hidden: false,
  },
  {
    id: '6.14',
    section: 'derivatives_of_c_i_with_respect_to_w_q',
    label: "dC_i/dw Global",
    latex: String.raw`\partial_{w_q} \mathcal{C}_i = \sum_{e=n_{el,s}}^{n_{el}} \partial_{w_q} \mathcal{C}_{e,ii}`,
    description: "",
    references: ["6.10", "6.9"],
    transform: "From (6.10), (6.9)",
    hidden: false,
  },
  {
    id: '6.15',
    section: 'derivatives_of_c_i_with_respect_to_w_q',
    label: "dC_{e,ii}/dw Expanded",
    latex: String.raw`\begin{aligned}
\partial_{w_q} \mathcal{C}_{e,ii} &= \sum_{jj=1}^{n_v^e} \left[ b_{ii,jj}^r(e) \partial_{w_q} u_{l(e,jj)} + b_{ii,jj}^z(e) \partial_{w_q} w_{l(e,jj)} \right],
\end{aligned}`,
    description: "",
    references: ["6.10", "6.9"],
    transform: "From (6.10), (6.9)",
    hidden: false,
  },
  {
    id: '6.16',
    section: 'derivatives_of_c_i_with_respect_to_w_q',
    label: "dC_{e,ii}/dw Compact",
    latex: String.raw`\partial_{w_q} \mathcal{C}_{e,ii} = b_{ii,jj}^z(e) \big|_{q=l(e,jj)}`,
    description: "",
    references: ["6.10", "6.9"],
    transform: "From (6.10), (6.9)",
    hidden: false,
  },
  {
    id: '6.17',
    section: 'derivatives_of_c_i_with_respect_to_h_q',
    label: "dC_i/dh Global",
    latex: String.raw`\partial_{h_q} \mathcal{C}_i = \sum_{e=n_{el,s}}^{n_{el}} \partial_{h_q} \mathcal{C}_{e,ii}`,
    description: "",
    references: ["6.10", "6.9"],
    transform: "From (6.10), (6.9)",
    hidden: false,
  },
  {
    id: '6.18',
    section: 'derivatives_of_c_i_with_respect_to_h_q',
    label: "dC_{e,ii}/dh Expanded",
    latex: String.raw`\begin{aligned}
\partial_{h_q} \mathcal{C}_{e,ii} &= \sum_{jj=1}^{n_v^e} \left[ u_{l(e,jj)} \partial_{h_q} b_{ii,jj}^r(e) + w_{l(e,jj)} \partial_{h_q} b_{ii,jj}^z(e) \right],
\end{aligned}`,
    description: "",
    references: ["6.10", "6.9"],
    transform: "From (6.10), (6.9)",
    hidden: false,
  },
  {
    id: '6.19',
    section: 'derivatives_of_c_i_with_respect_to_h_q',
    label: "dC_{e,ii}/dh Local Spines",
    latex: String.raw`\begin{aligned}
\partial_{h_q} \mathcal{C}_{e,ii} &= \sum_{jj=1}^{n_v^e} \left[ u_{l(e,jj)} \partial_{h_{S(e,qq)}} b_{ii,jj}^r(e) + w_{l(e,jj)} \partial_{h_{S(e,qq)}} b_{ii,jj}^z(e) \right].
\end{aligned}`,
    description: "",
    references: ["6.10", "6.9"],
    transform: "From (6.10), (6.9)",
    hidden: false,
  },
  {
    id: '7.1',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "SC2 Equation Recalled",
    latex: String.raw`\left( \mathbf{v}^{s2} - \frac{1}{2} (\mathbf{u} + \mathbf{u}^s) \right) \cdot (\mathbf{I} - \mathbf{n}^2 \mathbf{n}^2) = E_s \nabla^s \varepsilon^2`,
    description: "",
    references: ["2.52", "6.10"],
    transform: "From (2.52), (6.10)",
    hidden: false,
  },
  {
    id: '7.2',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "SC2 Residual S_i^2",
    latex: String.raw`\mathcal{S}_i^2 = \int_{\partial \Omega^{2,n}} \phi_i^2 \left( \mathbf{v}^{s2} - \frac{1}{2} (\mathbf{u} + \mathbf{u}^s) \right) \cdot \mathbf{t}^2 - E_s \int_{\partial \Omega^{2,n}} \phi_i^2 \mathbf{t}^2 \cdot \nabla^s \varepsilon^2`,
    description: "And passing to local spine numbers we have % 7 We recall equation (2.52) and we define the -th SC2 residual as",
    references: ["2.52"],
    transform: "From (2.52)",
    hidden: false,
  },
  {
    id: '7.3',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "S_i^2 with FE Approximation",
    latex: String.raw`\begin{aligned}
\mathcal{S}_i^2 &= \int_{\partial \Omega^{2,n}} \phi_i^2 \left( \mathbf{v}^{s2} \cdot \mathbf{t}^2 - \frac{1}{2} \mathbf{u} \cdot \mathbf{t}^2 - \frac{1}{2} \mathbf{u}^s \cdot \mathbf{t}^2 \right) - E_s \int_{\partial \Omega^{2,n}} \phi_i^2 (\partial_s \varepsilon^2) (\mathbf{t}^2 \cdot \mathbf{t}^2),
\end{aligned}`,
    description: "We recall equation (2.52) and we define the -th SC2 residual as which, of course we wish to make identically null",
    references: ["2.52"],
    transform: "From (2.52)",
    hidden: false,
  },
  {
    id: '7.4',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "S_i^2 Rearranged",
    latex: String.raw`\begin{aligned}
\mathcal{S}_i^2 &= \int_{\partial \Omega^{2,n}} \phi_i^2 \left( u^{s2} t_r^2 + w^{s2} t_z^2 - \frac{1}{2} u t_r^2 - \frac{1}{2} w t_z^2 - \frac{1}{2} u^s t_r^2 - \frac{1}{2} w^s t_z^2 \right) - E_s \int_{\partial \Omega^{2,n}} \phi_i^2 \partial_s \varepsilon^2,
\end{aligned}`,
    description: "Which, of course we wish to make identically null",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.5',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "S_i^2 Gathered Sums",
    latex: String.raw`\begin{aligned}
\mathcal{S}_i^2 &= \int_{\partial \Omega^{2,n}} \phi_i^2 u^{s2} t_r^2 + \int_{\partial \Omega^{2,n}} \phi_i^2 w^{s2} t_z^2 - \frac{1}{2} \int_{\partial \Omega^{2,n}} \phi_i^2 u t_r^2 - \frac{1}{2} \int_{\partial \Omega^{2,n}} \phi_i^2 w t_z^2
&\quad - \frac{1}{2} \int_{\partial \Omega^{2,n}} \phi_i^2 u^s t_r^2 - \frac{1}{2} \int_{\partial \Omega^{2,n}} \phi_i^2 w^s t_z^2 - E_s \int_{\partial \Omega^{2,n}} \phi_i^2 \partial_s \varepsilon^2,
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.6',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "S_i^2 Element-wise",
    latex: String.raw`\begin{aligned}
\mathcal{S}_i^2 &= \int_{\partial \Omega^{2,n}} \phi_i^2 u^{s2} t_r^2 + \int_{\partial \Omega^{2,n}} \phi_i^2 w^{s2} t_z^2 - \frac{1}{2} \int_{\partial \Omega^{2,n}} \phi_i^2 u t_r^2 - \frac{1}{2} \int_{\partial \Omega^{2,n}} \phi_i^2 w t_z^2
&\quad - \frac{1}{2} \int_{\partial \Omega^{2,n}} \phi_i^2 u^s t_r^2 - \frac{1}{2} \int_{\partial \Omega^{2,n}} \phi_i^2 w^s t_z^2 - E_s \int_{\partial \Omega^{2,n}} \phi_i^2 \partial_s \varepsilon^2.
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.7',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "S_i^2 = Sum of S_{e,ii}^2",
    latex: String.raw`- \int_{\partial \Omega^{2}} \phi_i^2 \partial_s \varepsilon^2 = - \phi_i^2 \varepsilon^2 \Big|_{(r_c,z_c)}^{(r_o,z_o)} + \int_{\partial \Omega^{2}} \varepsilon^2 \partial_s \phi_i^2`,
    description: "We consider the last integral on the right hand side above and we integrate by parts to obtain",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.8',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "S_{e,ii}^2 Definition",
    latex: String.raw`\begin{aligned}
\mathcal{S}_i^2 &= E_s \phi_i^2(r_c,z_c) \varepsilon^2(r_c,z_c) - E_s \phi_i^2(r_o,z_o) \varepsilon^2(r_o,z_o)
&\quad + \int_{\partial \Omega^{2,n}} \phi_i^2 u^{s2} t_r^2 + \int_{\partial \Omega^{2,n}} \phi_i^2 w^{s2} t_z^2
&\quad - \frac{1}{2} \int_{\partial \Omega^{2,n}} \phi_i^2 u t_r^2 - \frac{1}{2} \int_{\partial \Omega^{2,n}} \phi_i^2 w t_z^2
&\quad - \frac{1}{2} \int_{\partial \Omega^{2,n}} \phi_i^2 u^s t_r^2 - \frac{1}{2} \int_{\partial \Omega^{2,n}} \phi_i^2 w^s t_z^2
&\quad + E_s \int_{\partial \Omega^{2,n}} \varepsilon^2 \partial_s \phi_i^2.
\end{aligned}`,
    description: "We consider the last integral on the right hand side above and we integrate by parts to obtain This yields",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.9',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "dS_i^2/du Global",
    latex: String.raw`\begin{aligned}
u &\approx \sum_{j=1}^{n_v} u_j \phi_j,
\end{aligned}`,
    description: "We recall the approximations",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.10',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "dS_{e,ii}^2/du Expanded",
    latex: String.raw`\begin{aligned}
w &\approx \sum_{j=1}^{n_v} w_j \phi_j,
\end{aligned}`,
    description: "We recall the approximations",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.11',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "dS_{e,ii}^2/du Compact",
    latex: String.raw`\begin{aligned}
\varepsilon^2 &\approx \sum_{j=1}^{n_v} \varepsilon_j^2 \phi_j^2,
\end{aligned}`,
    description: "We recall the approximations",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.12',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "dS_i^2/dw Global",
    latex: String.raw`\begin{aligned}
u^s &\approx \sum_{j=1}^{n_v} u_j^s \phi_j^2,
\end{aligned}`,
    description: "We recall the approximations",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.13',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "dS_{e,ii}^2/dw Expanded",
    latex: String.raw`\begin{aligned}
w^s &\approx \sum_{j=1}^{n_v} w_j^s \phi_j^2,
\end{aligned}`,
    description: "We recall the approximations",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.14',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "dS_{e,ii}^2/dw Compact",
    latex: String.raw`\begin{aligned}
u^{s2} &\approx \sum_{j=1}^{n_v} u_j^{s2} \phi_j^2,
\end{aligned}`,
    description: "We recall the approximations",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.15',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "dS_i^2/d\u03b5 Global",
    latex: String.raw`\begin{aligned}
w^{s2} &\approx \sum_{j=1}^{n_v} w_j^{s2} \phi_j^2.
\end{aligned}`,
    description: "We recall the approximations",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.16',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "dS_{e,ii}^2/d\u03b5 Expanded",
    latex: String.raw`\begin{aligned}
\mathcal{S}_i^2 &= E_s \phi_i^2(r_c,z_c) \varepsilon^2(r_c,z_c) - E_s \phi_i^2(r_o,z_o) \varepsilon^2(r_o,z_o)
&\quad + \int_{\partial \Omega^{2,n}} \phi_i^2 \left( \sum_{j=1}^{n_v} u_j^{s2} \phi_j^2 \right) t_r^2 + \int_{\partial \Omega^{2,n}} \phi_i^2 \left( \sum_{j=1}^{n_v} w_j^{s2} \phi_j^2 \right) t_z^2
&\quad - \frac{1}{2} \int_{\partial \Omega^{2,n}} \phi_i^2 \left( \sum_{j=1}^{n_v} u_j \phi_j^2 \right) t_r^2 - \frac{1}{2} \int_{\partial \Omega^{2,n}} \phi_i^2 \left( \sum_{j=1}^{n_v} w_j \phi_j^2 \right) t_z^2
&\quad - \frac{1}{2} \int_{\partial \Omega^{2,n}} \phi_i^2 \left( \sum_{j=1}^{n_v} u_j^s \phi_j^2 \right) t_r^2 - \frac{1}{2} \int_{\partial \Omega^{2,n}} \phi_i^2 \left( \sum_{j=1}^{n_v} w_j^s \phi_j^2 \right) t_z^2
&\quad + E_s \int_{\partial \Omega^{2,n}} \left( \sum_{j=1}^{n_v} \varepsilon_j^2 \phi_j^2 \right) \partial_s \phi_i^2.
\end{aligned}`,
    description: "We recall the approximations We thus have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.17',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "dS_{e,ii}^2/d\u03b5 Compact",
    latex: String.raw`\begin{aligned}
\mathcal{S}_i^2 &= E_s \phi_i^2(r_c,z_c) \varepsilon^2(r_c,z_c) - E_s \phi_i^2(r_o,z_o) \varepsilon^2(r_o,z_o)
&\quad + \sum_{j=1}^{n_v} u_j^{s2} \int_{\partial \Omega^{2,n}} \phi_i^2 \phi_j^2 t_r^2 + \sum_{j=1}^{n_v} w_j^{s2} \int_{\partial \Omega^{2,n}} \phi_i^2 \phi_j^2 t_z^2
&\quad - \frac{1}{2} \sum_{j=1}^{n_v} u_j \int_{\partial \Omega^{2,n}} \phi_i^2 \phi_j^2 t_r^2 - \frac{1}{2} \sum_{j=1}^{n_v} w_j \int_{\partial \Omega^{2,n}} \phi_i^2 \phi_j^2 t_z^2
&\quad - \frac{1}{2} \sum_{j=1}^{n_v} u_j^s \int_{\partial \Omega^{2,n}} \phi_i^2 \phi_j^2 t_r^2 - \frac{1}{2} \sum_{j=1}^{n_v} w_j^s \int_{\partial \Omega^{2,n}} \phi_i^2 \phi_j^2 t_z^2
&\quad + E_s \sum_{j=1}^{n_v} \varepsilon_j^2 \int_{\partial \Omega^{2,n}} \phi_j^2 \partial_s \phi_i^2.
\end{aligned}`,
    description: "Moving the integrals into the sums, we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.18',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "dS_i^2/dh Global",
    latex: String.raw`\mathcal{S}_i^2 = E_s \phi_i^2(r_c,z_c) \varepsilon^2(r_c,z_c) - E_s \phi_i^2(r_o,z_o) \varepsilon^2(r_o,z_o) + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{n_{el}^2} \mathcal{S}_{e_2,ii}^2`,
    description: "Decomposing the integrals into sums over line elements and using local node numbers we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.19',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "dS_{e,ii}^2/dh Step 1",
    latex: String.raw`\begin{aligned}
\mathcal{S}_{e_2,ii}^2 &= \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2(e_2,jj)}^{s2} \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 t_r^2 + \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2(e_2,jj)}^{s2} \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 t_z^2
&\quad - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2(e_2,jj)} \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 t_r^2
&\quad - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2(e_2,jj)} \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 t_z^2
&\quad - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2^2(e_2,jj)}^s \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 t_r^2
&\quad - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2^2(e_2,jj)}^s \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 t_z^2
&\quad + E_s \sum_{jj=1}^{n_v^{2,e_2}} \varepsilon_{l_2^2(e_2,jj)}^2 \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)}^2 \partial_s \phi_{l_2(e_2,jj)}^2,
\end{aligned}`,
    description: "Decomposing the integrals into sums over line elements and using local node numbers we have where",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.20',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "dS_{e,ii}^2/dh Step 2",
    latex: String.raw`\begin{aligned}
d_{ii,jj,t_r}(e_2) &= \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 t_r^2,
\end{aligned}`,
    description: "Where we have used the notation",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.21',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "dS_{e,ii}^2/dh Step 3",
    latex: String.raw`\begin{aligned}
d_{ii,jj,t_z}(e_2) &= \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 t_z^2,
\end{aligned}`,
    description: "Where we have used the notation",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.22',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "dS_{e,ii}^2/dh Compact",
    latex: String.raw`\begin{aligned}
d_{ii,jj}^s(e_2) &= \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)}^2 \partial_s \phi_{l_2(e_2,jj)}^2.
\end{aligned}`,
    description: "Where we have used the notation",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.21',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "dS_{e,ii}^2/dh Step 3",
    latex: String.raw`\begin{aligned}
\mathcal{S}_{e_2,ii}^2 &= \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2(e_2,jj)}^{s2} d_{ii,jj,t_r}(e_2) + \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2(e_2,jj)}^{s2} d_{ii,jj,t_z}(e_2)
&\quad - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2(e_2,jj)} d_{ii,jj,t_r}(e_2) - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2(e_2,jj)} d_{ii,jj,t_z}(e_2)
&\quad - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2^2(e_2,jj)}^s d_{ii,jj,t_r}(e_2) - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2^2(e_2,jj)}^s d_{ii,jj,t_z}(e_2)
&\quad + E_s \sum_{jj=1}^{n_v^{2,e_2}} \varepsilon_{l_2^2(e_2,jj)}^2 d_{jj,ii}^s(e_2).
\end{aligned}`,
    description: "Where we have used the notation Thus",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.22',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "dS_{e,ii}^2/dh Compact",
    latex: String.raw`\mathcal{S}_i^2 = E_s \phi_i^2(r_c,z_c) \varepsilon^2(r_c,z_c) - E_s \phi_i^2(r_o,z_o) \varepsilon^2(r_o,z_o) + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{n_{el}^2} \mathcal{S}_{e_2,ii}^2`,
    description: "Summarising and re-arranging terms we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.23',
    section: 'the_slip_condition_on_the_liquid_solid_i',
    label: "dS_{e,ii}^2/dh Final",
    latex: String.raw`\begin{aligned}
\mathcal{S}_{e_2,ii}^2 &= \sum_{jj=1}^{n_v^{2,e_2}} \Bigg[ d_{ii,jj,t_r}(e_2) \left( u_{l_2(e_2,jj)}^{s2} - \frac{1}{2} u_{l_2(e_2,jj)} - \frac{1}{2} u_{l_2^2(e_2,jj)}^s \right)
&\quad + d_{ii,jj,t_z}(e_2) \left( w_{l_2(e_2,jj)}^{s2} - \frac{1}{2} w_{l_2(e_2,jj)} - \frac{1}{2} w_{l_2^2(e_2,jj)}^s \right)
&\quad + E_s \varepsilon_{l_2^2(e_2,jj)}^2 d_{jj,ii}^s(e_2) \Bigg].
\end{aligned}`,
    description: "Summarising and re-arranging terms we have where",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.24',
    section: 'derivatives_of_s_i_2_with_respect_to_u_q',
    label: "\u2202S^{2}/\u2202u",
    latex: String.raw`\begin{aligned}
\partial_{u_q} \mathcal{S}_i^2 &= E_s \phi_i^2(r_c,z_c) \partial_{u_q} \varepsilon^2(r_c,z_c) - E_s \phi_i^2(r_o,z_o) \partial_{u_q} \varepsilon^2(r_o,z_o)
&\quad + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{n_{el}^2} \partial_{u_q} \mathcal{S}_{e_2,ii}^2,
\end{aligned}`,
    description: "",
    references: ["7.20"],
    transform: "From (7.20)",
    hidden: false,
  },
  {
    id: '7.25',
    section: 'derivatives_of_s_i_2_with_respect_to_u_q',
    label: "\u2202S^{2}/\u2202u",
    latex: String.raw`\begin{aligned}
\partial_{u_q} \mathcal{S}_{e_2,ii}^2 &= \sum_{jj=1}^{n_v^{2,e_2}} \partial_{u_q} u_{l_2(e_2,jj)}^{s2} d_{ii,jj,t_r}(e_2) + \sum_{jj=1}^{n_v^{2,e_2}} \partial_{u_q} w_{l_2(e_2,jj)}^{s2} d_{ii,jj,t_z}(e_2)
&\quad - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{u_q} u_{l_2(e_2,jj)} d_{ii,jj,t_r}(e_2) - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{u_q} w_{l_2(e_2,jj)} d_{ii,jj,t_z}(e_2)
&\quad - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{u_q} u_{l_2^2(e_2,jj)}^s d_{ii,jj,t_r}(e_2) - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{u_q} w_{l_2^2(e_2,jj)}^s d_{ii,jj,t_z}(e_2)
&\quad + E_s \sum_{jj=1}^{n_v^{2,e_2}} \partial_{u_q} \varepsilon_{l_2^2(e_2,jj)}^2 d_{jj,ii}^s(e_2),
\end{aligned}`,
    description: "",
    references: ["7.20", "7.21"],
    transform: "From (7.20), (7.21)",
    hidden: false,
  },
  {
    id: '7.26',
    section: 'derivatives_of_s_i_2_with_respect_to_u_q',
    label: "\u2202S^{2}/\u2202u",
    latex: String.raw`\partial_{u_q} \mathcal{S}_{e_2,ii}^2 = -\frac{1}{2} d_{ii,jj,t_r}(e_2) \big|_{q=l_2(e_2,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.27',
    section: 'derivatives_of_s_i_2_with_respect_to_w_q',
    label: "\u2202S^{2}/\u2202w",
    latex: String.raw`\begin{aligned}
\partial_{w_q} \mathcal{S}_i^2 &= E_s \phi_i^2(r_c,z_c) \partial_{w_q} \varepsilon^2(r_c,z_c) - E_s \phi_i^2(r_o,z_o) \partial_{w_q} \varepsilon^2(r_o,z_o)
&\quad + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{n_{el}^2} \partial_{w_q} \mathcal{S}_{e_2,ii}^2,
\end{aligned}`,
    description: "",
    references: ["7.20"],
    transform: "From (7.20)",
    hidden: false,
  },
  {
    id: '7.28',
    section: 'derivatives_of_s_i_2_with_respect_to_w_q',
    label: "\u2202S^{2}/\u2202w",
    latex: String.raw`\begin{aligned}
\partial_{w_q} \mathcal{S}_{e_2,ii}^2 &= \sum_{jj=1}^{n_v^{2,e_2}} \partial_{w_q} u_{l_2(e_2,jj)}^{s2} d_{ii,jj,t_r}(e_2) + \sum_{jj=1}^{n_v^{2,e_2}} \partial_{w_q} w_{l_2(e_2,jj)}^{s2} d_{ii,jj,t_z}(e_2)
&\quad - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{w_q} u_{l_2(e_2,jj)} d_{ii,jj,t_r}(e_2) - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{w_q} w_{l_2(e_2,jj)} d_{ii,jj,t_z}(e_2)
&\quad - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{w_q} u_{l_2^2(e_2,jj)}^s d_{ii,jj,t_r}(e_2) - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{w_q} w_{l_2^2(e_2,jj)}^s d_{ii,jj,t_z}(e_2)
&\quad + E_s \sum_{jj=1}^{n_v^{2,e_2}} \partial_{w_q} \varepsilon_{l_2^2(e_2,jj)}^2 d_{jj,ii}^s(e_2),
\end{aligned}`,
    description: "",
    references: ["7.20", "7.21"],
    transform: "From (7.20), (7.21)",
    hidden: false,
  },
  {
    id: '7.29',
    section: 'derivatives_of_s_i_2_with_respect_to_w_q',
    label: "\u2202S^{2}/\u2202w",
    latex: String.raw`\partial_{w_q} \mathcal{S}_{e_2,ii}^2 = -\frac{1}{2} d_{ii,jj,t_z}(e_2) \big|_{q=l_2(e_2,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.30',
    section: 'derivatives_of_s_i_2_with_respect_to_u_q',
    label: "S_{e,ii}^2 Reordered",
    latex: String.raw`\begin{aligned}
\partial_{u_q^{s2}} \mathcal{S}_i^2 &= E_s \phi_i^2(r_c,z_c) \partial_{u_q^{s2}} \varepsilon^2(r_c,z_c) - E_s \phi_i^2(r_o,z_o) \partial_{u_q^{s2}} \varepsilon^2(r_o,z_o)
&\quad + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{n_{el}^2} \partial_{u_q^{s2}} \mathcal{S}_{e_2,ii}^2,
\end{aligned}`,
    description: "",
    references: ["7.20"],
    transform: "From (7.20)",
    hidden: false,
  },
  {
    id: '7.31',
    section: 'derivatives_of_s_i_2_with_respect_to_u_q',
    label: "S_{e,ii}^2 Compact Form",
    latex: String.raw`\begin{aligned}
\partial_{u_q^{s2}} \mathcal{S}_{e_2,ii}^2 &= \sum_{jj=1}^{n_v^{2,e_2}} \partial_{u_q^{s2}} u_{l_2(e_2,jj)}^{s2} d_{ii,jj,t_r}(e_2) + \sum_{jj=1}^{n_v^{2,e_2}} \partial_{u_q^{s2}} w_{l_2(e_2,jj)}^{s2} d_{ii,jj,t_z}(e_2)
&\quad - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{u_q^{s2}} u_{l_2(e_2,jj)} d_{ii,jj,t_r}(e_2) - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{u_q^{s2}} w_{l_2(e_2,jj)} d_{ii,jj,t_z}(e_2)
&\quad - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{u_q^{s2}} u_{l_2^2(e_2,jj)}^s d_{ii,jj,t_r}(e_2) - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{u_q^{s2}} w_{l_2^2(e_2,jj)}^s d_{ii,jj,t_z}(e_2)
&\quad + E_s \sum_{jj=1}^{n_v^{2,e_2}} \partial_{u_q^{s2}} \varepsilon_{l_2^2(e_2,jj)}^2 d_{jj,ii}^s(e_2),
\end{aligned}`,
    description: "",
    references: ["7.20", "7.21"],
    transform: "From (7.20), (7.21)",
    hidden: false,
  },
  {
    id: '7.32',
    section: 'derivatives_of_s_i_2_with_respect_to_u_q',
    label: "dS^2/du Compact",
    latex: String.raw`\partial_{u_q^{s2}} \mathcal{S}_{e_2,ii}^2 = d_{ii,jj,t_r}(e_2) \big|_{q=l_2^2(e_2,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.33',
    section: 'derivatives_of_s_i_2_with_respect_to_w_q',
    label: "dS^2/dw Compact",
    latex: String.raw`\begin{aligned}
\partial_{w_q^{s2}} \mathcal{S}_i^2 &= E_s \phi_i^2(r_c,z_c) \partial_{w_q^{s2}} \varepsilon^2(r_c,z_c) - E_s \phi_i^2(r_o,z_o) \partial_{w_q^{s2}} \varepsilon^2(r_o,z_o)
&\quad + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{n_{el}^2} \partial_{w_q^{s2}} \mathcal{S}_{e_2,ii}^2,
\end{aligned}`,
    description: "",
    references: ["7.20"],
    transform: "From (7.20)",
    hidden: false,
  },
  {
    id: '7.34',
    section: 'derivatives_of_s_i_2_with_respect_to_w_q',
    label: "dS^2/d\u03b5 Compact",
    latex: String.raw`\begin{aligned}
\partial_{w_q^{s2}} \mathcal{S}_{e_2,ii}^2 &= \sum_{jj=1}^{n_v^{2,e_2}} \partial_{w_q^{s2}} u_{l_2(e_2,jj)}^{s2} d_{ii,jj,t_r}(e_2) + \sum_{jj=1}^{n_v^{2,e_2}} \partial_{w_q^{s2}} w_{l_2(e_2,jj)}^{s2} d_{ii,jj,t_z}(e_2)
&\quad - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{w_q^{s2}} u_{l_2(e_2,jj)} d_{ii,jj,t_r}(e_2) - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{w_q^{s2}} w_{l_2(e_2,jj)} d_{ii,jj,t_z}(e_2)
&\quad - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{w_q^{s2}} u_{l_2^2(e_2,jj)}^s d_{ii,jj,t_r}(e_2) - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{w_q^{s2}} w_{l_2^2(e_2,jj)}^s d_{ii,jj,t_z}(e_2)
&\quad + E_s \sum_{jj=1}^{n_v^{2,e_2}} \partial_{w_q^{s2}} \varepsilon_{l_2^2(e_2,jj)}^2 d_{jj,ii}^s(e_2),
\end{aligned}`,
    description: "",
    references: ["7.20", "7.21"],
    transform: "From (7.20), (7.21)",
    hidden: false,
  },
  {
    id: '7.35',
    section: 'derivatives_of_s_i_2_with_respect_to_w_q',
    label: "dS^2/dh Compact",
    latex: String.raw`\partial_{w_q^{s2}} \mathcal{S}_{e_2,ii}^2 = d_{ii,jj,t_z}(e_2) \big|_{q=l_2^2(e_2,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.36',
    section: 'derivatives_of_s_i_2_with_respect_to_var',
    label: "\u2202S^{2}/\u2202\u03b5^2",
    latex: String.raw`\begin{aligned}
\partial_{\varepsilon_q^2} \mathcal{S}_i^2 &= E_s \phi_i^2(r_c,z_c) \partial_{\varepsilon_q^2} \varepsilon^2(r_c,z_c) - E_s \phi_i^2(r_o,z_o) \partial_{\varepsilon_q^2} \varepsilon^2(r_o,z_o)
&\quad + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{n_{el}^2} \partial_{\varepsilon_q^2} \mathcal{S}_{e_2,ii}^2,
\end{aligned}`,
    description: "",
    references: ["7.20"],
    transform: "From (7.20)",
    hidden: false,
  },
  {
    id: '7.37',
    section: 'derivatives_of_s_i_2_with_respect_to_var',
    label: "\u2202S^{2}/\u2202\u03b5^2",
    latex: String.raw`\begin{aligned}
\partial_{\varepsilon_q^2} \mathcal{S}_{e_2,ii}^2 &= \sum_{jj=1}^{n_v^{2,e_2}} \partial_{\varepsilon_q^2} u_{l_2(e_2,jj)}^{s2} d_{ii,jj,t_r}(e_2) + \sum_{jj=1}^{n_v^{2,e_2}} \partial_{\varepsilon_q^2} w_{l_2(e_2,jj)}^{s2} d_{ii,jj,t_z}(e_2)
&\quad - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{\varepsilon_q^2} u_{l_2(e_2,jj)} d_{ii,jj,t_r}(e_2) - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{\varepsilon_q^2} w_{l_2(e_2,jj)} d_{ii,jj,t_z}(e_2)
&\quad - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{\varepsilon_q^2} u_{l_2^2(e_2,jj)}^s d_{ii,jj,t_r}(e_2) - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{\varepsilon_q^2} w_{l_2^2(e_2,jj)}^s d_{ii,jj,t_z}(e_2)
&\quad + E_s \sum_{jj=1}^{n_v^{2,e_2}} \partial_{\varepsilon_q^2} \varepsilon_{l_2^2(e_2,jj)}^2 d_{jj,ii}^s(e_2),
\end{aligned}`,
    description: "",
    references: ["7.20", "7.21"],
    transform: "From (7.20), (7.21)",
    hidden: false,
  },
  {
    id: '7.38',
    section: 'derivatives_of_s_i_2_with_respect_to_var',
    label: "\u2202S^{2}/\u2202\u03b5^2",
    latex: String.raw`\partial_{\varepsilon_q^2} \mathcal{S}_{e_2,ii}^2 = E_s d_{jj,ii}^s(e_2) \big|_{q=l_2^2(e_2,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.39',
    section: 'derivatives_of_s_i_2_with_respect_to_h_q',
    label: "\u2202S^{2}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q} \mathcal{S}_i^2 &= E_s \phi_i^2(r_c,z_c) \partial_{h_q} \varepsilon^2(r_c,z_c) - E_s \phi_i^2(r_o,z_o) \partial_{h_q} \varepsilon^2(r_o,z_o)
&\quad + \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{n_{el}^2} \partial_{h_q} \mathcal{S}_{e_2,ii}^2,
\end{aligned}`,
    description: "",
    references: ["7.20"],
    transform: "From (7.20)",
    hidden: false,
  },
  {
    id: '7.40',
    section: 'derivatives_of_s_i_2_with_respect_to_h_q',
    label: "\u2202S^{2}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q} \mathcal{S}_{e_2,ii}^2 &= \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2(e_2,jj)}^{s2} \partial_{h_q} d_{ii,jj,t_r}(e_2) + \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2(e_2,jj)}^{s2} \partial_{h_q} d_{ii,jj,t_z}(e_2)
&\quad - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2(e_2,jj)} \partial_{h_q} d_{ii,jj,t_r}(e_2) - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2(e_2,jj)} \partial_{h_q} d_{ii,jj,t_z}(e_2)
&\quad - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} u_{l_2^2(e_2,jj)}^s \partial_{h_q} d_{ii,jj,t_r}(e_2) - \frac{1}{2} \sum_{jj=1}^{n_v^{2,e_2}} w_{l_2^2(e_2,jj)}^s \partial_{h_q} d_{ii,jj,t_z}(e_2)
&\quad + E_s \sum_{jj=1}^{n_v^{2,e_2}} \varepsilon_{l_2^2(e_2,jj)}^2 \partial_{h_q} d_{jj,ii}^s(e_2),
\end{aligned}`,
    description: "",
    references: ["7.20", "7.21"],
    transform: "From (7.20), (7.21)",
    hidden: false,
  },
  {
    id: '7.41',
    section: 'derivatives_of_s_i_2_with_respect_to_h_q',
    label: "\u2202S^{2}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q} \mathcal{S}_{e_2,ii}^2 &= \sum_{jj=1}^{n_v^{2,e_2}} \Bigg[ \partial_{h_q} d_{ii,jj,t_r}(e_2) \left( u_{l_2(e_2,jj)}^{s2} - \frac{1}{2} u_{l_2(e_2,jj)} - \frac{1}{2} u_{l_2^2(e_2,jj)}^s \right)
&\quad + \partial_{h_q} d_{ii,jj,t_z}(e_2) \left( w_{l_2(e_2,jj)}^{s2} - \frac{1}{2} w_{l_2(e_2,jj)} - \frac{1}{2} w_{l_2^2(e_2,jj)}^s \right)
&\quad + E_s \varepsilon_{l_2^2(e_2,jj)}^2 \partial_{h_q} d_{jj,ii}^s(e_2) \Bigg],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '7.41',
    section: 'derivatives_of_s_i_2_with_respect_to_h_q',
    label: "\u2202S^{2}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q} \mathcal{S}_{e_2,ii}^2 &= \sum_{\substack{jj=1\\ q=S_2(e_2,qq)}}^{n_v^{2,e_2}} \Bigg[ \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,t_r}(e_2) \left( u_{l_2(e_2,jj)}^{s2} - \frac{1}{2} u_{l_2(e_2,jj)} - \frac{1}{2} u_{l_2^2(e_2,jj)}^s \right)
&\quad + \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,t_z}(e_2) \left( w_{l_2(e_2,jj)}^{s2} - \frac{1}{2} w_{l_2(e_2,jj)} - \frac{1}{2} w_{l_2^2(e_2,jj)}^s \right)
&\quad + E_s \varepsilon_{l_2^2(e_2,jj)}^2 \partial_{h_{S_2(e_2,qq)}} d_{jj,ii}^s(e_2) \Bigg].
\end{aligned}`,
    description: "And passing to local spine numbers",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.1',
    section: 'impermeability_condition_i2',
    label: "I2 Equation Recalled",
    latex: String.raw`\left( \mathbf{v}^{s2} - \mathbf{u}^s \right) \cdot \mathbf{n}^2 = 0`,
    description: "",
    references: ["2.51"],
    transform: "From (2.51)",
    hidden: false,
  },
  {
    id: '8.2',
    section: 'impermeability_condition_i2',
    label: "I2 Residual I_i",
    latex: String.raw`(u^{s2} - u^s) n_r^2 + (w^{s2} - w^s) n_z^2 = 0`,
    description: "",
    references: ["2.51"],
    transform: "From (2.51)",
    hidden: false,
  },
  {
    id: '8.3',
    section: 'impermeability_condition_i2',
    label: "I_i with FE Approximation",
    latex: String.raw`\begin{aligned}
\mathcal{I}_i &= \int_{\partial \Omega^{2,f}} \phi_i^2 u^{s2} n_r^2 + \int_{\partial \Omega^{2,f}} \phi_i^2 w^{s2} n_z^2
&\quad - \int_{\partial \Omega^{2,f}} \phi_i^2 u^s n_r^2 - \int_{\partial \Omega^{2,f}} \phi_i^2 w^s n_z^2,
\end{aligned}`,
    description: "Where , and we define the -th residual of the impermeability equation as",
    references: ["2.51"],
    transform: "From (2.51)",
    hidden: false,
  },
  {
    id: '8.4',
    section: 'impermeability_condition_i2',
    label: "I_i Rearranged",
    latex: String.raw`\begin{aligned}
u^s &\approx \sum_{j=1}^{n_v} u_j^s \phi_j^2,
\end{aligned}`,
    description: "We recall the approximations given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.5',
    section: 'impermeability_condition_i2',
    label: "I_i Gathered Sums",
    latex: String.raw`\begin{aligned}
w^s &\approx \sum_{j=1}^{n_v} w_j^s \phi_j^2,
\end{aligned}`,
    description: "We recall the approximations given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.6',
    section: 'impermeability_condition_i2',
    label: "I_i Element-wise",
    latex: String.raw`\begin{aligned}
u^{s2} &\approx \sum_{j=1}^{n_v} u_j^{s2} \phi_j^2,
\end{aligned}`,
    description: "We recall the approximations given by and we introduce",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.7',
    section: 'impermeability_condition_i2',
    label: "I_i = Sum of I_{e,ii}",
    latex: String.raw`\begin{aligned}
w^{s2} &\approx \sum_{j=1}^{n_v} w_j^{s2} \phi_j^2.
\end{aligned}`,
    description: "We recall the approximations given by and we introduce",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.8',
    section: 'impermeability_condition_i2',
    label: "I_{e,ii} Definition",
    latex: String.raw`\begin{aligned}
\mathcal{I}_i &= \int_{\partial \Omega^{2,f}} \phi_i^2 \left( \sum_{j=1}^{n_v} u_j^{s2} \phi_j^2 \right) n_r^2 + \int_{\partial \Omega^{2,f}} \phi_i^2 \left( \sum_{j=1}^{n_v} w_j^{s2} \phi_j^2 \right) n_z^2
&\quad - \int_{\partial \Omega^{2,f}} \phi_i^2 \left( \sum_{j=1}^{n_v} u_j^s \phi_j^2 \right) n_r^2 - \int_{\partial \Omega^{2,f}} \phi_i^2 \left( \sum_{j=1}^{n_v} w_j^s \phi_j^2 \right) n_z^2,
\end{aligned}`,
    description: "We recall the approximations given by and we introduce Using these, we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.9',
    section: 'impermeability_condition_i2',
    label: "dI_i/du Global",
    latex: String.raw`\begin{aligned}
\mathcal{I}_i &= \sum_{j=1}^{n_v} u_j^{s2} \int_{\partial \Omega^{2,f}} \phi_i^2 \phi_j^2 n_r^2 + \sum_{j=1}^{n_v} w_j^{s2} \int_{\partial \Omega^{2,f}} \phi_i^2 \phi_j^2 n_z^2
&\quad - \sum_{j=1}^{n_v} u_j^s \int_{\partial \Omega^{2,f}} \phi_i^2 \phi_j^2 n_r^2 - \sum_{j=1}^{n_v} w_j^s \int_{\partial \Omega^{2,f}} \phi_i^2 \phi_j^2 n_z^2,
\end{aligned}`,
    description: "Using these, we have i.e",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.10',
    section: 'impermeability_condition_i2',
    label: "dI_{e,ii}/du Expanded",
    latex: String.raw`\begin{aligned}
\mathcal{I}_i &= \sum_{j=1}^{n_v} \Bigg[ u_j^{s2} \int_{\partial \Omega^{2,f}} \phi_i^2 \phi_j^2 n_r^2 + w_j^{s2} \int_{\partial \Omega^{2,f}} \phi_i^2 \phi_j^2 n_z^2
&\quad - u_j^s \int_{\partial \Omega^{2,f}} \phi_i^2 \phi_j^2 n_r^2 - w_j^s \int_{\partial \Omega^{2,f}} \phi_i^2 \phi_j^2 n_z^2 \Bigg].
\end{aligned}`,
    description: "Gathering the sums we obtain",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.11',
    section: 'impermeability_condition_i2',
    label: "dI_{e,ii}/du Compact",
    latex: String.raw`\mathcal{I}_i = \sum_{e_2=1}^{n_{el}^2} \mathcal{I}_{e_2,ii}`,
    description: "Gathering the sums we obtain Now, we decompose the integrals into the sum of the integrals over each line-element on boundary 2",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.12',
    section: 'impermeability_condition_i2',
    label: "dI_i/dw Global",
    latex: String.raw`\begin{aligned}
\mathcal{I}_{e_2,ii} &= \sum_{jj=1}^{n_v^{2,e_2}} \Bigg[ u_{l_2(e_2,jj)}^{s2} \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 n_r^2
&\quad + w_{l_2(e_2,jj)}^{s2} \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 n_z^2
&\quad - u_{l_2(e_2,jj)}^s \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 n_r^2
&\quad - w_{l_2(e_2,jj)}^s \int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 n_z^2 \Bigg],
\end{aligned}`,
    description: "Gathering the sums we obtain Now, we decompose the integrals into the sum of the integrals over each line-element on boundary 2 where",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.13',
    section: 'impermeability_condition_i2',
    label: "dI_{e,ii}/dw Expanded",
    latex: String.raw`\begin{aligned}
\mathcal{I}_{e_2,ii} &= \sum_{jj=1}^{n_v^{2,e_2}} \Bigg( u_{l_2(e_2,jj)}^{s2} \underbrace{\int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 n_r^2}_{d_{ii,jj,n_r}(e_2)}
&\quad + w_{l_2(e_2,jj)}^{s2} \underbrace{\int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 n_z^2}_{d_{ii,jj,n_z}(e_2)}
&\quad - u_{l_2(e_2,jj)}^s \underbrace{\int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 n_r^2}_{d_{ii,jj,n_r}(e_2)}
&\quad - w_{l_2(e_2,jj)}^s \underbrace{\int_{\partial \Omega_{e_2}^2} \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2 n_z^2}_{d_{ii,jj,n_z}(e_2)} \Bigg),
\end{aligned}`,
    description: "And expressing sums over index in terms of local node numbers we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.14',
    section: 'impermeability_condition_i2',
    label: "dI_{e,ii}/dw Compact",
    latex: String.raw`\begin{aligned}
\mathcal{I}_{e_2,ii} &= \sum_{jj=1}^{n_v^{2,e_2}} \Bigg( u_{l_2(e_2,jj)}^{s2} d_{ii,jj,n_r}(e_2) + w_{l_2(e_2,jj)}^{s2} d_{ii,jj,n_z}(e_2)
&\quad - u_{l_2(e_2,jj)}^s d_{ii,jj,n_r}(e_2) - w_{l_2(e_2,jj)}^s d_{ii,jj,n_z}(e_2) \Bigg).
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.15',
    section: 'impermeability_condition_i2',
    label: "dI_i/dh Global",
    latex: String.raw`\mathcal{I}_i = \sum_{e_2=1}^{n_{el}^2} \mathcal{I}_{e_2,ii}`,
    description: "Summarising and re-arranging we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.16',
    section: 'impermeability_condition_i2',
    label: "dI_{e,ii}/dh Step 1",
    latex: String.raw`\begin{aligned}
\mathcal{I}_{e_2,ii} &= \sum_{jj=1}^{n_v^{2,e_2}} \Bigg( d_{ii,jj,n_r}(e_2) \left[ u_{l_2(e_2,jj)}^{s2} - u_{l_2(e_2,jj)}^s \right]
&\quad + d_{ii,jj,n_z}(e_2) \left[ w_{l_2(e_2,jj)}^{s2} - w_{l_2(e_2,jj)}^s \right] \Bigg).
\end{aligned}`,
    description: "Summarising and re-arranging we have where",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.17',
    section: 'derivatives_of_i_i_with_respect_to_u_q_s',
    label: "dI_{e,ii}/dh Expanded",
    latex: String.raw`\begin{aligned}
\partial_{u_q^{s2}} \mathcal{I}_i &= \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{n_{el}^2} \partial_{u_q^{s2}} \sum_{jj=1}^{n_v^{2,e_2}} \Bigg[ u_{l_2(e_2,jj)}^{s2} d_{ii,jj,n_r}(e_2) + w_{l_2(e_2,jj)}^{s2} d_{ii,jj,n_z}(e_2)
&\quad - u_{l_2(e_2,jj)}^s d_{ii,jj,n_r}(e_2) - w_{l_2(e_2,jj)}^s d_{ii,jj,n_z}(e_2) \Bigg],
\end{aligned}`,
    description: "Where % 8.1 We now calculate the derivatives of with respect to , and",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.18',
    section: 'derivatives_of_i_i_with_respect_to_u_q_s',
    label: "dI_{e,ii}/dh Compact",
    latex: String.raw`\partial_{u_q^{s2}} \mathcal{I}_i = \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{n_{el}^2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{u_q^{s2}} u_{l_2(e_2,jj)}^{s2} d_{ii,jj,n_r}(e_2) = \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{n_{el}^2} d_{ii,jj,n_r}(e_2) \Big|_{q=l_2(e_2,jj)}`,
    description: "We consider passing the derivative into the sum we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.19',
    section: 'derivatives_of_i_i_with_respect_to_u_q_s',
    label: "I_{e,ii} Reordered",
    latex: String.raw`\partial_{u_q^{s2}} \mathcal{I}_i = \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{n_{el}^2} d_{ii,jj,n_r}(e_2)`,
    description: "Passing the derivative into the sum we have i.e",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.20',
    section: 'derivatives_of_i_i_with_respect_to_w_q_s',
    label: "I_{e,ii} Compact Form",
    latex: String.raw`\begin{aligned}
\partial_{w_q^{s2}} \mathcal{I}_i &= \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{n_{el}^2} \partial_{w_q^{s2}} \sum_{jj=1}^{n_v^{2,e_2}} \Bigg[ u_{l_2(e_2,jj)}^{s2} d_{ii,jj,n_r}(e_2) + w_{l_2(e_2,jj)}^{s2} d_{ii,jj,n_z}(e_2)
&\quad - u_{l_2(e_2,jj)}^s d_{ii,jj,n_r}(e_2) - w_{l_2(e_2,jj)}^s d_{ii,jj,n_z}(e_2) \Bigg],
\end{aligned}`,
    description: "Ng the derivative into the sum we have i.e",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.21',
    section: 'derivatives_of_i_i_with_respect_to_w_q_s',
    label: "dI/du Compact",
    latex: String.raw`\partial_{w_q^{s2}} \mathcal{I}_i = \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{n_{el}^2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{w_q^{s2}} w_{l_2(e_2,jj)}^{s2} d_{ii,jj,n_z}(e_2) = \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{n_{el}^2} d_{ii,jj,n_z}(e_2) \Big|_{q=l_2(e_2,jj)}`,
    description: "We consider passing the derivative into the sum we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.22',
    section: 'derivatives_of_i_i_with_respect_to_w_q_s',
    label: "dI/dw Compact",
    latex: String.raw`\partial_{w_q^{s2}} \mathcal{I}_i = \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{n_{el}^2} d_{ii,jj,n_z}(e_2)`,
    description: "Passing the derivative into the sum we have i.e",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '8.23',
    section: 'derivatives_of_i_i_with_respect_to_h_q',
    label: "\u2202I/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q} \mathcal{I}_i &= \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)}}^{n_{el}^2} \sum_{jj=1}^{n_v^{2,e_2}} \partial_{h_q} \Bigg[ u_{l_2(e_2,jj)}^{s2} d_{ii,jj,n_r}(e_2) + w_{l_2(e_2,jj)}^{s2} d_{ii,jj,n_z}(e_2)
&\quad - u_{l_2(e_2,jj)}^s d_{ii,jj,n_r}(e_2) - w_{l_2(e_2,jj)}^s d_{ii,jj,n_z}(e_2) \Bigg].
\end{aligned}`,
    description: "Ative into the sum we have i.e",
    references: ["8.14"],
    transform: "From (8.14)",
    hidden: false,
  },
  {
    id: '8.24',
    section: 'derivatives_of_i_i_with_respect_to_h_q',
    label: "\u2202I/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q} \mathcal{I}_i &= \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)\\ q=S_2(e_2,qq)}}^{n_{el}^2} \sum_{jj=1}^{n_v^{2,e_2}} \Bigg[ u_{l_2(e_2,jj)}^{s2} \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,n_r}(e_2)
&\quad + w_{l_2(e_2,jj)}^{s2} \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,n_z}(e_2)
&\quad - u_{l_2(e_2,jj)}^s \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,n_r}(e_2) - w_{l_2(e_2,jj)}^s \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,n_z}(e_2) \Bigg],
\end{aligned}`,
    description: "",
    references: ["8.14"],
    transform: "From (8.14)",
    hidden: false,
  },
  {
    id: '8.25',
    section: 'derivatives_of_i_i_with_respect_to_h_q',
    label: "\u2202I/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q} \mathcal{I}_i &= \sum_{\substack{e_2=1\\ i=l_2(e_2,ii)\\ q=S_2(e_2,qq)}}^{n_{el}^2} \sum_{jj=1}^{n_v^{2,e_2}} \Bigg[ \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,n_r}(e_2) \left( u_{l_2(e_2,jj)}^{s2} - u_{l_2(e_2,jj)}^s \right)
&\quad + \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,n_z}(e_2) \left( w_{l_2(e_2,jj)}^{s2} - w_{l_2(e_2,jj)}^s \right) \Bigg].
\end{aligned}`,
    description: "Passing to local spine numbers we have i.e",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '12.1',
    section: 'the_slip_condition_equation_on_boundary_',
    label: "SC1 Equation Recalled",
    latex: String.raw`\left( \mathbf{v}^{s1} - \mathbf{u} \right) \cdot \left( \mathbf{I} - \mathbf{n}^1 \mathbf{n}^1 \right) = \frac{1 + 4 E_g B_g}{4 B_g} \nabla^s \sigma^1`,
    description: "",
    references: ["2.47"],
    transform: "From (2.47)",
    hidden: false,
  },
  {
    id: '12.2',
    section: 'the_slip_condition_equation_on_boundary_',
    label: "SC1 Residual S_i^1",
    latex: String.raw`\begin{aligned}
\mathcal{S}_i^1 &= \int_{\partial \Omega^{1,\ell}} \phi_i^1 (\mathbf{v}^{s1} - \mathbf{u}) \cdot \mathbf{t}^1 - \frac{1 + 4 E_g B_g}{4 B_g} \int_{\partial \Omega^{1,\ell}} \phi_i^1 \mathbf{t}^1 \cdot \nabla^s \sigma^1,
\end{aligned}`,
    description: "",
    references: ["2.47"],
    transform: "From (2.47)",
    hidden: false,
  },
  {
    id: '12.3',
    section: 'the_slip_condition_equation_on_boundary_',
    label: "S_i^1 with FE Approximation",
    latex: String.raw`\begin{aligned}
\mathcal{S}_i^1 &= \int_{\partial \Omega^{1,\ell}} \phi_i^1 \mathbf{v}^{s1} \cdot \mathbf{t}^1 - \int_{\partial \Omega^{1,\ell}} \phi_i^1 \mathbf{u} \cdot \mathbf{t}^1
&\quad - \frac{1 + 4 E_g B_g}{4 B_g} \int_{\partial \Omega^{1,\ell}} \phi_i^1 (\partial_s \sigma^1) \mathbf{t}^1 \cdot \mathbf{t}^1,
\end{aligned}`,
    description: "",
    references: ["2.47"],
    transform: "From (2.47)",
    hidden: false,
  },
  {
    id: '12.4',
    section: 'the_slip_condition_equation_on_boundary_',
    label: "S_i^1 Rearranged",
    latex: String.raw`\begin{aligned}
\mathcal{S}_i^1 &= \int_{\partial \Omega^{1,\ell}} \phi_i^1 u^{s1} t_r^1 + \int_{\partial \Omega^{1,\ell}} \phi_i^1 w^{s1} t_z^1 - \int_{\partial \Omega^{1,\ell}} \phi_i^1 u t_r^1 - \int_{\partial \Omega^{1,\ell}} \phi_i^1 w t_z^1
&\quad - \frac{1 + 4 E_g B_g}{4 B_g} \int_{\partial \Omega^{1,\ell}} \phi_i^1 \partial_s \sigma^1.
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '12.5',
    section: 'the_slip_condition_equation_on_boundary_',
    label: "S_i^1 Gathered Sums",
    latex: String.raw`- \int_{\partial \Omega^{1,\ell}} \phi_i^1 \partial_s \sigma^1 = - \phi_i^1 \sigma^1 \Big|_{(r_j,z_j)}^{(r_a,z_a)} + \int_{\partial \Omega^{1}} \sigma^1 \partial_s \phi_i^1`,
    description: "Equivalently We consider the last integral on the right hand side above and we integrate by parts to obtain",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '12.6',
    section: 'the_slip_condition_equation_on_boundary_',
    label: "S_i^1 Element-wise",
    latex: String.raw`\begin{aligned}
\mathcal{S}_i^1 &= \int_{\partial \Omega^{1}} \phi_i^1 u^{s1} t_r^1 + \int_{\partial \Omega^{1}} \phi_i^1 w^{s1} t_z^1 - \int_{\partial \Omega^{1}} \phi_i^1 u t_r^1 - \int_{\partial \Omega^{1}} \phi_i^1 w t_z^1
&\quad + \frac{1 + 4 E_g B_g}{4 B_g} \int_{\partial \Omega^{1}} \sigma^1 \partial_s \phi_i^1 + \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_j,z_j) \sigma^1(r_j,z_j)
&\quad - \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_a,z_a) \sigma^1(r_a,z_a).
\end{aligned}`,
    description: "We consider the last integral on the right hand side above and we integrate by parts to obtain This yields",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '12.7',
    section: 'the_slip_condition_equation_on_boundary_',
    label: "S_i^1 = Sum of S_{e,ii}^1",
    latex: String.raw`\begin{aligned}
u &\approx \sum_{j=1}^{n_v} u_j \phi_j,
\end{aligned}`,
    description: "This yields We now recall the approximations",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '12.8',
    section: 'the_slip_condition_equation_on_boundary_',
    label: "S_{e,ii}^1 Definition",
    latex: String.raw`\begin{aligned}
w &\approx \sum_{j=1}^{n_v} w_j \phi_j,
\end{aligned}`,
    description: "This yields We now recall the approximations",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '12.9',
    section: 'the_slip_condition_equation_on_boundary_',
    label: "dS_i^1/du Global",
    latex: String.raw`\begin{aligned}
\sigma^1 &\approx \sum_{j=1}^{n_v} \sigma_j^1 \phi_j,
\end{aligned}`,
    description: "This yields We now recall the approximations",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '12.10',
    section: 'the_slip_condition_equation_on_boundary_',
    label: "dS_{e,ii}^1/du Expanded",
    latex: String.raw`\begin{aligned}
u^{s1} &\approx \sum_{j=1}^{n_v} u_j^{s1} \phi_j,
\end{aligned}`,
    description: "We now recall the approximations and we introduce",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '12.11',
    section: 'the_slip_condition_equation_on_boundary_',
    label: "dS_{e,ii}^1/du Compact",
    latex: String.raw`\begin{aligned}
w^{s1} &\approx \sum_{j=1}^{n_v} w_j^{s1} \phi_j.
\end{aligned}`,
    description: "We now recall the approximations and we introduce",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '12.12',
    section: 'the_slip_condition_equation_on_boundary_',
    label: "dS_i^1/dw Global",
    latex: String.raw`\begin{aligned}
\mathcal{S}_i^1 &= \int_{\partial \Omega^{1}} \phi_i^1 \left( \sum_{j=1}^{n_v} u_j^{s1} \phi_j \right) t_r^1 + \int_{\partial \Omega^{1}} \phi_i^1 \left( \sum_{j=1}^{n_v} w_j^{s1} \phi_j \right) t_z^1
&\quad - \int_{\partial \Omega^{1}} \phi_i^1 \left( \sum_{j=1}^{n_v} u_j \phi_j \right) t_r^1 - \int_{\partial \Omega^{1}} \phi_i^1 \left( \sum_{j=1}^{n_v} w_j \phi_j \right) t_z^1
&\quad + \frac{1 + 4 E_g B_g}{4 B_g} \int_{\partial \Omega^{1}} \left( \sum_{j=1}^{n_v} \sigma_j^1 \phi_j \right) \partial_s \phi_i^1
&\quad + \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_c,z_c) \sigma^1(r_c,z_c) - \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_a,z_a) \sigma^1(r_a,z_a).
\end{aligned}`,
    description: "We now recall the approximations and we introduce Substituting these approximations into the residual equation we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '12.13',
    section: 'the_slip_condition_equation_on_boundary_',
    label: "dS_{e,ii}^1/dw Expanded",
    latex: String.raw`\begin{aligned}
\mathcal{S}_i^1 &= \sum_{j=1}^{n_v} u_j^{s1} \int_{\partial \Omega^{1}} \phi_i^1 \phi_j^1 t_r^1 + \sum_{j=1}^{n_v} w_j^{s1} \int_{\partial \Omega^{1}} \phi_i^1 \phi_j^1 t_z^1
&\quad - \sum_{j=1}^{n_v} u_j \int_{\partial \Omega^{1}} \phi_i^1 \phi_j^1 t_r^1 - \sum_{j=1}^{n_v} w_j \int_{\partial \Omega^{1}} \phi_i^1 \phi_j^1 t_z^1
&\quad + \frac{1 + 4 E_g B_g}{4 B_g} \sum_{j=1}^{n_v} \sigma_j^1 \int_{\partial \Omega^{1}} \phi_j^1 \partial_s \phi_i^1.
\end{aligned}`,
    description: "Moving the integrals into the sum we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '12.14',
    section: 'the_slip_condition_equation_on_boundary_',
    label: "dS_{e,ii}^1/dw Compact",
    latex: String.raw`\begin{aligned}
\mathcal{S}_i^1 &= \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_c,z_c) \sigma^1(r_c,z_c) - \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_a,z_a) \sigma^1(r_a,z_a)
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{n_{el}^1} \mathcal{S}_{e_1,ii}^1,
\end{aligned}`,
    description: "Decomposing the integral into sums over line-elements and passing to local node numbers we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '12.15',
    section: 'the_slip_condition_equation_on_boundary_',
    label: "dS_i^1/d\u03c3 Global",
    latex: String.raw`\begin{aligned}
\mathcal{S}_{e_1,ii}^1 &= \sum_{jj=1}^{n_v^{1,e_1}} u_{l_1(e_1,jj)}^{s1} \underbrace{\int_{\partial \Omega_{e_1}^1} \phi_{l_1(e_1,ii)}^1 \phi_{l_1(e_1,jj)}^1 t_r^1}_{c_{ii,jj,t_r}(e_1)}
&\quad + \sum_{jj=1}^{n_v^{1,e_1}} w_{l_1(e_1,jj)}^{s1} \underbrace{\int_{\partial \Omega_{e_1}^1} \phi_{l_1(e_1,ii)}^1 \phi_{l_1(e_1,jj)}^1 t_z^1}_{c_{ii,jj,t_z}(e_1)}
&\quad - \sum_{jj=1}^{n_v^{1,e_1}} u_{l_1(e_1,jj)} \underbrace{\int_{\partial \Omega_{e_1}^1} \phi_{l_1(e_1,ii)}^1 \phi_{l_1(e_1,jj)}^1 t_r^1}_{c_{ii,jj,t_r}(e_1)}
&\quad - \sum_{jj=1}^{n_v^{1,e_1}} w_{l_1(e_1,jj)} \underbrace{\int_{\partial \Omega_{e_1}^1} \phi_{l_1(e_1,ii)}^1 \phi_{l_1(e_1,jj)}^1 t_z^1}_{c_{ii,jj,t_z}(e_1)}
&\quad + \frac{1 + 4 E_g B_g}{4 B_g} \sum_{jj=1}^{n_v^{1,e_1}} \sigma_{l_1(e_1,jj)}^1 \underbrace{\int_{\partial \Omega_{e_1}^1} \phi_{l_1(e_1,ii)}^1 \partial_s \phi_{l_1(e_1,jj)}^1}_{c_{jj,ii}^s(e_1)},
\end{aligned}`,
    description: "Decomposing the integral into sums over line-elements and passing to local node numbers we have where",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '12.16',
    section: 'the_slip_condition_equation_on_boundary_',
    label: "dS_{e,ii}^1/d\u03c3 Expanded",
    latex: String.raw`\begin{aligned}
\mathcal{S}_{e_1,ii}^1 &= \sum_{jj=1}^{n_v^{1,e_1}} u_{l_1(e_1,jj)}^{s1} c_{ii,jj,t_r}(e_1) + \sum_{jj=1}^{n_v^{1,e_1}} w_{l_1(e_1,jj)}^{s1} c_{ii,jj,t_z}(e_1)
&\quad - \sum_{jj=1}^{n_v^{1,e_1}} u_{l_1(e_1,jj)} c_{ii,jj,t_r}(e_1) - \sum_{jj=1}^{n_v^{1,e_1}} w_{l_1(e_1,jj)} c_{ii,jj,t_z}(e_1)
&\quad + \frac{1 + 4 E_g B_g}{4 B_g} \sum_{jj=1}^{n_v^{1,e_1}} \sigma_{l_1(e_1,jj)}^1 c_{jj,ii}^s(e_1).
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '12.17',
    section: 'the_slip_condition_equation_on_boundary_',
    label: "dS_{e,ii}^1/d\u03c3 Compact",
    latex: String.raw`\begin{aligned}
\mathcal{S}_i^1 &= \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_c,z_c) \sigma^1(r_c,z_c) - \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_a,z_a) \sigma^1(r_a,z_a)
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{n_{el}^1} \mathcal{S}_{e_1,ii}^1,
\end{aligned}`,
    description: "Summarising and re-arranging terms we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '12.18',
    section: 'the_slip_condition_equation_on_boundary_',
    label: "dS_i^1/dh Global",
    latex: String.raw`\begin{aligned}
\mathcal{S}_{e_1,ii}^1 &= \sum_{jj=1}^{n_v^{1,e_1}} \Bigg[ c_{ii,jj,t_r}(e_1) \left( u_{l_1(e_1,jj)}^{s1} - u_{l_1(e_1,jj)} \right)
&\quad + c_{ii,jj,t_z}(e_1) \left( w_{l_1(e_1,jj)}^{s1} - w_{l_1(e_1,jj)} \right)
&\quad + \frac{1 + 4 E_g B_g}{4 B_g} \sigma_{l_1(e_1,jj)}^1 c_{jj,ii}^s(e_1) \Bigg].
\end{aligned}`,
    description: "Summarising and re-arranging terms we have where",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '12.19',
    section: 'derivatives_of_s_i_1_with_respect_to_u_q',
    label: "\u2202S^{1}/\u2202u",
    latex: String.raw`\begin{aligned}
\partial_{u_q} \mathcal{S}_i^1 &= \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_c,z_c) \partial_{u_q} \sigma^1(r_c,z_c) - \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_a,z_a) \partial_{u_q} \sigma^1(r_a,z_a)
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{n_{el}^1} \partial_{u_q} \mathcal{S}_{e_1,ii}^1.
\end{aligned}`,
    description: "",
    references: ["12.14"],
    transform: "From (12.14)",
    hidden: false,
  },
  {
    id: '12.20',
    section: 'derivatives_of_s_i_1_with_respect_to_u_q',
    label: "\u2202S^{1}/\u2202u",
    latex: String.raw`\begin{aligned}
\partial_{u_q} \mathcal{S}_{e_1,ii}^1 &= \sum_{jj=1}^{n_v^{1,e_1}} \partial_{u_q} u_{l_1(e_1,jj)}^{s1} c_{ii,jj,t_r}(e_1) + \sum_{jj=1}^{n_v^{1,e_1}} \partial_{u_q} w_{l_1(e_1,jj)}^{s1} c_{ii,jj,t_z}(e_1)
&\quad - \sum_{jj=1}^{n_v^{1,e_1}} c_{ii,jj,t_r}(e_1) \partial_{u_q} u_{l_1(e_1,jj)} - \sum_{jj=1}^{n_v^{1,e_1}} \partial_{u_q} w_{l_1(e_1,jj)} c_{ii,jj,t_z}(e_1)
&\quad + \frac{1 + 4 E_g B_g}{4 B_g} \sum_{jj=1}^{n_v^{1,e_1}} \partial_{u_q} \sigma_{l_1(e_1,jj)}^1 c_{jj,ii}^s(e_1),
\end{aligned}`,
    description: "",
    references: ["12.14", "12.16"],
    transform: "From (12.14), (12.16)",
    hidden: false,
  },
  {
    id: '12.21',
    section: 'derivatives_of_s_i_1_with_respect_to_u_q',
    label: "\u2202S^{1}/\u2202u",
    latex: String.raw`\partial_{u_q} \mathcal{S}_{e_1,ii}^1 = - c_{ii,jj,t_r}(e_1) \big|_{q=l_1(e_1,jj)}`,
    description: "",
    references: ["12.16"],
    transform: "From (12.16)",
    hidden: false,
  },
  {
    id: '12.22',
    section: 'derivatives_of_s_i_1_with_respect_to_w_q',
    label: "\u2202S^{1}/\u2202w",
    latex: String.raw`\begin{aligned}
\partial_{w_q} \mathcal{S}_i^1 &= \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_c,z_c) \partial_{w_q} \sigma^1(r_c,z_c) - \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_a,z_a) \partial_{w_q} \sigma^1(r_a,z_a)
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{n_{el}^1} \partial_{w_q} \mathcal{S}_{e_1,ii}^1.
\end{aligned}`,
    description: "",
    references: ["12.14"],
    transform: "From (12.14)",
    hidden: false,
  },
  {
    id: '12.23',
    section: 'derivatives_of_s_i_1_with_respect_to_w_q',
    label: "\u2202S^{1}/\u2202w",
    latex: String.raw`\begin{aligned}
\partial_{w_q} \mathcal{S}_{e_1,ii}^1 &= \sum_{jj=1}^{n_v^{1,e_1}} \partial_{w_q} u_{l_1(e_1,jj)}^{s1} c_{ii,jj,t_r}(e_1) + \sum_{jj=1}^{n_v^{1,e_1}} \partial_{w_q} w_{l_1(e_1,jj)}^{s1} c_{ii,jj,t_z}(e_1)
&\quad - \sum_{jj=1}^{n_v^{1,e_1}} c_{ii,jj,t_r}(e_1) \partial_{w_q} u_{l_1(e_1,jj)} - \sum_{jj=1}^{n_v^{1,e_1}} \partial_{w_q} w_{l_1(e_1,jj)} c_{ii,jj,t_z}(e_1)
&\quad + \frac{1 + 4 E_g B_g}{4 B_g} \sum_{jj=1}^{n_v^{1,e_1}} \partial_{w_q} \sigma_{l_1(e_1,jj)}^1 c_{jj,ii}^s(e_1),
\end{aligned}`,
    description: "",
    references: ["12.14", "12.16"],
    transform: "From (12.14), (12.16)",
    hidden: false,
  },
  {
    id: '12.24',
    section: 'derivatives_of_s_i_1_with_respect_to_w_q',
    label: "\u2202S^{1}/\u2202w",
    latex: String.raw`\partial_{w_q} \mathcal{S}_{e_1,ii}^1 = - c_{ii,jj,t_z}(e_1) \big|_{q=l_1(e_1,jj)}`,
    description: "",
    references: ["12.16"],
    transform: "From (12.16)",
    hidden: false,
  },
  {
    id: '12.25',
    section: 'derivatives_of_s_i_1_with_respect_to_u_q',
    label: "S_{e,ii}^1 Reordered",
    latex: String.raw`\begin{aligned}
\partial_{u_q^{s1}} \mathcal{S}_i^1 &= \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_c,z_c) \partial_{u_q^{s1}} \sigma^1(r_c,z_c) - \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_a,z_a) \partial_{u_q^{s1}} \sigma^1(r_a,z_a)
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{n_{el}^1} \partial_{u_q^{s1}} \mathcal{S}_{e_1,ii}^1.
\end{aligned}`,
    description: "",
    references: ["12.14"],
    transform: "From (12.14)",
    hidden: false,
  },
  {
    id: '12.26',
    section: 'derivatives_of_s_i_1_with_respect_to_u_q',
    label: "S_{e,ii}^1 Compact Form",
    latex: String.raw`\begin{aligned}
\partial_{u_q^{s1}} \mathcal{S}_{e_1,ii}^1 &= \sum_{jj=1}^{n_v^{1,e_1}} \partial_{u_q^{s1}} u_{l_1(e_1,jj)}^{s1} c_{ii,jj,t_r}(e_1) + \sum_{jj=1}^{n_v^{1,e_1}} \partial_{u_q^{s1}} w_{l_1(e_1,jj)}^{s1} c_{ii,jj,t_z}(e_1)
&\quad - \sum_{jj=1}^{n_v^{1,e_1}} c_{ii,jj,t_r}(e_1) \partial_{u_q^{s1}} u_{l_1(e_1,jj)} - \sum_{jj=1}^{n_v^{1,e_1}} \partial_{u_q^{s1}} w_{l_1(e_1,jj)} c_{ii,jj,t_z}(e_1)
&\quad + \frac{1 + 4 E_g B_g}{4 B_g} \sum_{jj=1}^{n_v^{1,e_1}} \partial_{u_q^{s1}} \sigma_{l_1(e_1,jj)}^1 c_{jj,ii}^s(e_1),
\end{aligned}`,
    description: "",
    references: ["12.14", "12.16"],
    transform: "From (12.14), (12.16)",
    hidden: false,
  },
  {
    id: '12.27',
    section: 'derivatives_of_s_i_1_with_respect_to_u_q',
    label: "dS^1/du Compact",
    latex: String.raw`\partial_{u_q^{s1}} \mathcal{S}_{e_1,ii}^1 = c_{ii,jj,t_r}(e_1) \big|_{q=l_1(e_1,jj)}`,
    description: "",
    references: ["12.16"],
    transform: "From (12.16)",
    hidden: false,
  },
  {
    id: '12.28',
    section: 'derivatives_of_s_i_1_with_respect_to_w_q',
    label: "dS^1/dw Compact",
    latex: String.raw`\begin{aligned}
\partial_{w_q^{s1}} \mathcal{S}_i^1 &= \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_c,z_c) \partial_{w_q^{s1}} \sigma^1(r_c,z_c) - \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_a,z_a) \partial_{w_q^{s1}} \sigma^1(r_a,z_a)
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{n_{el}^1} \partial_{w_q^{s1}} \mathcal{S}_{e_1,ii}^1.
\end{aligned}`,
    description: "",
    references: ["12.14"],
    transform: "From (12.14)",
    hidden: false,
  },
  {
    id: '12.29',
    section: 'derivatives_of_s_i_1_with_respect_to_w_q',
    label: "dS^1/d\u03c3 Compact",
    latex: String.raw`\begin{aligned}
\partial_{w_q^{s1}} \mathcal{S}_{e_1,ii}^1 &= \sum_{jj=1}^{n_v^{1,e_1}} \partial_{w_q^{s1}} u_{l_1(e_1,jj)}^{s1} c_{ii,jj,t_r}(e_1) + \sum_{jj=1}^{n_v^{1,e_1}} \partial_{w_q^{s1}} w_{l_1(e_1,jj)}^{s1} c_{ii,jj,t_z}(e_1)
&\quad - \sum_{jj=1}^{n_v^{1,e_1}} c_{ii,jj,t_r}(e_1) \partial_{w_q^{s1}} u_{l_1(e_1,jj)} - \sum_{jj=1}^{n_v^{1,e_1}} \partial_{w_q^{s1}} w_{l_1(e_1,jj)} c_{ii,jj,t_z}(e_1)
&\quad + \frac{1 + 4 E_g B_g}{4 B_g} \sum_{jj=1}^{n_v^{1,e_1}} \partial_{w_q^{s1}} \sigma_{l_1(e_1,jj)}^1 c_{jj,ii}^s(e_1),
\end{aligned}`,
    description: "",
    references: ["12.14", "12.16"],
    transform: "From (12.14), (12.16)",
    hidden: false,
  },
  {
    id: '12.30',
    section: 'derivatives_of_s_i_1_with_respect_to_w_q',
    label: "dS^1/dh Compact",
    latex: String.raw`\partial_{w_q^{s1}} \mathcal{S}_{e_1,ii}^1 = c_{ii,jj,t_z}(e_1) \big|_{q=l_1(e_1,jj)}`,
    description: "",
    references: ["12.16"],
    transform: "From (12.16)",
    hidden: false,
  },
  {
    id: '12.31',
    section: 'derivatives_of_s_i_1_with_respect_to_sig',
    label: "\u2202S^{1}/\u2202\u03c3^1",
    latex: String.raw`\begin{aligned}
\partial_{\sigma_q^1} \mathcal{S}_i^1 &= \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_c,z_c) \partial_{\sigma_q^1} \sigma^1(r_c,z_c) - \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_a,z_a) \partial_{\sigma_q^1} \sigma^1(r_a,z_a)
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)\\ q=S_1(e_1,qq)}}^{n_{el}^1} \partial_{\sigma_q^1} \mathcal{S}_{e_1,ii}^1.
\end{aligned}`,
    description: "",
    references: ["12.14"],
    transform: "From (12.14)",
    hidden: false,
  },
  {
    id: '12.32',
    section: 'derivatives_of_s_i_1_with_respect_to_sig',
    label: "\u2202S^{1}/\u2202\u03c3^1",
    latex: String.raw`\begin{aligned}
\partial_{\sigma_q^1} \mathcal{S}_{e_1,ii}^1 &= \sum_{jj=1}^{n_v^{1,e_1}} \partial_{\sigma_q^1} u_{l_1(e_1,jj)}^{s1} c_{ii,jj,t_r}(e_1) + \sum_{jj=1}^{n_v^{1,e_1}} \partial_{\sigma_q^1} w_{l_1(e_1,jj)}^{s1} c_{ii,jj,t_z}(e_1)
&\quad - \sum_{jj=1}^{n_v^{1,e_1}} \partial_{\sigma_q^1} u_{l_1(e_1,jj)} c_{ii,jj,t_r}(e_1) - \sum_{jj=1}^{n_v^{1,e_1}} \partial_{\sigma_q^1} w_{l_1(e_1,jj)} c_{ii,jj,t_z}(e_1)
&\quad + \frac{1 + 4 E_g B_g}{4 B_g} \sum_{jj=1}^{n_v^{1,e_1}} c_{jj,ii}^s(e_1) \partial_{\sigma_q^1} \sigma_{l_1(e_1,jj)}^1,
\end{aligned}`,
    description: "",
    references: ["12.14", "12.16"],
    transform: "From (12.14), (12.16)",
    hidden: false,
  },
  {
    id: '12.33',
    section: 'derivatives_of_s_i_1_with_respect_to_sig',
    label: "\u2202S^{1}/\u2202\u03c3^1",
    latex: String.raw`\partial_{\sigma_q^1} \mathcal{S}_{e_1,ii}^1 = \frac{1 + 4 E_g B_g}{4 B_g} c_{jj,ii}^s(e_1) \big|_{q=l_1(e_1,jj)}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '12.34',
    section: 'derivatives_of_s_i_1_with_respect_to_h_q',
    label: "\u2202S^{1}/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q} \mathcal{S}_i^1 &= \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_c,z_c) \partial_{h_q} \sigma^1(r_c,z_c) - \frac{1 + 4 E_g B_g}{4 B_g} \phi_i^1(r_a,z_a) \partial_{h_q} \sigma^1(r_a,z_a)
&\quad + \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)\\ q=S_1(e_1,qq)}}^{n_{el}^1} \partial_{h_{S_1(e_1,qq)}} \mathcal{S}_{e_1,ii}^1.
\end{aligned}`,
    description: "",
    references: ["12.14"],
    transform: "From (12.14)",
    hidden: false,
  },
  {
    id: '12.35',
    section: 'derivatives_of_s_i_1_with_respect_to_h_q',
    label: "dS_{e,ii}^1/dh Expanded",
    latex: String.raw`\begin{aligned}
\partial_{h_{S_1(e_1,qq)}} \mathcal{S}_{e_1,ii}^1 &= \sum_{jj=1}^{n_v^{1,e_1}} u_{l_1(e_1,jj)}^{s1} \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,t_r}(e_1)
&\quad + \sum_{jj=1}^{n_v^{1,e_1}} w_{l_1(e_1,jj)}^{s1} \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,t_z}(e_1)
&\quad - \sum_{jj=1}^{n_v^{1,e_1}} u_{l_1(e_1,jj)} \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,t_r}(e_1)
&\quad - \sum_{jj=1}^{n_v^{1,e_1}} w_{l_1(e_1,jj)} \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,t_z}(e_1)
&\quad + \frac{1 + 4 E_g B_g}{4 B_g} \sum_{jj=1}^{n_v^{1,e_1}} \sigma_{l_1(e_1,jj)}^1 \partial_{h_{S_1(e_1,qq)}} c_{jj,ii}^s(e_1),
\end{aligned}`,
    description: "",
    references: ["12.14", "12.16"],
    transform: "From (12.14), (12.16)",
    hidden: false,
  },
  {
    id: '12.36',
    section: 'derivatives_of_s_i_1_with_respect_to_h_q',
    label: "dS_{e,ii}^1/dh Compact",
    latex: String.raw`\begin{aligned}
\partial_{h_{S_1(e_1,qq)}} \mathcal{S}_{e_1,ii}^1 &= \sum_{jj=1}^{n_v^{1,e_1}} \Bigg[ \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,t_r}(e_1) \left( u_{l_1(e_1,jj)}^{s1} - u_{l_1(e_1,jj)} \right)
&\quad + \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,t_z}(e_1) \left( w_{l_1(e_1,jj)}^{s1} - w_{l_1(e_1,jj)} \right)
&\quad + \frac{1 + 4 E_g B_g}{4 B_g} \sigma_{l_1(e_1,jj)}^1 \partial_{h_{S_1(e_1,qq)}} c_{jj,ii}^s(e_1) \Bigg].
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '13.1',
    section: 'kinematic_boundary_condition_kbc',
    label: "KBC Equation Recalled",
    latex: String.raw`(\mathbf{v}^{s1} - \mathbf{c}) \cdot \mathbf{n}^1 = 0`,
    description: "",
    references: ["2.44"],
    transform: "From (2.44)",
    hidden: false,
  },
  {
    id: '13.2',
    section: 'kinematic_boundary_condition_kbc',
    label: "KBC Residual K_i",
    latex: String.raw`u^{s1} n_r^1 - u^c n_r^1 + w^{s1} n_z^1 - w^c n_z^1 = 0`,
    description: "",
    references: ["2.44"],
    transform: "From (2.44)",
    hidden: false,
  },
  {
    id: '13.3',
    section: 'kinematic_boundary_condition_kbc',
    label: "K_i with FE Approximation",
    latex: String.raw`\mathcal{K}_i = \int_{\partial \Omega^{1,f}} \phi_i^1 u^{s1} n_r^1 - \int_{\partial \Omega^{1,f}} \phi_i^1 u^c n_r^1 + \int_{\partial \Omega^{1,f}} \phi_i^1 w^{s1} n_z^1 - \int_{\partial \Omega^{1,f}} \phi_i^1 w^c n_z^1`,
    description: "",
    references: ["2.44"],
    transform: "From (2.44)",
    hidden: false,
  },
  {
    id: '13.4',
    section: 'kinematic_boundary_condition_kbc',
    label: "K_i Rearranged",
    latex: String.raw`\begin{aligned}
\mathcal{K}_i &= \int_{\partial \Omega^{1}} \phi_i^1 u^{s1} n_r^1 - \int_{\partial \Omega^{1}} \phi_i^1 \frac{3 r^c(t_n) - 4 r^c(t_{n-1}) + r^c(t_{n-2})}{2 \dt} n_r^1
&\quad + \int_{\partial \Omega^{1}} \phi_i^1 w^{s1} n_z^1 - \int_{\partial \Omega^{1}} \phi_i^1 \frac{3 z^c(t_n) - 4 z^c(t_{n-1}) + z^c(t_{n-2})}{2 \dt} n_z^1,
\end{aligned}`,
    description: "And define where is an index that runs on the boundary 1 numbering of the free surface nodes",
    references: ["4.54", "4.55"],
    transform: "From (4.54), (4.55)",
    hidden: false,
  },
  {
    id: '13.5',
    section: 'kinematic_boundary_condition_kbc',
    label: "K_i Gathered Sums",
    latex: String.raw`\begin{aligned}
\mathcal{K}_i &= \frac{2\dt}{3} \int_{\partial \Omega^{1}} \phi_i^1 u^{s1} n_r^1 - \int_{\partial \Omega^{1}} \phi_i^1 r^c n_r^1 + \frac{4}{3} \int_{\partial \Omega^{1}} \phi_i^1 r^c(t_{n-1}) n_r^1 - \frac{1}{3} \int_{\partial \Omega^{1}} \phi_i^1 r^c(t_{n-2}) n_r^1
&\quad + \frac{2\dt}{3} \int_{\partial \Omega^{1}} \phi_i^1 w^{s1} n_z^1 - \int_{\partial \Omega^{1}} \phi_i^1 z^c n_z^1 + \frac{4}{3} \int_{\partial \Omega^{1}} \phi_i^1 z^c(t_{n-1}) n_z^1 - \frac{1}{3} \int_{\partial \Omega^{1}} \phi_i^1 z^c(t_{n-2}) n_z^1,
\end{aligned}`,
    description: "We substitute approximations (4.54) and (4.55) and obtain multiplying by we have",
    references: ["4.54", "4.55"],
    transform: "From (4.54), (4.55)",
    hidden: false,
  },
  {
    id: '13.6',
    section: 'kinematic_boundary_condition_kbc',
    label: "K_i Element-wise",
    latex: String.raw`\begin{aligned}
\mathcal{K}_i &= \frac{2\dt}{3} \int_{\partial \Omega^{1}} \phi_i^1 \left( \sum_{j=1}^{n_v} u_j^{s1} \phi_j^1 \right) n_r^1 - \int_{\partial \Omega^{1}} \phi_i^1 \left( \sum_{j=1}^{n_v} r_j^c \phi_j^1 \right) n_r^1
&\quad + \frac{4}{3} \int_{\partial \Omega^{1}} \phi_i^1 \left( \sum_{j=1}^{n_v} r_j^c(t_{n-1}) \phi_j^1 \right) n_r^1 - \frac{1}{3} \int_{\partial \Omega^{1}} \phi_i^1 \left( \sum_{j=1}^{n_v} r_j^c(t_{n-2}) \phi_j^1 \right) n_r^1
&\quad + \frac{2\dt}{3} \int_{\partial \Omega^{1}} \phi_i^1 \left( \sum_{j=1}^{n_v} w_j^{s1} \phi_j^1 \right) n_z^1 - \int_{\partial \Omega^{1}} \phi_i^1 \left( \sum_{j=1}^{n_v} z_j^c \phi_j^1 \right) n_z^1
&\quad + \frac{4}{3} \int_{\partial \Omega^{1}} \phi_i^1 \left( \sum_{j=1}^{n_v} z_j^c(t_{n-1}) \phi_j^1 \right) n_z^1 - \frac{1}{3} \int_{\partial \Omega^{1}} \phi_i^1 \left( \sum_{j=1}^{n_v} z_j^c(t_{n-2}) \phi_j^1 \right) n_z^1.
\end{aligned}`,
    description: "We substitute approximations (4.66)-(4.69) into the equation above and obtain",
    references: ["4.66", "4.69"],
    transform: "From (4.66), (4.69)",
    hidden: false,
  },
  {
    id: '13.7',
    section: 'kinematic_boundary_condition_kbc',
    label: "K_i = Sum of K_{e,ii}",
    latex: String.raw`\begin{aligned}
\mathcal{K}_i &= \frac{2\dt}{3} \sum_{j=1}^{n_v} u_j^{s1} \int_{\partial \Omega^{1}} \phi_i^1 \phi_j^1 n_r^1 - \sum_{j=1}^{n_v} r_j^c \int_{\partial \Omega^{1}} \phi_i^1 \phi_j^1 n_r^1
&\quad + \frac{4}{3} \sum_{j=1}^{n_v} r_j^c(t_{n-1}) \int_{\partial \Omega^{1}} \phi_i^1 \phi_j^1 n_r^1 - \frac{1}{3} \sum_{j=1}^{n_v} r_j^c(t_{n-2}) \int_{\partial \Omega^{1}} \phi_i^1 \phi_j^1 n_r^1
&\quad + \frac{2\dt}{3} \sum_{j=1}^{n_v} w_j^{s1} \int_{\partial \Omega^{1}} \phi_i^1 \phi_j^1 n_z^1 - \sum_{j=1}^{n_v} z_j^c \int_{\partial \Omega^{1}} \phi_i^1 \phi_j^1 n_z^1
&\quad + \frac{4}{3} \sum_{j=1}^{n_v} z_j^c(t_{n-1}) \int_{\partial \Omega^{1}} \phi_i^1 \phi_j^1 n_z^1 - \frac{1}{3} \sum_{j=1}^{n_v} z_j^c(t_{n-2}) \int_{\partial \Omega^{1}} \phi_i^1 \phi_j^1 n_z^1.
\end{aligned}`,
    description: "Moving the integrals into the sums we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '13.8',
    section: 'kinematic_boundary_condition_kbc',
    label: "K_{e,ii} Definition",
    latex: String.raw`\begin{aligned}
\mathcal{K}_i &= \sum_{e_1=1}^{n_{el}^1} \Bigg[ \frac{2\dt}{3} \sum_{j=1}^{n_v} u_j^{s1} \int_{\partial \Omega_{e_1}^1} \phi_i^1 \phi_j^1 n_r^1 - \sum_{j=1}^{n_v} r_j^c \int_{\partial \Omega_{e_1}^1} \phi_i^1 \phi_j^1 n_r^1
&\quad + \frac{4}{3} \sum_{j=1}^{n_v} r_j^c(t_{n-1}) \int_{\partial \Omega_{e_1}^1} \phi_i^1 \phi_j^1 n_r^1 - \frac{1}{3} \sum_{j=1}^{n_v} r_j^c(t_{n-2}) \int_{\partial \Omega_{e_1}^1} \phi_i^1 \phi_j^1 n_r^1
&\quad + \frac{2\dt}{3} \sum_{j=1}^{n_v} w_j^{s1} \int_{\partial \Omega_{e_1}^1} \phi_i^1 \phi_j^1 n_z^1 - \sum_{j=1}^{n_v} z_j^c \int_{\partial \Omega_{e_1}^1} \phi_i^1 \phi_j^1 n_z^1
&\quad + \frac{4}{3} \sum_{j=1}^{n_v} z_j^c(t_{n-1}) \int_{\partial \Omega_{e_1}^1} \phi_i^1 \phi_j^1 n_z^1 - \frac{1}{3} \sum_{j=1}^{n_v} z_j^c(t_{n-2}) \int_{\partial \Omega_{e_1}^1} \phi_i^1 \phi_j^1 n_z^1 \Bigg].
\end{aligned}`,
    description: "Now, we decompose the integrals into the sum of the integrals over each line-element on boundary 1",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '13.11',
    section: 'kinematic_boundary_condition_kbc',
    label: "dK_i/du Global",
    latex: String.raw`\begin{aligned}
\mathcal{K}_i &= \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{n_{el}^1} \Bigg[ \frac{2\dt}{3} \sum_{jj=1}^{n_v^{1,e_1}} u_{l_1(e_1,jj)}^{s1} \int_{\partial \Omega_{e_1}^1} \phi_{l_1(e_1,ii)}^1 \phi_{l_1(e_1,jj)}^1 n_r^1
&\quad - \sum_{jj=1}^{n_v^{1,e_1}} r_{l_1(e_1,jj)}^c \int_{\partial \Omega_{e_1}^1} \phi_{l_1(e_1,ii)}^1 \phi_{l_1(e_1,jj)}^1 n_r^1
&\quad + \frac{4}{3} \sum_{jj=1}^{n_v^{1,e_1}} r_{l_1(e_1,jj)}^c(t_{n-1}) \int_{\partial \Omega_{e_1}^1} \phi_{l_1(e_1,ii)}^1 \phi_{l_1(e_1,jj)}^1 n_r^1
&\quad - \frac{1}{3} \sum_{jj=1}^{n_v^{1,e_1}} r_{l_1(e_1,jj)}^c(t_{n-2}) \int_{\partial \Omega_{e_1}^1} \phi_{l_1(e_1,ii)}^1 \phi_{l_1(e_1,jj)}^1 n_r^1
&\quad + \frac{2\dt}{3} \sum_{jj=1}^{n_v^{1,e_1}} w_{l_1(e_1,jj)}^{s1} \int_{\partial \Omega_{e_1}^1} \phi_{l_1(e_1,ii)}^1 \phi_{l_1(e_1,jj)}^1 n_z^1
&\quad - \sum_{jj=1}^{n_v^{1,e_1}} z_{l_1(e_1,jj)}^c \int_{\partial \Omega_{e_1}^1} \phi_{l_1(e_1,ii)}^1 \phi_{l_1(e_1,jj)}^1 n_z^1
&\quad + \frac{4}{3} \sum_{jj=1}^{n_v^{1,e_1}} z_{l_1(e_1,jj)}^c(t_{n-1}) \int_{\partial \Omega_{e_1}^1} \phi_{l_1(e_1,ii)}^1 \phi_{l_1(e_1,jj)}^1 n_z^1
&\quad - \frac{1}{3} \sum_{jj=1}^{n_v^{1,e_1}} z_{l_1(e_1,jj)}^c(t_{n-2}) \int_{\partial \Omega_{e_1}^1} \phi_{l_1(e_1,ii)}^1 \phi_{l_1(e_1,jj)}^1 n_z^1 \Bigg].
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '13.12',
    section: 'kinematic_boundary_condition_kbc',
    label: "dK_{e,ii}/du Compact",
    latex: String.raw`\mathcal{K}_i = \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{n_{el}^1} \mathcal{K}_{e_1,ii}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '13.13',
    section: 'kinematic_boundary_condition_kbc',
    label: "dK_i/dw Global",
    latex: String.raw`\begin{aligned}
\mathcal{K}_{e_1,ii} &= \sum_{jj=1}^{n_v^{1,e_1}} \Bigg[ c_{ii,jj,n_r}(e_1) \left( \frac{2\dt}{3} u_{l_1(e_1,jj)}^{s1} - r_{l_1(e_1,jj)}^c + \frac{4}{3} r_{l_1(e_1,jj)}^c(t_{n-1}) - \frac{1}{3} r_{l_1(e_1,jj)}^c(t_{n-2}) \right)
&\quad + c_{ii,jj,n_z}(e_1) \left( \frac{2\dt}{3} w_{l_1(e_1,jj)}^{s1} - z_{l_1(e_1,jj)}^c + \frac{4}{3} z_{l_1(e_1,jj)}^c(t_{n-1}) - \frac{1}{3} z_{l_1(e_1,jj)}^c(t_{n-2}) \right) \Bigg].
\end{aligned}`,
    description: "Re-arranging we have where",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '13.14',
    section: 'derivatives_of_k_i_with_respect_to_u_q_s',
    label: "dK_{e,ii}/dw Compact",
    latex: String.raw`\begin{aligned}
\partial_{u_q^{s1}} \mathcal{K}_i &= \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{n_{el}^1} \sum_{jj=1}^{n_v^{1,e_1}} \partial_{u_q^{s1}} \Bigg[ \frac{2\dt}{3} \left( u_{l_1(e_1,jj)}^{s1} c_{ii,jj,n_r}(e_1) + w_{l_1(e_1,jj)}^{s1} c_{ii,jj,n_z}(e_1) \right)
&\quad - \left( r_{l_1(e_1,jj)}^c c_{ii,jj,n_r}(e_1) + z_{l_1(e_1,jj)}^c c_{ii,jj,n_z}(e_1) \right)
&\quad + \frac{4}{3} \left( r_{l_1(e_1,jj)}^c(t_{n-1}) c_{ii,jj,n_r}(e_1) + z_{l_1(e_1,jj)}^c(t_{n-1}) c_{ii,jj,n_z}(e_1) \right)
&\quad - \frac{1}{3} \left( r_{l_1(e_1,jj)}^c(t_{n-2}) c_{ii,jj,n_r}(e_1) + z_{l_1(e_1,jj)}^c(t_{n-2}) c_{ii,jj,n_z}(e_1) \right) \Bigg],
\end{aligned}`,
    description: "",
    references: ["13.11"],
    transform: "From (13.11)",
    hidden: false,
  },
  {
    id: '13.15',
    section: 'derivatives_of_k_i_with_respect_to_u_q_s',
    label: "dK_i/dh Global",
    latex: String.raw`\begin{aligned}
\partial_{u_q^{s1}} \mathcal{K}_i &= \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{n_{el}^1} \frac{2\dt}{3} \sum_{jj=1}^{n_v^{1,e_1}} c_{ii,jj,n_r}(e_1) \partial_{u_q^{s1}} u_{l_1(e_1,jj)}^{s1},
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '13.16',
    section: 'derivatives_of_k_i_with_respect_to_u_q_s',
    label: "dK_{e,ii}/dh Step 1",
    latex: String.raw`\partial_{u_q^{s1}} \mathcal{K}_i = \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)\\ q=l_1(e_1,jj)}}^{n_{el}^1} \frac{2\dt}{3} c_{ii,jj,n_r}(e_1)`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '13.17',
    section: 'derivatives_of_k_i_with_respect_to_w_q_s',
    label: "dK_{e,ii}/dh Expanded",
    latex: String.raw`\begin{aligned}
\partial_{w_q^{s1}} \mathcal{K}_i &= \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{n_{el}^1} \sum_{jj=1}^{n_v^{1,e_1}} \partial_{w_q^{s1}} \Bigg[ \frac{2\dt}{3} \left( u_{l_1(e_1,jj)}^{s1} c_{ii,jj,n_r}(e_1) + w_{l_1(e_1,jj)}^{s1} c_{ii,jj,n_z}(e_1) \right)
&\quad - \left( r_{l_1(e_1,jj)}^c c_{ii,jj,n_r}(e_1) + z_{l_1(e_1,jj)}^c c_{ii,jj,n_z}(e_1) \right)
&\quad + \frac{4}{3} \left( r_{l_1(e_1,jj)}^c(t_{n-1}) c_{ii,jj,n_r}(e_1) + z_{l_1(e_1,jj)}^c(t_{n-1}) c_{ii,jj,n_z}(e_1) \right)
&\quad - \frac{1}{3} \left( r_{l_1(e_1,jj)}^c(t_{n-2}) c_{ii,jj,n_r}(e_1) + z_{l_1(e_1,jj)}^c(t_{n-2}) c_{ii,jj,n_z}(e_1) \right) \Bigg],
\end{aligned}`,
    description: "",
    references: ["13.13"],
    transform: "From (13.13)",
    hidden: false,
  },
  {
    id: '13.18',
    section: 'derivatives_of_k_i_with_respect_to_w_q_s',
    label: "dK_{e,ii}/dh Compact",
    latex: String.raw`\begin{aligned}
\partial_{w_q^{s1}} \mathcal{K}_i &= \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{n_{el}^1} \frac{2\dt}{3} \sum_{jj=1}^{n_v^{1,e_1}} c_{ii,jj,n_z}(e_1) \partial_{w_q^{s1}} w_{l_1(e_1,jj)}^{s1},
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '13.19',
    section: 'derivatives_of_k_i_with_respect_to_w_q_s',
    label: "K_{e,ii} Reordered",
    latex: String.raw`\partial_{w_q^{s1}} \mathcal{K}_i = \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)\\ q=l_1(e_1,jj)}}^{n_{el}^1} \frac{2\dt}{3} c_{ii,jj,n_z}(e_1)`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '13.20',
    section: 'derivatives_of_k_i_with_respect_to_h_q',
    label: "\u2202K/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q} \mathcal{K}_i &= \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{n_{el}^1} \sum_{jj=1}^{n_v^{1,e_1}} \partial_{h_q} \Bigg[ \frac{2\dt}{3} \left( u_{l_1(e_1,jj)}^{s1} c_{ii,jj,n_r}(e_1) + w_{l_1(e_1,jj)}^{s1} c_{ii,jj,n_z}(e_1) \right)
&\quad - \left( r_{l_1(e_1,jj)}^c c_{ii,jj,n_r}(e_1) + z_{l_1(e_1,jj)}^c c_{ii,jj,n_z}(e_1) \right)
&\quad + \frac{4}{3} \left( r_{l_1(e_1,jj)}^c(t_{n-1}) c_{ii,jj,n_r}(e_1) + z_{l_1(e_1,jj)}^c(t_{n-1}) c_{ii,jj,n_z}(e_1) \right)
&\quad - \frac{1}{3} \left( r_{l_1(e_1,jj)}^c(t_{n-2}) c_{ii,jj,n_r}(e_1) + z_{l_1(e_1,jj)}^c(t_{n-2}) c_{ii,jj,n_z}(e_1) \right) \Bigg],
\end{aligned}`,
    description: "",
    references: ["13.13"],
    transform: "From (13.13)",
    hidden: false,
  },
  {
    id: '13.21',
    section: 'derivatives_of_k_i_with_respect_to_h_q',
    label: "\u2202K/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q} \mathcal{K}_i &= \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)}}^{n_{el}^1} \sum_{jj=1}^{n_v^{1,e_1}} \Bigg[ \frac{2\dt}{3} \left( u_{l_1(e_1,jj)}^{s1} \partial_{h_q} c_{ii,jj,n_r}(e_1) + w_{l_1(e_1,jj)}^{s1} \partial_{h_q} c_{ii,jj,n_z}(e_1) \right)
&\quad - \left( r_{l_1(e_1,jj)}^c \partial_{h_q} c_{ii,jj,n_r}(e_1) + z_{l_1(e_1,jj)}^c \partial_{h_q} c_{ii,jj,n_z}(e_1) \right)
&\quad + \frac{4}{3} \left( r_{l_1(e_1,jj)}^c(t_{n-1}) \partial_{h_q} c_{ii,jj,n_r}(e_1) + z_{l_1(e_1,jj)}^c(t_{n-1}) \partial_{h_q} c_{ii,jj,n_z}(e_1) \right)
&\quad - \frac{1}{3} \left( r_{l_1(e_1,jj)}^c(t_{n-2}) \partial_{h_q} c_{ii,jj,n_r}(e_1) + z_{l_1(e_1,jj)}^c(t_{n-2}) \partial_{h_q} c_{ii,jj,n_z}(e_1) \right)
&\quad - c_{ii,jj,n_r}(e_1) \partial_{h_q} r_{l_1(e_1,jj)}^c - c_{ii,jj,n_z}(e_1) \partial_{h_q} z_{l_1(e_1,jj)}^c \Bigg],
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '13.22',
    section: 'derivatives_of_k_i_with_respect_to_h_q',
    label: "\u2202K/\u2202h",
    latex: String.raw`\begin{aligned}
\partial_{h_q} \mathcal{K}_i &= \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)\\ q=S_1(e_1,qq)}}^{n_{el}^1} \sum_{jj=1}^{n_v^{1,e_1}} \Bigg[ \frac{2\dt}{3} \left( u_{l_1(e_1,jj)}^{s1} \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,n_r}(e_1) + w_{l_1(e_1,jj)}^{s1} \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,n_z}(e_1) \right)
&\quad - \left( r_{l_1(e_1,jj)}^c \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,n_r}(e_1) + z_{l_1(e_1,jj)}^c \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,n_z}(e_1) \right)
&\quad + \frac{4}{3} \left( r_{l_1(e_1,jj)}^c(t_{n-1}) \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,n_r}(e_1) + z_{l_1(e_1,jj)}^c(t_{n-1}) \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,n_z}(e_1) \right)
&\quad - \frac{1}{3} \left( r_{l_1(e_1,jj)}^c(t_{n-2}) \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,n_r}(e_1) + z_{l_1(e_1,jj)}^c(t_{n-2}) \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,n_z}(e_1) \right)
&\quad - c_{ii,jj,n_r}(e_1) \partial_{h_{S_1(e_1,qq)}} r_{l_1(e_1,jj)}^c - c_{ii,jj,n_z}(e_1) \partial_{h_{S_1(e_1,qq)}} z_{l_1(e_1,jj)}^c \Bigg],
\end{aligned}`,
    description: "And using local spine numbers we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '13.23',
    section: 'derivatives_of_k_i_with_respect_to_h_q',
    label: "\u2202K/\u2202h",
    latex: String.raw`\partial_{h_q} \mathcal{K}_i = \sum_{\substack{e_1=1\\ i=l_1(e_1,ii)\\ q=S_1(e_1,qq)}}^{n_{el}^1} \partial_{h_{S_1(e_1,qq)}} \mathcal{K}_{e_1,ii}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '13.24',
    section: 'derivatives_of_k_i_with_respect_to_h_q',
    label: "dK/dh Compact",
    latex: String.raw`\begin{aligned}
\partial_{h_{S_1(e_1,qq)}} \mathcal{K}_{e_1,ii} &= \sum_{jj=1}^{n_v^{1,e_1}} \Bigg[ \frac{2\dt}{3} w_{l_1(e_1,jj)}^{s1} \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,n_r}(e_1)
&\quad - c_{ii,jj,n_r}(e_1) \partial_{h_{S_1(e_1,qq)}} r_{l_1(e_1,jj)}^c
&\quad - \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,n_r}(e_1) \left( r_{l_1(e_1,jj)}^c - \frac{4}{3} r_{l_1(e_1,jj)}^c(t_{n-1}) + \frac{1}{3} r_{l_1(e_1,jj)}^c(t_{n-2}) \right)
&\quad + \frac{2\dt}{3} w_{l_1(e_1,jj)}^{s1} \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,n_z}(e_1)
&\quad - c_{ii,jj,n_z}(e_1) \partial_{h_{S_1(e_1,qq)}} z_{l_1(e_1,jj)}^c
&\quad - z_{l_1(e_1,jj)}^c \partial_{h_{S_1(e_1,qq)}} c_{ii,jj,n_z}(e_1) \left( z_{l_1(e_1,jj)}^c - \frac{4}{3} z_{l_1(e_1,jj)}^c(t_{n-1}) + \frac{1}{3} z_{l_1(e_1,jj)}^c(t_{n-2}) \right) \Bigg].
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '17.1',
    section: 'r_momentum_residuals',
    label: "M_i^r Summary",
    latex: String.raw`\begin{array}{r l}
\hat{M}_{i}^{r} = \sum_{e = 1}^{n_{e1}}\hat{M}_{e,ii}^{r} + \sum_{e = 1}^{n_{e1}^{1}}\hat{M}_{e_{1},ii}^{r,1} + \sum_{i = l_{2}(e_{2},ii)}^{n_{e2}^{2}}\hat{M}_{e_{2},ii}^{r,2} \\
\qquad +\sum_{e = 1}^{n_{e3}^{3}}\hat{M}_{e_{3},ii}^{r,3} + \frac{\sigma_{1}^{4}\phi_{i}(r_{d},z_{d}) - \sigma_{e}^{1}\phi_{i}(r_{c},0)\cos(\theta)}{C a},
\end{array}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '17.2',
    section: 'r_momentum_residuals',
    label: "M_{e,ii}^r Bulk",
    latex: String.raw`\begin{aligned}
\hat{M}_{e,ii}^{r} &= \sum_{j = 1}^{n_{v}}\left(u_{l(e,jj)}\left\{Re\sum_{k = 1}^{n_{v}}\left[u_{l(e,kk)}a_{ii,kk,jj}^{r}(e) + w_{l(e,kk)}a_{ii,kk,jj}^{2}(e)\right]\right.\right.
&\qquad \left.\left. + 2a_{ii,jj}^{r,r}(e) + a_{ii,jj}^{z,z}(e)\right\} +w_{l(e,jj)}a_{ii,jj}^{z,z}(e)\right)
&\qquad -\sum_{j = 1}^{n_{v}^{e}}p_{l\nu (e,jj)}b_{jj,ii}^{r}(e),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '17.3',
    section: 'r_momentum_residuals',
    label: "M_{e,ii}^{r,1} Free Surface",
    latex: String.raw`\begin{aligned}
\hat{M}_{e_{1},ii}^{r,1} &= \frac{1}{C a}\sum_{j = 1}^{n_{v}}\sigma_{l_{1}(e_{1},jj)}^{1}c_{ir,jj,ii}^{z}(e_{1}),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '17.4',
    section: 'r_momentum_residuals',
    label: "M_{e,ii}^{r,2} Solid Surface",
    latex: String.raw`\begin{aligned}
\hat{M}_{e_{2},ii}^{r,2} &= Be\left\{\sum_{j = 1}^{n_{v}}\left[u_{l_{2}(e_{2},jj)}d_{t_{r},t_{r},ii,jj}(e_{2}) + w_{l_{2}(e_{2},jj)}d_{t_{r},t_{2},ii,jj}(e_{2})\right] + d_{t_{r},t_{r},ii}(e_{2})\right\},
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '17.5',
    section: 'r_momentum_residuals',
    label: "M_{e,ii}^{r,3} Symmetry Axis",
    latex: String.raw`\begin{aligned}
\hat{M}_{e_{3},ii}^{r,3} &= \sum_{j = 1}^{n_{v}^{e3}}\left[\lambda_{l_{3}^{3}(e_{3},jj)}^{3}f_{ii,jj,n_{r}}(e_{3}) + \gamma_{l_{3}^{3}(e_{3},jj)}^{3}f_{t_{r},ii,jj}(e_{3})\right].
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '17.6',
    section: 'z_momentum_residuals',
    label: "M_i^z Summary",
    latex: String.raw`\hat{M}_i^z = \sum_{e = 1}^{n_{el}}\hat{M}_{e,ii}^z +\sum_{e = 1}^{n_{el}^1}\hat{M}_{e,ii}^z +\sum_{e = 1}^{n_{el}^{2}}\hat{M}_{e,ii}^{z,2}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '17.7',
    section: 'z_momentum_residuals',
    label: "M_{e,ii}^z Bulk",
    latex: String.raw`\begin{aligned}
\hat{M}_{e,ii}^{z} &= \sum_{j = 1}^{n_{e}^{c}}\left\{w_{l(e,jj)}\left\{Re\sum_{kk = 1}^{n_{e}^{c}}\left[w_{l(e,kk)}a_{ii,kk,jj}^{r}(e) + w_{l(e,kk)}a_{ii,kk,jj}^{z}(e)\right] + 2a_{ii,ij}^{z,z}(e)\right\} \right\}
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '17.8',
    section: 'z_momentum_residuals',
    label: "M_{e,ii}^{z,1} Free Surface",
    latex: String.raw`\begin{aligned}
\hat{M}_{e,ii}^{z,1} &= \frac{1}{Ca}\sum_{j = 1}^{n_{e}^{c1}}\sigma_{l_{1}(e_{1},jj)}^{1}c_{t_{2},jj,ii}^{z}(e_{1}),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '17.9',
    section: 'z_momentum_residuals',
    label: "M_{e,ii}^{z,2} Solid Surface",
    latex: String.raw`\begin{aligned}
\hat{M}_{e,ii}^{z,2} &= Be\left\{\sum_{j = 1}^{n_{e}^{2},e_{2}}\left[w_{l_{2}(e_{2},jj)}d_{t_{r},t_{r},ii,jj}(e_{2}) + w_{l_{2}(e_{2},jj)}d_{t_{r},t_{2},ii,jj}(e_{2})\right]\right\}
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '17.10',
    section: 'z_momentum_residuals',
    label: "M_{e,ii}^{z,3} Symmetry Axis",
    latex: String.raw`\begin{aligned}
\hat{M}_{e,ii}^{z,3} &= \sum_{j = 1}^{n_{e}^{3}}\gamma_{l_{3}(e_{3},jj)}^{3}f_{t_{r},ii,jj}(e).
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '17.11',
    section: 'continuity_residuals',
    label: "C_i Summary",
    latex: String.raw`\hat{C}_i = \sum_{e = 1}^{n_{e1}}\sum_{i = 1}^{n_e^e}\left[u_{l(e,ii)}b_{jj,ii}^e (e) + w_{l(e,ii)}b_{jj,ii}^e (e_3)\right]`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '17.12',
    section: 'kinematic_boundary_condition_residuals',
    label: "K_i Summary",
    latex: String.raw`\hat{K}_i = \sum_{e_1 = 1}^{n_{e1}^1}\sum_{j,j = 1}^{n_{e1}^e}\left[u_{l_1(e_1,jj)}c_{ii,jj,n_e}(e_1) + w_{l_1(e_1,jj)}c_{ii,jj,n_e}(e_{1})\right]`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '17.13',
    section: 'impermeability_residuals',
    label: "I_i Summary",
    latex: String.raw`\hat{I}_i = \sum_{e_2 = 1}^{n_{e1}^2}\sum_{j,j = 1}^{n_{e2}^e}\left[u_{l_2(e_2,jj)}d_{ii,jj,n_e}(e_2) + w_{l_2(e,jj)}d_{ii,jj,n_e}(e_2)\right]`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '18.1',
    section: 'system_jacobian',
    label: "System Jacobian Matrix",
    latex: String.raw`JR =
\begin{bmatrix}
\partial_u \hat{M}^r & \partial_w \hat{M}^r & \partial_p \hat{M}^r & \partial_{\omega^2} \hat{M}^r & \partial_{\omega^3} \hat{M}^r & \partial_{\epsilon^3} \hat{M}^r & \partial_h \hat{M}^r \\
\partial_u \hat{M}^z & \partial_w \hat{M}^z & \partial_p \hat{M}^z & \partial_{\omega^2} \hat{M}^z & \partial_{\omega^3} \hat{M}^z & \partial_{\epsilon^3} \hat{M}^z & \partial_h \hat{M}^z \\
\partial_u \hat{C}   & \partial_w \hat{C}   & \partial_p \hat{C}   & \partial_{\omega^2} \hat{C}   & \partial_{\omega^3} \hat{C}   & \partial_{\epsilon^3} \hat{C}   & \partial_h \hat{C}   \\
\partial_u \hat{K}   & \partial_w \hat{K}   & \partial_p \hat{K}   & \partial_{\omega^2} \hat{K}   & \partial_{\omega^3} \hat{K}   & \partial_{\epsilon^3} \hat{K}   & \partial_h \hat{K}   \\
\partial_u \hat{I}   & \partial_w \hat{I}   & \partial_p \hat{I}   & \partial_{\omega^2} \hat{I}   & \partial_{\omega^3} \hat{I}   & \partial_{\epsilon^3} \hat{I}   & \partial_h \hat{I}
\end{bmatrix}`,
    description: "The system of equations given by the Residuals has the following Jacobian",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '18.2',
    section: 'entries_on_the_first_block_row',
    label: "J: dM^r/du",
    latex: String.raw`\begin{aligned}
\left(\partial_u \hat{M}^r\right)_{i,q} &= \sum_{e=1}^{n_{el}} \sum_{\substack{i=l(e,ii)\\ q=l(e,kk)}} \left\{ Re \sum_{jj=1}^{n_e^v} u_{l(e,jj)} a_{ii,kk,jj}^r(e) + \sum_{jj=1}^{n_e^v} \left[ Re A_{ii,jj}(u,w,e) + 2a_{ii,jj}^{r,r}(e) + a_{ii,jj}^{z,z}(e) \right] \right\}
&\quad + \sum_{e_2=1}^{n_{el}^2} \sum_{\substack{i=l_2(e_2,ii)\\ q=l_2(e_2,jj)}} Be \, d_{t_r,t_r,ii,jj}(e_2),
\end{aligned}`,
    description: "Blocks in the first row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.3',
    section: 'entries_on_the_first_block_row',
    label: "J: dM^r/dw",
    latex: String.raw`\begin{aligned}
\left(\partial_w \hat{M}^r\right)_{i,q} &= \sum_{e=1}^{n_{el}} \sum_{\substack{i=l(e,ii)\\ q=l(e,kk)}} Re u_{l(e,jj)} a_{ii,kk,jj}^z(e) + \sum_{e=1}^{n_{el}} \sum_{q=l(e,jj)} a_{ii,jj}^{z,r}(e)
&\quad + \sum_{e_2=1}^{n_{el}^2} \sum_{\substack{i=l_2(e_2,ii)\\ q=l_2(e_2,jj)}} Be \, d_{t_r,t_z,ii,jj}(e_2),
\end{aligned}`,
    description: "Blocks in the first row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.4',
    section: 'entries_on_the_first_block_row',
    label: "J: dM^r/dp",
    latex: String.raw`\begin{aligned}
\left(\partial_p \hat{M}^r\right)_{i,q} &= \sum_{e=1}^{n_{el}} \sum_{\substack{i=l(e,ii)\\ q=l_p(e,jj)}} b_{jj,ii}^r(e),
\end{aligned}`,
    description: "Blocks in the first row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.5',
    section: 'entries_on_the_first_block_row',
    label: "J: dM^r/d\u03bb^2",
    latex: String.raw`\begin{aligned}
\left(\partial_{\lambda^2} \hat{M}^r\right)_{i,q} &= \sum_{e=1}^{n_{el}^2} d_{ii,jj,n_r}(e_2),
\end{aligned}`,
    description: "Blocks in the first row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.8',
    section: 'entries_on_the_first_block_row',
    label: "J: dM^r/dh",
    latex: String.raw`\begin{aligned}
\left(\partial_h \hat{M}^r\right)_{i,q} &=
\sum_{e=1}^{n_{el}} \sum_{\substack{i=l(e,ii)\\ jj=1\\ q=S(e,qq)}}^{n_e^v} \Bigg( u_{l(e,jj)} \Bigg[ Re \sum_{kk=1}^{n_e^v} \big( u_{l(e,kk)} \partial_{h_{S(e,qq)}} a_{ii,kk,jj}^r(e) + w_{l(e,kk)} \partial_{h_{S(e,qq)}} a_{ii,kk,jj}^z(e) \big)
&\qquad + 2 \partial_{h_{S(e,qq)}} a_{ii,jj}^{r,r}(e) + \partial_{h_{S(e,qq)}} a_{ii,jj}^{z,z}(e) \Bigg] + w_{l(e,jj)} \partial_{h_{S(e,qq)}} a_{ii,jj}^{z,r}(e) \Bigg)
&\quad + \sum_{e=1}^{n_{el}} \sum_{\substack{i=l(e,ii)\\ jj=1\\ q=S(e,qq)}}^{n_e^p} p_{l_p(e,jj)} \partial_{h_{S(e,qq)}} b_{jj,ii}^r(e)
&\quad + \sum_{e_1=1}^{n_{el}^1} \sum_{\substack{i=l_1(e_1,ii)\\ jj=1\\ q=S_1(e_1,qq)}}^{n_e^v} \frac{1}{Ca} \omega_{l_1^1(e_1,jj)}^1 \partial_{h_{S_1(e_1,qq)}} c_{t_r,jj,ii}^s(e_1)
&\quad + \sum_{e_2=1}^{n_{el}^2} \sum_{\substack{i=l_2(e_2,ii)\\ q=S_2(e_2,qq)}} Be \partial_{h_{S_2(e_2,qq)}} d_{t_r,t_r,ii}(e_2)
&\quad + \sum_{e_2=1}^{n_{el}^2} \sum_{\substack{i=l_2(e_2,ii)\\ jj=1\\ q=S_2(e_2,qq)}}^{n_{e_2}^{2,v}} Be \Big( u_{l_2(e_2,jj)} \partial_{h_{S_2(e_2,qq)}} d_{t_r,t_r,ii,jj}(e_2) + w_{l_2(e_2,jj)} \partial_{h_{S_2(e_2,qq)}} d_{t_r,t_z,ii,jj}(e_2) \Big)
&\quad + \sum_{e_2=1}^{n_{el}^2} \sum_{\substack{i=l_2(e_2,ii)\\ j=1\\ q=S_2(e_2,qq)}}^{n_{e_2}^v} \varpi_{l_2^2(e_2,jj)}^2 \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,n_r}(e_2)
&\quad + \sum_{e_3=1}^{n_{el}^3} \sum_{\substack{i=l_3(e_3,ii)\\ j=1\\ q=S_3(e_3,qq)}}^{n_{e_3}^v} \Big( \varpi_{l_3^3(e_3,jj)}^3 \partial_{h_{S_3(e_3,qq)}} f_{ii,jj,n_r}(e_3) + \varrho_{l_3^3(e_3,jj)}^3 \partial_{h_{S_3(e_3,qq)}} f_{t_r,ii,jj}(e_3) \Big).
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.9',
    section: 'entries_on_the_second_block_row',
    label: "J: dM^z/du",
    latex: String.raw`\begin{aligned}
\left(\partial_u \hat{M}^z\right)_{i,q} &= \sum_{e=1}^{n_{e1}} \sum_{jj=1}^{n_e^e} Re w_{l(e,jj)} a_{ii,kk,jj}^r(e) + \sum_{e=1}^{n_{e1}} a_{ii,jj}^r(e) + \sum_{e_2=1}^{n_{e1}^2} Be d_{t_r,t_z,ii,jj},
\end{aligned}`,
    description: "Blocks in the second row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.10',
    section: 'entries_on_the_second_block_row',
    label: "J: dM^z/dw",
    latex: String.raw`\begin{aligned}
\left(\partial_w \hat{M}^z\right)_{i,q} &= \sum_{e=1}^{n_{e1}} \left\{ \sum_{jj=1}^{n_e^e} \left[ Re A_{ii,jj}(u,w,e) + 2a_{ii,jj}^{z,z}(e) + a_{ii,jj}^{r,r}(e) \right] \right.
&\qquad \left. + \sum_{jj=1}^{n_e^e} Re w_{l(e,jj)} a_{ii,kk,jj}^r(e) \right\} + \sum_{e_2=1}^{n_e^2} Be d_{t_z,t_z,ii,jj},
\end{aligned}`,
    description: "Blocks in the second row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.11',
    section: 'entries_on_the_second_block_row',
    label: "J: dM^z/dp",
    latex: String.raw`\begin{aligned}
\left(\partial_p \hat{M}^z\right)_{i,q} &= \sum_{e=1}^{n_{e1}} -b_{jj,ii}^z(e),
\end{aligned}`,
    description: "Blocks in the second row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.12',
    section: 'entries_on_the_second_block_row',
    label: "J: dM^z/d\u03bb^2",
    latex: String.raw`\begin{aligned}
\left(\partial_{\lambda^2} \hat{M}^z\right)_{i,q} &= \sum_{e=1}^{n_{e1}^2} d_{ii,jj,n_z}(e_2),
\end{aligned}`,
    description: "Blocks in the second row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.13',
    section: 'entries_on_the_second_block_row',
    label: "J: dM^z/d\u03bb^3",
    latex: String.raw`\begin{aligned}
\left(\partial_{\lambda^3} \hat{M}^z\right)_{i,q} &= \sum_{e=1}^{n_{e1}^3} f_{ii,jj,n_z}(e_3),
\end{aligned}`,
    description: "Blocks in the second row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.14',
    section: 'entries_on_the_second_block_row',
    label: "J: dM^z/d\u03b3^3",
    latex: String.raw`\begin{aligned}
\left(\partial_{\gamma^3} \hat{M}^z\right)_{i,q} &= \sum_{e=1}^{n_{e1}^3} f_{ii,jj}(e_3),
\end{aligned}`,
    description: "Blocks in the second row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.15',
    section: 'entries_on_the_second_block_row',
    label: "J: dM^z/dh",
    latex: String.raw`\begin{aligned}
\left(\partial_h \hat{M}^z\right)_{i,q} &=
\sum_{e=1}^{n_{el}} \sum_{\substack{i=l(e,ii)\\ jj=1\\ q=S(e,qq)}}^{n_e^v} \Bigg( w_{l(e,jj)} \Bigg[ Re \sum_{kk=1}^{n_e^v} \big( u_{l(e,kk)} \partial_{h_{S(e,qq)}} a_{ii,kk,jj}^r(e) + w_{l(e,kk)} \partial_{h_{S(e,qq)}} a_{ii,kk,jj}^z(e) \big)
&\qquad + 2 \partial_{h_{S(e,qq)}} a_{ii,jj}^{z,z}(e) + \partial_{h_{S(e,qq)}} a_{ii,jj}^{r,r}(e) \Bigg] + u_{l(e,jj)} \partial_{h_{S(e,qq)}} a_{ii,jj}^{r,z}(e) \Bigg)
&\quad + \sum_{e=1}^{n_{el}} \sum_{\substack{i=l(e,ii)\\ q=S(e,qq)}} St \, \partial_{h_{S(e,qq)}} a_{ii}(e)
&\quad + \sum_{e=1}^{n_{el}} \sum_{\substack{i=l(e,ii)\\ jj=1\\ q=S(e,qq)}}^{n_e^p} p_{l_p(e,jj)} \partial_{h_{S(e,qq)}} b_{jj,ii}^z(e)
&\quad + \sum_{e_1=1}^{n_{el}^1} \sum_{\substack{i=l_1(e_1,ii)\\ jj=1\\ q=S_1(e_1,qq)}}^{n_{e1}^v} \frac{1}{Ca} \omega_{l_1^1(e_1,jj)}^1 \partial_{h_{S_1(e_1,qq)}} c_{t_z,jj,ii}^s(e_1)
&\quad + \sum_{e_2=1}^{n_{el}^2} \sum_{\substack{i=l_2(e_2,ii)\\ q=S_2(e_2,qq)}} Be \partial_{h_{S_2(e_2,qq)}} d_{t_r,t_z,ii}
&\quad + \sum_{e_2=1}^{n_{el}^2} \sum_{\substack{i=l_2(e_2,ii)\\ jj=1\\ q=S_2(e_2,qq)}}^{n_{e_2}^{2,v}} Be \Big( u_{l_2(e_2,jj)} \partial_{h_{S_2(e_2,qq)}} d_{t_r,t_z,ii,jj} + w_{l_2(e_2,jj)} \partial_{h_{S_2(e_2,qq)}} d_{t_z,t_z,ii,jj} \Big)
&\quad + \sum_{e_2=1}^{n_{el}^2} \sum_{\substack{i=l_2(e_2,ii)\\ jj=1\\ q=S_2(e_2,qq)}}^{n_{e_2}^v} \varpi_{l_2^2(e_2,jj)}^2 \partial_{h_{S_2(e_2,qq)}} d_{ii,jj,n_z}(e_2)
&\quad + \sum_{e_3=1}^{n_{el}^3} \sum_{\substack{i=l_3(e_3,ii)\\ jj=1\\ q=S_3(e_3,qq)}}^{n_{e_3}^{3,v}} \Big( \varpi_{l_3^3(e_3,jj)}^3 \partial_{h_{S_3(e_3,qq)}} f_{ii,jj,n_z} + \varrho_{l_3(e_3,jj)}^3 \partial_{h_{S_3(e_3,qq)}} f_{t_z,ii,jj}(e_3) \Big).
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.16',
    section: 'entries_on_the_third_block_row',
    label: "J: dC/du",
    latex: String.raw`\begin{aligned}
\left(\partial_u \hat{C}\right)_{k,q} &= \sum_{e=1}^{n_{el}} b_{jj,ii}^p(e),
\end{aligned}`,
    description: "Blocks in the third row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.17',
    section: 'entries_on_the_third_block_row',
    label: "J: dC/dw",
    latex: String.raw`\begin{aligned}
\left(\partial_w \hat{C}\right)_{k,q} &= \sum_{e=1}^{n_{el}} b_{jj,ii}^z(e),
\end{aligned}`,
    description: "Blocks in the third row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.18',
    section: 'entries_on_the_third_block_row',
    label: "J: dC/dp = 0",
    latex: String.raw`\begin{aligned}
\left(\partial_p \hat{C}\right)_{i,q} &= 0,
\end{aligned}`,
    description: "Blocks in the third row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.19',
    section: 'entries_on_the_third_block_row',
    label: "J: dC/d\u03bb^2 = 0",
    latex: String.raw`\begin{aligned}
\left(\partial_{\lambda^2} \hat{C}\right)_{i,q} &= 0,
\end{aligned}`,
    description: "Blocks in the third row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.20',
    section: 'entries_on_the_third_block_row',
    label: "J: dC/d\u03bb^3 = 0",
    latex: String.raw`\begin{aligned}
\left(\partial_{\lambda^3} \hat{C}\right)_{i,q} &= 0,
\end{aligned}`,
    description: "Blocks in the third row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.22',
    section: 'entries_on_the_third_block_row',
    label: "J: dC/dh",
    latex: String.raw`\begin{aligned}
\left(\partial_h \hat{C}\right)_{i,q} &= \sum_{e=1}^{n_{el}} \sum_{jj=1}^{n_e^e} \left[ u_{l(e,jj)} \partial_{h_{S(e,qq)}} b_{ii,jj}^p(e) + w_{l(e,jj)} \partial_{h_{S(e,qq)}} b_{ii,jj}^z(e) \right].
\end{aligned}`,
    description: "Blocks in the third row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.23',
    section: 'entries_on_the_fourth_block_row',
    label: "J: dK/du",
    latex: String.raw`\begin{aligned}
\left(\partial_u \hat{K}\right)_{i,q} &= \sum_{e_1=1}^{n_{e1}^1} c_{ii,jj,n_r}(e_1),
\end{aligned}`,
    description: "Blocks in the fourth row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.24',
    section: 'entries_on_the_fourth_block_row',
    label: "J: dK/dw",
    latex: String.raw`\begin{aligned}
\left(\partial_w \hat{K}\right)_{i,q} &= \sum_{e_1=1}^{n_{e1}^1} c_{ii,jj,n_r}(e_1),
\end{aligned}`,
    description: "Blocks in the fourth row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.25',
    section: 'entries_on_the_fourth_block_row',
    label: "J: dK/dp = 0",
    latex: String.raw`\begin{aligned}
\left(\partial_p \hat{K}\right)_{i,q} &= 0,
\end{aligned}`,
    description: "Blocks in the fourth row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.26',
    section: 'entries_on_the_fourth_block_row',
    label: "J: dK/d\u03bb^2 = 0",
    latex: String.raw`\begin{aligned}
\left(\partial_{\lambda^2} \hat{K}\right)_{i,q} &= 0,
\end{aligned}`,
    description: "Blocks in the fourth row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.27',
    section: 'entries_on_the_fourth_block_row',
    label: "J: dK/d\u03bb^3 = 0",
    latex: String.raw`\begin{aligned}
\left(\partial_{\lambda^3} \hat{K}\right)_{i,q} &= 0,
\end{aligned}`,
    description: "Blocks in the fourth row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.30',
    section: 'entries_on_the_fifth_block_row',
    label: "J: dI/du",
    latex: String.raw`\begin{aligned}
\left(\partial_u \hat{I}\right)_{i,q} &= \sum_{\substack{i=l_2^2(e_2,ii)\\ q=l_2(e_2,jj)}} d_{ii,jj,n_r}(e_2),
\end{aligned}`,
    description: "Blocks in the fourth row are given by Blocks in the fifth row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.31',
    section: 'entries_on_the_fifth_block_row',
    label: "J: dI/dw",
    latex: String.raw`\begin{aligned}
\left(\partial_w \hat{I}\right)_{i,q} &= \sum_{\substack{i=l_2^2(e_2,ii)\\ q=l_2(e_2,jj)}} d_{ii,jj,n_r}(e_2),
\end{aligned}`,
    description: "Blocks in the fourth row are given by Blocks in the fifth row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.32',
    section: 'entries_on_the_fifth_block_row',
    label: "J: dI/dp = 0",
    latex: String.raw`\begin{aligned}
\left(\partial_p \hat{I}\right)_{i,q} &= 0,
\end{aligned}`,
    description: "Blocks in the fourth row are given by Blocks in the fifth row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.33',
    section: 'entries_on_the_fifth_block_row',
    label: "J: dI/d\u03bb^2 = 0",
    latex: String.raw`\begin{aligned}
\left(\partial_{\lambda^2} \hat{I}\right)_{i,q} &= 0,
\end{aligned}`,
    description: "Blocks in the fourth row are given by Blocks in the fifth row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.34',
    section: 'entries_on_the_fifth_block_row',
    label: "J: dI/d\u03bd^3 = 0",
    latex: String.raw`\begin{aligned}
\left(\partial_{\nu^3} \hat{I}\right)_{i,q} &= 0,
\end{aligned}`,
    description: "Blocks in the fourth row are given by Blocks in the fifth row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.35',
    section: 'entries_on_the_fifth_block_row',
    label: "J: dI/ds = 0",
    latex: String.raw`\begin{aligned}
\left(\partial_s \hat{I}\right)_{i,q} &= 0,
\end{aligned}`,
    description: "Blocks in the fourth row are given by Blocks in the fifth row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.36',
    section: 'entries_on_the_fifth_block_row',
    label: "J: dI/dh",
    latex: String.raw`\begin{aligned}
\left(\partial_h \hat{I}\right)_{i,q} &= \sum_{\substack{i=l_2^2(e,ii)\\ q=S_2(e_2,qq)}} \left[ u_{l_2(e_2,jj)} \partial_{h_q} d_{ii,jj,n_r}(e_2) + w_{l_2(e,jj)} \partial_{h_q} d_{ii,jj,n_r}(e_\ell) \right].
\end{aligned}`,
    description: "Blocks in the fourth row are given by Blocks in the fifth row are given by",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.37',
    section: 'jacobian_with_explicit_zero_blocks',
    label: "Jacobian with Zero Blocks",
    latex: String.raw`JR =
\begin{bmatrix}
\partial_u \hat{M}^r & \partial_w \hat{M}^r & \partial_p \hat{M}^r & \partial_{\omega^2} \hat{M}^r & \partial_{\omega^3} \hat{M}^r & \partial_{\epsilon^3} \hat{M}^r & \partial_h \hat{M}^r \\
\partial_u \hat{M}^z & \partial_w \hat{M}^z & \partial_p \hat{M}^z & \partial_{\omega^2} \hat{M}^z & \partial_{\omega^3} \hat{M}^z & \partial_{\epsilon^3} \hat{M}^z & \partial_h \hat{M}^z \\
\partial_u \hat{C}   & \partial_w \hat{C}   & 0 & 0 & 0 & 0 & \partial_h \hat{C}   \\
\partial_u \hat{K}   & \partial_w \hat{K}   & 0 & 0 & 0 & 0 & \partial_h \hat{K}   \\
\partial_u \hat{I}   & \partial_w \hat{I}   & 0 & 0 & 0 & 0 & \partial_h \hat{I}
\end{bmatrix}`,
    description: "Re-writing the Jacobian indicating null blocks we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '18.38',
    section: 'jacobian_with_explicit_zero_blocks',
    label: "dM^r/d\u03c9^2 = 0 (flat bdry 2)",
    latex: String.raw`\partial_{\omega^2} \hat{M}^r = 0`,
    description: "We highlight that when boundary 2 is a straight line parallel to the axis, we also have",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '18.39-40',
    section: 'jacobian_with_explicit_zero_blocks',
    label: "dM^r/d\u03b5^3 = dM^z/d\u03c9^3 = 0 (flat bdry 3)",
    latex: String.raw`\partial_{\epsilon^3} \hat{M}^r = 0, \qquad \partial_{\omega^3} \hat{M}^z = 0`,
    description: "We highlight that when boundary 2 is a straight line parallel to the axis, we also have and when boundary 3 is a straight line parallel to the axis, we also have",
    references: [],
    transform: null,
    hidden: true,
  },
  {
    id: '19.1',
    section: 'basis_functions',
    label: "\u03c8_1 (Pressure Basis)",
    latex: String.raw`\begin{aligned}
\psi_{1} &= \frac{1 + \eta}{2},
\end{aligned}`,
    description: "Pressure interpolating functions are given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.2',
    section: 'basis_functions',
    label: "\u03c8_2 (Pressure Basis)",
    latex: String.raw`\begin{aligned}
\psi_{2} &= -\frac{\xi + \eta}{2},
\end{aligned}`,
    description: "Pressure interpolating functions are given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.3',
    section: 'basis_functions',
    label: "\u03c8_3 (Pressure Basis)",
    latex: String.raw`\begin{aligned}
\psi_{3} &= \frac{1 + \xi}{2}.
\end{aligned}`,
    description: "Pressure interpolating functions are given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.4',
    section: 'basis_functions',
    label: "\u03c6_1 (Velocity Basis)",
    latex: String.raw`\begin{aligned}
\phi_{1} &= \psi_{1}(2\psi_{1} - 1) = \frac{1 + \eta}{2} (1 + \eta - 1) = \frac{\eta(\eta + 1)}{2} = \frac{\eta^{2} + \eta}{2},
\end{aligned}`,
    description: "Velocity interpolating functions are defined as follows",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.5',
    section: 'basis_functions',
    label: "\u03c6_2 (Velocity Basis)",
    latex: String.raw`\begin{aligned}
\phi_{2} &= \psi_{2}(2\psi_{2} - 1) = -\frac{\xi + \eta}{2} (-\xi -\eta - 1) = \frac{(\xi + \eta)(\xi + \eta + 1)}{2} = \frac{\xi^{2} + \eta^{2} + 2\xi\eta + \xi + \eta}{2},
\end{aligned}`,
    description: "Velocity interpolating functions are defined as follows",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.6',
    section: 'basis_functions',
    label: "\u03c6_3 (Velocity Basis)",
    latex: String.raw`\begin{aligned}
\phi_{3} &= \psi_{3}(2\psi_{3} - 1) = \frac{1 + \xi}{2} (1 + \xi - 1) = \frac{\xi(\xi + 1)}{2} = \frac{\xi^{2} + \xi}{2},
\end{aligned}`,
    description: "Velocity interpolating functions are defined as follows",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.7',
    section: 'basis_functions',
    label: "\u03c6_4 (Velocity Basis)",
    latex: String.raw`\begin{aligned}
\phi_{4} &= 4\psi_{1}\psi_{3} = 4\frac{1 + \eta}{2}\frac{1 + \xi}{2} = (\xi + 1)(\eta + 1) = \xi\eta +\xi +\eta +1,
\end{aligned}`,
    description: "Velocity interpolating functions are defined as follows",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.8',
    section: 'basis_functions',
    label: "\u03c6_5 (Velocity Basis)",
    latex: String.raw`\begin{aligned}
\phi_{5} &= 4\psi_{2}\psi_{1} = -4\frac{\xi + \eta}{2}\frac{1 + \eta}{2} = -(\xi +\eta)(\eta + 1) = -\eta^{2} - \xi\eta -\xi -\eta ,
\end{aligned}`,
    description: "Velocity interpolating functions are defined as follows",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.9',
    section: 'basis_functions',
    label: "\u03c6_6 (Velocity Basis)",
    latex: String.raw`\begin{aligned}
\phi_{6} &= 4\psi_{3}\psi_{2} = -4\frac{1 + \xi}{2}\frac{\xi + \eta}{2} = -(\xi +\eta)(\xi + 1) = -\xi^{2} - \xi\eta -\xi -\eta .
\end{aligned}`,
    description: "Velocity interpolating functions are defined as follows",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.10',
    section: 'basis_functions',
    label: "d\u03c8_1/d\u03be, d\u03c8_1/d\u03b7",
    latex: String.raw`(r^{e},z^{e}) = S_{e}(\xi,\eta)`,
    description: "Function maps the coordinates of the master element to the coordinates of element number",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.11',
    section: 'basis_functions',
    label: "d\u03c8_2/d\u03be, d\u03c8_2/d\u03b7",
    latex: String.raw`r_e = \sum_{jj = 1}^{6} r_{e,jj} \phi_{jj}`,
    description: "More specifically The fact that our mapping is isoparametric means that, much like the pressure and velocity functions, the and coordinates of the points in a given element are described as",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.12',
    section: 'basis_functions',
    label: "d\u03c8_3/d\u03be, d\u03c8_3/d\u03b7",
    latex: String.raw`z_e = \sum_{jj = 1}^{6} z_{e,jj} \phi_{jj}`,
    description: "More specifically The fact that our mapping is isoparametric means that, much like the pressure and velocity functions, the and coordinates of the points in a given element are described as and",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.13',
    section: 'derivatives_of_the_basis_functions',
    label: "d\u03c6_1/d\u03be, d\u03c6_1/d\u03b7",
    latex: String.raw`\begin{aligned}
\partial_{\xi}\phi_{1} &= 0,
\end{aligned}`,
    description: "The derivatives of the velocity interpolating functions with respect to are given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.14',
    section: 'derivatives_of_the_basis_functions',
    label: "d\u03c6_2/d\u03be, d\u03c6_2/d\u03b7",
    latex: String.raw`\begin{aligned}
\partial_{\xi}\phi_{2} &= \xi +\eta +\frac{1}{2},
\end{aligned}`,
    description: "The derivatives of the velocity interpolating functions with respect to are given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.15',
    section: 'derivatives_of_the_basis_functions',
    label: "d\u03c6_3/d\u03be, d\u03c6_3/d\u03b7",
    latex: String.raw`\begin{aligned}
\partial_{\xi}\phi_{3} &= \xi +\frac{1}{2},
\end{aligned}`,
    description: "The derivatives of the velocity interpolating functions with respect to are given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.16',
    section: 'derivatives_of_the_basis_functions',
    label: "d\u03c6_4/d\u03be, d\u03c6_4/d\u03b7",
    latex: String.raw`\begin{aligned}
\partial_{\xi}\phi_{4} &= \eta +1,
\end{aligned}`,
    description: "The derivatives of the velocity interpolating functions with respect to are given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.17',
    section: 'derivatives_of_the_basis_functions',
    label: "d\u03c6_5/d\u03be, d\u03c6_5/d\u03b7",
    latex: String.raw`\begin{aligned}
\partial_{\xi}\phi_{5} &= -\eta -1,
\end{aligned}`,
    description: "The derivatives of the velocity interpolating functions with respect to are given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.18',
    section: 'derivatives_of_the_basis_functions',
    label: "d\u03c6_6/d\u03be, d\u03c6_6/d\u03b7",
    latex: String.raw`\begin{aligned}
\partial_{\xi}\phi_{6} &= -2\xi -\eta -1.
\end{aligned}`,
    description: "The derivatives of the velocity interpolating functions with respect to are given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.19',
    section: 'derivatives_of_the_basis_functions',
    label: "d\u00b2\u03c6_1/d\u03be\u00b2, d\u00b2\u03c6_1/d\u03bed\u03b7, d\u00b2\u03c6_1/d\u03b7\u00b2",
    latex: String.raw`\begin{aligned}
\partial_{\eta}\phi_{1} &= \eta +\frac{1}{2},
\end{aligned}`,
    description: "The derivatives of the velocity interpolating functions with respect to are given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.20',
    section: 'derivatives_of_the_basis_functions',
    label: "d\u00b2\u03c6_2/d\u03be\u00b2, d\u00b2\u03c6_2/d\u03bed\u03b7, d\u00b2\u03c6_2/d\u03b7\u00b2",
    latex: String.raw`\begin{aligned}
\partial_{\eta}\phi_{2} &= \xi +\eta +\frac{1}{2},
\end{aligned}`,
    description: "The derivatives of the velocity interpolating functions with respect to are given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.21',
    section: 'derivatives_of_the_basis_functions',
    label: "d\u00b2\u03c6_3/d\u03be\u00b2, d\u00b2\u03c6_3/d\u03bed\u03b7, d\u00b2\u03c6_3/d\u03b7\u00b2",
    latex: String.raw`\begin{aligned}
\partial_{\eta}\phi_{3} &= 0,
\end{aligned}`,
    description: "The derivatives of the velocity interpolating functions with respect to are given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.22',
    section: 'derivatives_of_the_basis_functions',
    label: "d\u00b2\u03c6_4/d\u03be\u00b2, d\u00b2\u03c6_4/d\u03bed\u03b7, d\u00b2\u03c6_4/d\u03b7\u00b2",
    latex: String.raw`\begin{aligned}
\partial_{\eta}\phi_{4} &= \xi +1,
\end{aligned}`,
    description: "The derivatives of the velocity interpolating functions with respect to are given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.23',
    section: 'derivatives_of_the_basis_functions',
    label: "d\u00b2\u03c6_5/d\u03be\u00b2, d\u00b2\u03c6_5/d\u03bed\u03b7, d\u00b2\u03c6_5/d\u03b7\u00b2",
    latex: String.raw`\begin{aligned}
\partial_{\eta}\phi_{5} &= -2\eta -\xi -1,
\end{aligned}`,
    description: "The derivatives of the velocity interpolating functions with respect to are given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '19.24',
    section: 'derivatives_of_the_basis_functions',
    label: "d\u00b2\u03c6_6/d\u03be\u00b2, d\u00b2\u03c6_6/d\u03bed\u03b7, d\u00b2\u03c6_6/d\u03b7\u00b2",
    latex: String.raw`\begin{aligned}
\partial_{\eta}\phi_{6} &= -\xi -1.
\end{aligned}`,
    description: "The derivatives of the velocity interpolating functions with respect to are given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.1',
    section: 'integrals_over_triangular_elements',
    label: "Isoparametric Mapping r(\u03be,\u03b7)",
    latex: String.raw`\int_{\Omega_e} f(r,z) \, dr\,dz = \int_{\eta=-1}^{1} \int_{\xi=-1}^{1} f(\xi,\eta) \, |\det J_e| \, d\xi\, d\eta`,
    description: "That is to say, we need to consider",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.2',
    section: 'integrals_over_triangular_elements',
    label: "Isoparametric Mapping z(\u03be,\u03b7)",
    latex: String.raw`J_e = \begin{bmatrix}
\frac{\partial r_e}{\partial \xi} & \frac{\partial r_e}{\partial \eta} \\[4pt]
\frac{\partial z_e}{\partial \xi} & \frac{\partial z_e}{\partial \eta}
\end{bmatrix}`,
    description: "That is to say, we need to consider where is the Jacobian of the isoparametric map for that element, given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.3',
    section: 'integrals_over_triangular_elements',
    label: "Jacobian Matrix J",
    latex: String.raw`\det J_e = \frac{\partial r_e}{\partial \xi} \frac{\partial z_e}{\partial \eta} - \frac{\partial r_e}{\partial \eta} \frac{\partial z_e}{\partial \xi}`,
    description: "That is to say, we need to consider where is the Jacobian of the isoparametric map for that element, given by , and therefore",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.4',
    section: 'integrals_over_triangular_elements',
    label: "Jacobian Determinant |J|",
    latex: String.raw`\det J_e = \left(\sum_{i=1}^6 r_{e,i} \frac{\partial \phi_i}{\partial \xi}\right) \left(\sum_{j=1}^6 z_{e,j} \frac{\partial \phi_j}{\partial \eta}\right) - \left(\sum_{i=1}^6 r_{e,i} \frac{\partial \phi_i}{\partial \eta}\right) \left(\sum_{j=1}^6 z_{e,j} \frac{\partial \phi_j}{\partial \xi}\right)`,
    description: "",
    references: ["19.11", "19.12"],
    transform: "From (19.11), (19.12)",
    hidden: false,
  },
  {
    id: '20.6',
    section: 'integrals_over_triangular_elements',
    label: "dr/d\u03be, dr/d\u03b7 Expansion",
    latex: String.raw`\det J_e = \sum_{i=1}^6 \sum_{j=1}^6 r_{e,i} \left( \frac{\partial \phi_i}{\partial \xi} \frac{\partial \phi_j}{\partial \eta} - \frac{\partial \phi_j}{\partial \xi} \frac{\partial \phi_i}{\partial \eta} \right) z_{e,j}`,
    description: "",
    references: ["19.11", "19.12"],
    transform: "From (19.11), (19.12)",
    hidden: false,
  },
  {
    id: '20.7',
    section: 'integrals_over_triangular_elements',
    label: "dz/d\u03be, dz/d\u03b7 Expansion",
    latex: String.raw`J_e^{-1} = \begin{bmatrix}
\frac{\partial \xi}{\partial r_e} & \frac{\partial \xi}{\partial z_e} \\[4pt]
\frac{\partial \eta}{\partial r_e} & \frac{\partial \eta}{\partial z_e}
\end{bmatrix} = \frac{1}{\det J_e} \begin{bmatrix}
\frac{\partial z_e}{\partial \eta} & -\frac{\partial r_e}{\partial \eta} \\[4pt]
-\frac{\partial z_e}{\partial \xi} & \frac{\partial r_e}{\partial \xi}
\end{bmatrix}`,
    description: "We do this by noticing that",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.11',
    section: 'integrals_over_triangular_elements',
    label: "a-Integral a_{ii,jj}^{r,r}",
    latex: String.raw`\begin{aligned}
\frac{\partial \phi_{jj}}{\partial r_e} &= \frac{1}{\det J_e} \left( \frac{\partial \phi_{jj}}{\partial \xi} \frac{\partial z_e}{\partial \eta} - \frac{\partial \phi_{jj}}{\partial \eta} \frac{\partial z_e}{\partial \xi} \right)
&= \frac{1}{\det J_e} \left[ \frac{\partial \phi_{jj}}{\partial \xi} \left( \sum_{kk} z_{e,kk} \frac{\partial \phi_{kk}}{\partial \eta} \right) - \frac{\partial \phi_{jj}}{\partial \eta} \left( \sum_{kk} z_{e,kk} \frac{\partial \phi_{kk}}{\partial \xi} \right) \right]
&= \frac{1}{\det J_e} \sum_{kk=1}^6 \left( \frac{\partial \phi_{jj}}{\partial \xi} \frac{\partial \phi_{kk}}{\partial \eta} - \frac{\partial \phi_{jj}}{\partial \eta} \frac{\partial \phi_{kk}}{\partial \xi} \right) z_{e,kk},
\end{aligned}`,
    description: "Is by noticing that = Je , where the left equality follows by definition and the right one is the computation of the inverse from the expression in (20.2)",
    references: ["20.2"],
    transform: "From (20.2)",
    hidden: false,
  },
  {
    id: '20.15',
    section: 'integrals_over_triangular_elements',
    label: "a-Integral a_{ii,jj}^{z,z}",
    latex: String.raw`\begin{aligned}
\frac{\partial \phi_{jj}}{\partial z_e} &= \frac{1}{\det J_e} \left( -\frac{\partial \phi_{jj}}{\partial \xi} \frac{\partial r_e}{\partial \eta} + \frac{\partial \phi_{jj}}{\partial \eta} \frac{\partial r_e}{\partial \xi} \right)
&= \frac{1}{\det J_e} \sum_{kk=1}^6 \left( -\frac{\partial \phi_{jj}}{\partial \xi} \frac{\partial \phi_{kk}}{\partial \eta} + \frac{\partial \phi_{jj}}{\partial \eta} \frac{\partial \phi_{kk}}{\partial \xi} \right) r_{e,kk}.
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.16',
    section: 'a_terms',
    label: "a-Integral a_{ii,jj}^{r,z}",
    latex: String.raw`\begin{aligned}
a_{g_r,ii}(e) &= \int_{\Omega_e} g_r \phi_{l(e,ii)}
\end{aligned}`,
    description: "Boxed equations correspond to the most convenient way of expressing the terms when coding them",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.18',
    section: 'a_terms',
    label: "a-Integral a_{ii,jj}^{z,r}",
    latex: String.raw`\begin{aligned}
&\approx \sum_{p=1}^{n_G} W(p) g_r \phi_{ii}(p) \det J_e(p).
\end{aligned}`,
    description: "Boxed equations correspond to the most convenient way of expressing the terms when coding them",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.19',
    section: 'a_terms',
    label: "a-Integral a_{ii,kk,jj}^r",
    latex: String.raw`\begin{aligned}
a_{ii,jj}(e) &= \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,jj)}
\end{aligned}`,
    description: "Boxed equations correspond to the most convenient way of expressing the terms when coding them",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.21',
    section: 'a_terms',
    label: "a-Integral a_{ii,kk,jj}^z",
    latex: String.raw`\begin{aligned}
&\approx \sum_{p=1}^{n_G} W(p) \phi_{ii}(p) \phi_{jj}(p) \det J_e(p).
\end{aligned}`,
    description: "Boxed equations correspond to the most convenient way of expressing the terms when coding them",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.22',
    section: 'a_terms',
    label: "a-Integral a_{ii}",
    latex: String.raw`\begin{aligned}
a_{ii,kk,jj}^{r}(e) &= \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_r \phi_{l(e,jj)}
\end{aligned}`,
    description: "Boxed equations correspond to the most convenient way of expressing the terms when coding them",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.25',
    section: 'a_terms',
    label: "b-Integral b_{ii,jj}^r",
    latex: String.raw`\begin{aligned}
&\approx \sum_{p=1}^{n_G} W(p) \phi_{ii}(p) \phi_{kk}(p) \left( \sum_{mm=1}^6 T_{jj,mm}(p) z_{e,mm} \right),
\end{aligned}`,
    description: "Boxed equations correspond to the most convenient way of expressing the terms when coding them",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.26',
    section: 'a_terms',
    label: "b-Integral b_{ii,jj}^z",
    latex: String.raw`\begin{aligned}
a_{ii,kk,jj}^{z}(e) &= \int_{\Omega_e} \phi_{l(e,ii)} \phi_{l(e,kk)} \partial_z \phi_{l(e,jj)}
\end{aligned}`,
    description: "Boxed equations correspond to the most convenient way of expressing the terms when coding them",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.28',
    section: 'a_terms',
    label: "da^{r,r}/dh Derivative",
    latex: String.raw`\begin{aligned}
&\approx -\sum_{p=1}^{n_G} W(p) \phi_{ii}(p) \phi_{kk}(p) \left( \sum_{mm=1}^6 T_{jj,mm}(p) r_{e,mm} \right),
\end{aligned}`,
    description: "Boxed equations correspond to the most convenient way of expressing the terms when coding them",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.29',
    section: 'a_terms',
    label: "da^{z,z}/dh Derivative",
    latex: String.raw`\begin{aligned}
a_{ii,jj}^{r,r}(e) &= \int_{\Omega_e} \partial_r \phi_{l(e,ii)} \partial_r \phi_{l(e,jj)}
\end{aligned}`,
    description: "Boxed equations correspond to the most convenient way of expressing the terms when coding them",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.31',
    section: 'a_terms',
    label: "da^{r,z}/dh Derivative",
    latex: String.raw`\begin{aligned}
&\approx \sum_{p=1}^{n_G} W(p) \frac{ \left( \sum_{mm=1}^6 T_{ii,mm}(p) z_{e,mm} \right) \left( \sum_{nn=1}^6 T_{jj,nn}(p) z_{e,nn} \right) }{ \det J_e(p) },
\end{aligned}`,
    description: "Boxed equations correspond to the most convenient way of expressing the terms when coding them",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.32',
    section: 'a_terms',
    label: "da^{z,r}/dh Derivative",
    latex: String.raw`\begin{aligned}
a_{ii,jj}^{z,r}(e) &= \int_{\Omega_e} \partial_z \phi_{l(e,ii)} \partial_r \phi_{l(e,jj)}
\end{aligned}`,
    description: "Boxed equations correspond to the most convenient way of expressing the terms when coding them",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.34',
    section: 'a_terms',
    label: "da^r_{ii,kk,jj}/dh Derivative",
    latex: String.raw`\begin{aligned}
&\approx -\sum_{p=1}^{n_G} W(p) \frac{ \left( \sum_{mm=1}^6 T_{ii,mm}(p) r_{e,mm} \right) \left( \sum_{nn=1}^6 T_{jj,nn}(p) z_{e,nn} \right) }{ \det J_e(p) },
\end{aligned}`,
    description: "Boxed equations correspond to the most convenient way of expressing the terms when coding them",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.35',
    section: 'a_terms',
    label: "da^z_{ii,kk,jj}/dh Derivative",
    latex: String.raw`\begin{aligned}
a_{ii,jj}^{z,z}(e) &= \int_{\Omega_e} \partial_z \phi_{l(e,ii)} \partial_z \phi_{l(e,jj)}
\end{aligned}`,
    description: "Boxed equations correspond to the most convenient way of expressing the terms when coding them",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.37',
    section: 'a_terms',
    label: "da_{ii}/dh Derivative",
    latex: String.raw`\begin{aligned}
&\approx \sum_{p=1}^{n_G} W(p) \frac{ \left( \sum_{mm=1}^6 T_{ii,mm}(p) r_{e,mm} \right) \left( \sum_{nn=1}^6 T_{jj,nn}(p) r_{e,nn} \right) }{ \det J_e(p) },
\end{aligned}`,
    description: "Boxed equations correspond to the most convenient way of expressing the terms when coding them",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.38',
    section: 'a_terms',
    label: "db^r/dh Derivative",
    latex: String.raw`\begin{aligned}
a_{ii,jj}^{r,z}(e) &= \int_{\Omega_e} \partial_r \phi_{l(e,ii)} \partial_z \phi_{l(e,jj)}
\end{aligned}`,
    description: "Boxed equations correspond to the most convenient way of expressing the terms when coding them",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.40',
    section: 'a_terms',
    label: "db^z/dh Derivative",
    latex: String.raw`\begin{aligned}
&\approx -\sum_{p=1}^{n_G} W(p) \frac{ \left( \sum_{mm=1}^6 T_{ii,mm}(p) z_{e,mm} \right) \left( \sum_{nn=1}^6 T_{jj,nn}(p) r_{e,nn} \right) }{ \det J_e(p) },
\end{aligned}`,
    description: "Boxed equations correspond to the most convenient way of expressing the terms when coding them",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.41',
    section: 'a_terms',
    label: "dJ/dh Jacobian Derivative",
    latex: String.raw`\begin{aligned}
a_{g_z,ii}(e) &= \int_{\Omega_e} g_z \phi_{l(e,ii)}
\end{aligned}`,
    description: "Boxed equations correspond to the most convenient way of expressing the terms when coding them",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.43',
    section: 'a_terms',
    label: "d\u03c6/dr in Terms of dh",
    latex: String.raw`\begin{aligned}
&\approx \sum_{p=1}^{n_G} W(p) g_z \phi_{ii}(p) \det J_e(p).
\end{aligned}`,
    description: "Boxed equations correspond to the most convenient way of expressing the terms when coding them",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.44',
    section: 'b_terms',
    label: "d\u03c6/dz in Terms of dh",
    latex: String.raw`\begin{aligned}
b_{jj,ii}^{r}(e) &= \int_{\Omega_e} \psi_{l_p(e,jj)} \partial_r \phi_{l(e,ii)}
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.47',
    section: 'b_terms',
    label: "d\u00b2\u03c6/dr\u00b2 in Terms of dh",
    latex: String.raw`\begin{aligned}
&\approx \sum_{p=1}^{n_G} W(p) \psi_{jj}(p) \sum_{mm=1}^6 T_{ii,mm}(p) z_{e,mm},
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.48',
    section: 'b_terms',
    label: "d\u00b2\u03c6/drdz in Terms of dh",
    latex: String.raw`\begin{aligned}
b_{jj,ii}^{z}(e) &= \int_{\Omega_e} \psi_{l_p(e,jj)} \partial_z \phi_{l(e,ii)}
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.50',
    section: 'b_terms',
    label: "d\u00b2\u03c6/dz\u00b2 in Terms of dh",
    latex: String.raw`\begin{aligned}
&\approx -\sum_{p=1}^{n_G} W(p) \psi_{jj}(p) \sum_{mm=1}^6 T_{ii,mm}(p) r_{e,mm}.
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.52',
    section: 'derivatives_of_integrals_over_triangle_e',
    label: "d\u03c8/dr in Terms of dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} \det J_e &= \sum_{i=1}^6 \sum_{j=1}^6 \left[ (\partial_{h_q} r_{e,i}) T_{ii,jj} z_{e,j} + r_{e,i} T_{ii,jj} (\partial_{h_q} z_{e,j}) \right].
\end{aligned}`,
    description: "We consider now the derivative of",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.55',
    section: 'derivatives_of_a_terms',
    label: "d\u03c8/dz in Terms of dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} a_{g_r,ii}(e) &\approx \sum_{p=1}^{n_G} W(p) g_r \phi_{ii}(p) \partial_{h_q} \det J_e(p),
\end{aligned}`,
    description: "We consider now the derivative of",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.58',
    section: 'derivatives_of_a_terms',
    label: "d(dr/d\u03be)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} a_{ii,jj}(e) &\approx \sum_{p=1}^{n_G} W(p) \phi_{ii}(p) \phi_{jj}(p) \partial_{h_q} \det J_e(p),
\end{aligned}`,
    description: "We consider now the derivative of",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.61',
    section: 'derivatives_of_a_terms',
    label: "d(dr/d\u03b7)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} a_{ii,kk,jj}^{r}(e) &\approx \sum_{p=1}^{n_G} W(p) \phi_{ii}(p) \phi_{kk}(p) \sum_{mm=1}^6 T_{jj,mm}(p) \partial_{h_q} z_{e,mm},
\end{aligned}`,
    description: "We consider now the derivative of",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.64',
    section: 'derivatives_of_a_terms',
    label: "d(dz/d\u03be)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} a_{ii,kk,jj}^{z}(e) &\approx -\sum_{p=1}^{n_G} W(p) \phi_{ii}(p) \phi_{kk}(p) \sum_{mm=1}^6 T_{jj,mm}(p) \partial_{h_q} r_{e,mm},
\end{aligned}`,
    description: "We consider now the derivative of",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.67',
    section: 'derivatives_of_a_terms',
    label: "d(dz/d\u03b7)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} a_{ii,jj}^{r,r}(e) &\approx \sum_{p=1}^{n_G} W(p) \frac{ \left( \sum_{mm} T_{ii,mm}(p) \partial_{h_q} z_{e,mm} \right) \left( \sum_{nn} T_{jj,nn}(p) z_{e,nn} \right) }{ \det J_e(p) }
&\quad + \sum_{p=1}^{n_G} W(p) \frac{ \left( \sum_{mm} T_{ii,mm}(p) z_{e,mm} \right) \left( \sum_{nn} T_{jj,nn}(p) \partial_{h_q} z_{e,nn} \right) }{ \det J_e(p) }
&\quad - \sum_{p=1}^{n_G} W(p) \frac{ \left( \sum_{mm} T_{ii,mm}(p) z_{e,mm} \right) \left( \sum_{nn} T_{jj,nn}(p) z_{e,nn} \right) }{ [\det J_e(p)]^2 } \partial_{h_q} \det J_e(p),
\end{aligned}`,
    description: "We consider now the derivative of",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.70',
    section: 'derivatives_of_a_terms',
    label: "d(d\u00b2r/d\u03be\u00b2)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} a_{ii,jj}^{r,z}(e) &\approx -\sum_{p=1}^{n_G} W(p) \frac{ \left( \sum_{mm} T_{ii,mm}(p) \partial_{h_q} z_{e,mm} \right) \left( \sum_{nn} T_{jj,nn}(p) r_{e,nn} \right) }{ \det J_e(p) }
&\quad - \sum_{p=1}^{n_G} W(p) \frac{ \left( \sum_{mm} T_{ii,mm}(p) z_{e,mm} \right) \left( \sum_{nn} T_{jj,nn}(p) \partial_{h_q} r_{e,nn} \right) }{ \det J_e(p) }
&\quad + \sum_{p=1}^{n_G} W(p) \frac{ \left( \sum_{mm} T_{ii,mm}(p) z_{e,mm} \right) \left( \sum_{nn} T_{jj,nn}(p) r_{e,nn} \right) }{ [\det J_e(p)]^2 } \partial_{h_q} \det J_e(p),
\end{aligned}`,
    description: "We consider now the derivative of",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.73',
    section: 'derivatives_of_a_terms',
    label: "d(d\u00b2r/d\u03bed\u03b7)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} a_{ii,jj}^{z,r}(e) &\approx -\sum_{p=1}^{n_G} W(p) \frac{ \left( \sum_{mm} T_{ii,mm}(p) \partial_{h_q} r_{e,mm} \right) \left( \sum_{nn} T_{jj,nn}(p) z_{e,nn} \right) }{ \det J_e(p) }
&\quad - \sum_{p=1}^{n_G} W(p) \frac{ \left( \sum_{mm} T_{ii,mm}(p) r_{e,mm} \right) \left( \sum_{nn} T_{jj,nn}(p) \partial_{h_q} z_{e,nn} \right) }{ \det J_e(p) }
&\quad + \sum_{p=1}^{n_G} W(p) \frac{ \left( \sum_{mm} T_{ii,mm}(p) r_{e,mm} \right) \left( \sum_{nn} T_{jj,nn}(p) z_{e,nn} \right) }{ [\det J_e(p)]^2 } \partial_{h_q} \det J_e(p),
\end{aligned}`,
    description: "We consider now the derivative of",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.76',
    section: 'derivatives_of_a_terms',
    label: "d(d\u00b2z/d\u03be\u00b2)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} a_{ii,jj}^{z,z}(e) &\approx \sum_{p=1}^{n_G} W(p) \frac{ \left( \sum_{mm} T_{ii,mm}(p) \partial_{h_q} r_{e,mm} \right) \left( \sum_{nn} T_{jj,nn}(p) r_{e,nn} \right) }{ \det J_e(p) }
&\quad + \sum_{p=1}^{n_G} W(p) \frac{ \left( \sum_{mm} T_{ii,mm}(p) r_{e,mm} \right) \left( \sum_{nn} T_{jj,nn}(p) \partial_{h_q} r_{e,nn} \right) }{ \det J_e(p) }
&\quad - \sum_{p=1}^{n_G} W(p) \frac{ \left( \sum_{mm} T_{ii,mm}(p) r_{e,mm} \right) \left( \sum_{nn} T_{jj,nn}(p) r_{e,nn} \right) }{ [\det J_e(p)]^2 } \partial_{h_q} \det J_e(p),
\end{aligned}`,
    description: "We consider now the derivative of",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.79',
    section: 'derivatives_of_a_terms',
    label: "d(d\u00b2z/d\u03bed\u03b7)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} a_{g_z,ii}(e) &\approx \sum_{p=1}^{n_G} W(p) g_z \phi_{ii}(p) \partial_{h_q} \det J_e(p).
\end{aligned}`,
    description: "We consider now the derivative of",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.82',
    section: 'derivatives_of_b_terms',
    label: "d|J|/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} b_{jj,ii}^{r}(e) &\approx \sum_{p=1}^{n_G} W(p) \psi_{jj}(p) \sum_{mm=1}^6 T_{ii,mm}(p) \partial_{h_q} z_{e,mm},
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '20.85',
    section: 'derivatives_of_b_terms',
    label: "d(1/|J|)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} b_{jj,ii}^{z}(e) &\approx -\sum_{p=1}^{n_G} W(p) \psi_{jj}(p) \sum_{mm=1}^6 T_{ii,mm}(p) \partial_{h_q} r_{e,mm}.
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.1',
    section: 'the_free_surface_line_elements',
    label: "Free Surface Arc Length ds^1",
    latex: String.raw`c_{t_r,jj,ii}^{s}(e_1) = \int_{\partial\Omega_{e_1}} t_r^1 \phi_{i_1(e_1,jj)}^1 \partial_s \phi_{i_1(e_1,ii)}^1`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.2',
    section: 'the_free_surface_line_elements',
    label: "Free Surface dr/ds, dz/ds",
    latex: String.raw`\begin{aligned}
\phi_1^1(\xi) &= \phi_2(\xi,\eta=-1),
\end{aligned}`,
    description: "More specifically we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.3',
    section: 'the_free_surface_line_elements',
    label: "Normal n^1 Components",
    latex: String.raw`\begin{aligned}
\phi_2^1(\xi) &= \phi_6(\xi,\eta=-1),
\end{aligned}`,
    description: "More specifically we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.4',
    section: 'the_free_surface_line_elements',
    label: "Tangent t^1 Components",
    latex: String.raw`\begin{aligned}
\phi_3^1(\xi) &= \phi_3(\xi,\eta=-1),
\end{aligned}`,
    description: "More specifically we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.6',
    section: 'the_free_surface_line_elements',
    label: "ds^1 in Terms of d\u03be",
    latex: String.raw`\begin{aligned}
\phi_1^1(\xi) &= \frac{\xi^2 - \xi}{2},
\end{aligned}`,
    description: "More specifically we have since the line element is given by the equation in the master element",
    references: ["19.5"],
    transform: "From (19.5)",
    hidden: false,
  },
  {
    id: '21.8',
    section: 'the_free_surface_line_elements',
    label: "c-Integral c_{t_r,jj,ii}^s",
    latex: String.raw`\begin{aligned}
\phi_2^1(\xi) &= -\xi^2 + 1,
\end{aligned}`,
    description: "More specifically we have since the line element is given by the equation in the master element",
    references: ["19.5"],
    transform: "From (19.5)",
    hidden: false,
  },
  {
    id: '21.9',
    section: 'the_free_surface_line_elements',
    label: "c-Integral c_{t_z,jj,ii}^s",
    latex: String.raw`\begin{aligned}
\phi_3^1(\xi) &= \frac{\xi^2 + \xi}{2},
\end{aligned}`,
    description: "More specifically we have since the line element is given by the equation in the master element",
    references: ["19.5"],
    transform: "From (19.5)",
    hidden: false,
  },
  {
    id: '21.10',
    section: 'the_free_surface_line_elements',
    label: "c-Integral c_{ii,jj,n_r}",
    latex: String.raw`\begin{aligned}
\partial_\xi \phi_1^1(\xi) &= \xi - \frac12,
\end{aligned}`,
    description: "From equation (19.5) we have and consequently",
    references: ["19.5"],
    transform: "From (19.5)",
    hidden: false,
  },
  {
    id: '21.11',
    section: 'the_free_surface_line_elements',
    label: "c-Integral c_{ii,jj,n_z}",
    latex: String.raw`\begin{aligned}
\partial_\xi \phi_2^1(\xi) &= -2\xi,
\end{aligned}`,
    description: "From equation (19.5) we have and consequently",
    references: ["19.5"],
    transform: "From (19.5)",
    hidden: false,
  },
  {
    id: '21.12',
    section: 'the_free_surface_line_elements',
    label: "c-Integral c_{ii,n_r}",
    latex: String.raw`\begin{aligned}
\partial_\xi \phi_3^1(\xi) &= \xi + \frac12.
\end{aligned}`,
    description: "From equation (19.5) we have and consequently",
    references: ["19.5"],
    transform: "From (19.5)",
    hidden: false,
  },
  {
    id: '21.13',
    section: 'the_free_surface_line_elements',
    label: "c-Integral c_{ii,n_z}",
    latex: String.raw`t^1 = \frac{ (\partial_\xi r_{e_1}^1, \partial_\xi z_{e_1}^1) }{ \sqrt{ (\partial_\xi r_{e_1}^1)^2 + (\partial_\xi z_{e_1}^1)^2 } }`,
    description: "From equation (19.5) we have and consequently We can calculate the tangent to the line element by",
    references: ["19.5"],
    transform: "From (19.5)",
    hidden: false,
  },
  {
    id: '21.14',
    section: 'the_free_surface_line_elements',
    label: "dc_{t_r}/dh Derivative",
    latex: String.raw`(r_{e_1}^1, z_{e_1}^1) = S_{e_1}^1(\xi)`,
    description: "And its analogue for are defined by the map which takes the interval to the line element in boundary one, i.e",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.15',
    section: 'the_free_surface_line_elements',
    label: "dc_{t_z}/dh Derivative",
    latex: String.raw`\begin{aligned}
\partial_\xi r_{e_1}^1 &= \sum_{jj=1}^3 r_{e_1,jj}^1 \partial_\xi \phi_{jj}^1,
\end{aligned}`,
    description: "And its analogue for are defined by the map which takes the interval to the line element in boundary one, i.e",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.16',
    section: 'the_free_surface_line_elements',
    label: "dc_{n_r}/dh Derivative",
    latex: String.raw`\begin{aligned}
\partial_\xi z_{e_1}^1 &= \sum_{jj=1}^3 z_{e_1,jj}^1 \partial_\xi \phi_{jj}^1,
\end{aligned}`,
    description: "And its analogue for are defined by the map which takes the interval to the line element in boundary one, i.e",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.19',
    section: 'the_free_surface_line_elements',
    label: "dc_{n_z}/dh Derivative",
    latex: String.raw`J_{e_1}^1 \coloneqq \partial_\xi s = \sqrt{ (\partial_\xi r_{e_1}^1)^2 + (\partial_\xi z_{e_1}^1)^2 }`,
    description: "Moreover, we have and we introduce",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.21',
    section: 'the_free_surface_line_elements',
    label: "Liquid-Solid Arc Length ds^2",
    latex: String.raw`c_{t_r,jj,ii}^{s}(e_1) = \int_{\xi=-1}^{1} \frac{ \partial_\xi r_{e_1}^1(\xi) }{ J_{e_1}^1(\xi) } \phi_{jj}^1(\xi) \partial_s \phi_{ii}^1(\xi) \, \partial_\xi s = \int_{\xi=-1}^{1} \frac{ \partial_\xi r_{e_1}^1(\xi) }{ J_{e_1}^1(\xi) } \phi_{jj}^1(\xi) \partial_\xi \phi_{ii}^1(\xi) \, d\xi`,
    description: "Moreover, we have and we introduce which is the determinant of the Jacobian of",
    references: ["21.1"],
    transform: "From (21.1)",
    hidden: false,
  },
  {
    id: '21.22',
    section: 'the_free_surface_line_elements',
    label: "Liquid-Solid dr/ds, dz/ds",
    latex: String.raw`c_{t_r,jj,ii}^{s}(e_1) \approx \sum_{p=1}^{n_{IG}} W_l(p) \frac{ \partial_\xi r_{e_1}^1(p) }{ J_{e_1}^1(p) } \phi_{jj}^1(p) \partial_\xi \phi_{ii}^1(p)`,
    description: "The integral (21.1) can be rewritten as Hence, using Gaussian quadrature we have",
    references: ["21.1"],
    transform: "From (21.1)",
    hidden: false,
  },
  {
    id: '21.25',
    section: 'the_free_surface_line_elements',
    label: "ds^2 in Terms of d\u03be",
    latex: String.raw`\begin{aligned}
c_{t_z,jj,ii}^{s}(e_1) &= \int_{\partial\Omega_{e_1}} t_z^1 \phi_{i_1(e_1,jj)}^1 \partial_s \phi_{i_1(e_1,ii)}^1
&\approx \sum_{p=1}^{n_{IG}} W_l(p) \frac{ \partial_\xi z_{e_1}^1(p) }{ J_{e_1}^1(p) } \phi_{jj}^1(p) \partial_\xi \phi_{ii}^1(p),
\end{aligned}`,
    description: "E rewritten as Hence, using Gaussian quadrature we have Similarly",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.29',
    section: 'the_free_surface_line_elements',
    label: "d-Integral d_{t_r,t_r,ii,jj}",
    latex: String.raw`\begin{aligned}
c_{ii,jj,n_r}(e_1) &= \int_{\partial\Omega_{e_1}} n_r^1 \phi_{i_1(e_1,ii)}^1 \phi_{i_1(e_1,jj)}^1 \approx -\sum_{p=1}^{n_{IG}} W_l(p) \partial_\xi z_{e_1}^1(p) \phi_{ii}^1(p) \phi_{jj}^1(p),
\end{aligned}`,
    description: "E rewritten as Hence, using Gaussian quadrature we have Similarly",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.32',
    section: 'the_free_surface_line_elements',
    label: "d-Integral d_{t_r,t_z,ii,jj}",
    latex: String.raw`\begin{aligned}
c_{ii,jj,n_z}(e_1) &= \int_{\partial\Omega_{e_1}} n_z^1 \phi_{i_1(e_1,ii)}^1 \phi_{i_1(e_1,jj)}^1 \approx \sum_{p=1}^{n_{IG}} W_l(p) \partial_\xi r_{e_1}^1(p) \phi_{ii}^1(p) \phi_{jj}^1(p).
\end{aligned}`,
    description: "E rewritten as Hence, using Gaussian quadrature we have Similarly",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.33',
    section: 'the_liquid_solid_surface_line_elements',
    label: "d-Integral d_{t_z,t_z,ii,jj}",
    latex: String.raw`\begin{aligned}
\phi_1^2(\eta) &= \phi_2(\xi=-1,\eta),
\end{aligned}`,
    description: "More specifically we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.34',
    section: 'the_liquid_solid_surface_line_elements',
    label: "d-Integral d_{t_r,t_r,ii}",
    latex: String.raw`\begin{aligned}
\phi_2^2(\eta) &= \phi_5(\xi=-1,\eta),
\end{aligned}`,
    description: "More specifically we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.35',
    section: 'the_liquid_solid_surface_line_elements',
    label: "d-Integral d_{t_z,t_z,ii}",
    latex: String.raw`\begin{aligned}
\phi_3^2(\eta) &= \phi_1(\xi=-1,\eta),
\end{aligned}`,
    description: "More specifically we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.37',
    section: 'the_liquid_solid_surface_line_elements',
    label: "d-Integral d_{ii,jj,n_r}",
    latex: String.raw`\begin{aligned}
\phi_1^2(\eta) &= \frac{\eta^2 - \eta}{2},
\end{aligned}`,
    description: "More specifically we have since the line element is given by the equation in the master element",
    references: ["19.5"],
    transform: "From (19.5)",
    hidden: false,
  },
  {
    id: '21.39',
    section: 'the_liquid_solid_surface_line_elements',
    label: "d-Integral d_{ii,jj,n_z}",
    latex: String.raw`\begin{aligned}
\phi_2^2(\eta) &= -\eta^2 + 1,
\end{aligned}`,
    description: "More specifically we have since the line element is given by the equation in the master element",
    references: ["19.5"],
    transform: "From (19.5)",
    hidden: false,
  },
  {
    id: '21.40',
    section: 'the_liquid_solid_surface_line_elements',
    label: "dd_{t_r,t_r,ii,jj}/dh",
    latex: String.raw`\begin{aligned}
\phi_3^2(\eta) &= \frac{\eta^2 + \eta}{2},
\end{aligned}`,
    description: "More specifically we have since the line element is given by the equation in the master element",
    references: ["19.5"],
    transform: "From (19.5)",
    hidden: false,
  },
  {
    id: '21.41',
    section: 'the_liquid_solid_surface_line_elements',
    label: "dd_{t_r,t_z,ii,jj}/dh",
    latex: String.raw`\begin{aligned}
\partial_\eta \phi_1^2(\eta) &= \eta - \frac12,
\end{aligned}`,
    description: "From equation (19.5) we have and consequently",
    references: ["19.5"],
    transform: "From (19.5)",
    hidden: false,
  },
  {
    id: '21.42',
    section: 'the_liquid_solid_surface_line_elements',
    label: "dd_{t_z,t_z,ii,jj}/dh",
    latex: String.raw`\begin{aligned}
\partial_\eta \phi_2^2(\eta) &= -2\eta,
\end{aligned}`,
    description: "From equation (19.5) we have and consequently",
    references: ["19.5"],
    transform: "From (19.5)",
    hidden: false,
  },
  {
    id: '21.43',
    section: 'the_liquid_solid_surface_line_elements',
    label: "dd_{t_r,t_r,ii}/dh",
    latex: String.raw`\begin{aligned}
\partial_\eta \phi_3^2(\eta) &= \eta + \frac12.
\end{aligned}`,
    description: "From equation (19.5) we have and consequently",
    references: ["19.5"],
    transform: "From (19.5)",
    hidden: false,
  },
  {
    id: '21.50',
    section: 'the_liquid_solid_surface_line_elements',
    label: "dd_{ii,jj,n_r}/dh",
    latex: String.raw`\begin{aligned}
d_{t_r,t_r,ii,jj}(e_2) &= \int_{\partial\Omega_{e_2}} t_r^2 t_r^2 \phi_{l_2(e_2,ii)}^2 \phi_{l_2(e_2,jj)}^2
&\approx \sum_{p=1}^{n_{IG}} W_l(p) \frac{ (\partial_\eta r_{e_2}^2(p))^2 }{ J_{e_2}^2(p) } \phi_{ii}^2(p) \phi_{jj}^2(p),
\end{aligned}`,
    description: "Since the line element is given by the equation in the master element",
    references: ["19.5"],
    transform: "From (19.5)",
    hidden: false,
  },
  {
    id: '21.53',
    section: 'the_liquid_solid_surface_line_elements',
    label: "dd_{ii,jj,n_z}/dh",
    latex: String.raw`\begin{aligned}
d_{t_r,t_z,ii,jj}(e_2) &\approx \sum_{p=1}^{n_{IG}} W_l(p) \frac{ (\partial_\eta r_{e_2}^2(p)) (\partial_\eta z_{e_2}^2(p)) }{ J_{e_2}^2(p) } \phi_{ii}^2(p) \phi_{jj}^2(p),
\end{aligned}`,
    description: "Since the line element is given by the equation in the master element",
    references: ["19.5"],
    transform: "From (19.5)",
    hidden: false,
  },
  {
    id: '21.56',
    section: 'the_liquid_solid_surface_line_elements',
    label: "Symmetry Axis Line Element",
    latex: String.raw`\begin{aligned}
d_{t_z,t_z,ii,jj}(e_2) &\approx \sum_{p=1}^{n_{IG}} W_l(p) \frac{ (\partial_\eta z_{e_2}^2(p))^2 }{ J_{e_2}^2(p) } \phi_{ii}^2(p) \phi_{jj}^2(p),
\end{aligned}`,
    description: "Since the line element is given by the equation in the master element",
    references: ["19.5"],
    transform: "From (19.5)",
    hidden: false,
  },
  {
    id: '21.60',
    section: 'the_liquid_solid_surface_line_elements',
    label: "f-Integral f_{ii,jj,n_r}",
    latex: String.raw`\begin{aligned}
d_{ii,jj,n_r}(e_2) &\approx \sum_{p=1}^{n_{IG}} W_l(p) \frac{ \partial_\eta z_{e_2}^2(p) }{ J_{e_2}^2(p) } \phi_{ii}(p) \phi_{jj}(p),
\end{aligned}`,
    description: "Since the line element is given by the equation in the master element",
    references: ["19.5"],
    transform: "From (19.5)",
    hidden: false,
  },
  {
    id: '21.63',
    section: 'the_liquid_solid_surface_line_elements',
    label: "f-Integral f_{ii,jj,n_z}",
    latex: String.raw`\begin{aligned}
d_{ii,jj,n_z}(e_2) &\approx -\sum_{p=1}^{n_{IG}} W_l(p) \frac{ \partial_\eta r_{e_2}^2(p) }{ J_{e_2}^2(p) } \phi_{ii}(p) \phi_{jj}(p).
\end{aligned}`,
    description: "Since the line element is given by the equation in the master element",
    references: ["19.5"],
    transform: "From (19.5)",
    hidden: false,
  },
  {
    id: '21.64',
    section: 'the_inflow_boundary_line_elements',
    label: "f-Integral f_{t_r,ii,jj}",
    latex: String.raw`\begin{aligned}
\phi_1^3(\xi) &= \phi_1(\xi,\eta=-\xi),
\end{aligned}`,
    description: "This implies that we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.65',
    section: 'the_inflow_boundary_line_elements',
    label: "f-Integral f_{t_z,ii,jj}",
    latex: String.raw`\begin{aligned}
\phi_2^3(\xi) &= \phi_4(\xi,\eta=-\xi),
\end{aligned}`,
    description: "This implies that we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.66',
    section: 'the_inflow_boundary_line_elements',
    label: "df_{ii,jj,n_r}/dh",
    latex: String.raw`\begin{aligned}
\phi_3^3(\xi) &= \phi_3(\xi,\eta=-\xi),
\end{aligned}`,
    description: "This implies that we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.68',
    section: 'the_inflow_boundary_line_elements',
    label: "df_{ii,jj,n_z}/dh",
    latex: String.raw`\begin{aligned}
\phi_1^3(\xi) &= \frac{\xi^2 - \xi}{2},
\end{aligned}`,
    description: "This implies that we have since the line element is given by the equation in the master element",
    references: ["19.4"],
    transform: "From (19.4)",
    hidden: false,
  },
  {
    id: '21.70',
    section: 'the_inflow_boundary_line_elements',
    label: "df_{t_r,ii,jj}/dh",
    latex: String.raw`\begin{aligned}
\phi_2^3(\xi) &= -\xi^2 + 1,
\end{aligned}`,
    description: "This implies that we have since the line element is given by the equation in the master element",
    references: ["19.4"],
    transform: "From (19.4)",
    hidden: false,
  },
  {
    id: '21.71',
    section: 'the_inflow_boundary_line_elements',
    label: "df_{t_z,ii,jj}/dh",
    latex: String.raw`\begin{aligned}
\phi_3^3(\xi) &= \frac{\xi^2 + \xi}{2},
\end{aligned}`,
    description: "This implies that we have since the line element is given by the equation in the master element",
    references: ["19.4"],
    transform: "From (19.4)",
    hidden: false,
  },
  {
    id: '21.72',
    section: 'the_inflow_boundary_line_elements',
    label: "Separatrix Line Element",
    latex: String.raw`\begin{aligned}
\partial_\xi \phi_1^3(\xi) &= \xi - \frac12,
\end{aligned}`,
    description: "From equation (19.4) we have and consequently",
    references: ["19.4"],
    transform: "From (19.4)",
    hidden: false,
  },
  {
    id: '21.73',
    section: 'the_inflow_boundary_line_elements',
    label: "g-Integral g_{ii,jj,n_r}",
    latex: String.raw`\begin{aligned}
\partial_\xi \phi_2^3(\xi) &= -2\xi,
\end{aligned}`,
    description: "From equation (19.4) we have and consequently",
    references: ["19.4"],
    transform: "From (19.4)",
    hidden: false,
  },
  {
    id: '21.74',
    section: 'the_inflow_boundary_line_elements',
    label: "g-Integral g_{ii,jj,n_z}",
    latex: String.raw`\begin{aligned}
\partial_\xi \phi_3^3(\xi) &= \xi + \frac12.
\end{aligned}`,
    description: "From equation (19.4) we have and consequently",
    references: ["19.4"],
    transform: "From (19.4)",
    hidden: false,
  },
  {
    id: '21.81',
    section: 'the_inflow_boundary_line_elements',
    label: "dg_{ii,jj,n_r}/dh",
    latex: String.raw`\begin{aligned}
f_{t_r,ii,jj}(e_3) &= \int_{\partial\Omega_{e_3}} t_r^3 \phi_{l_3(e_3,ii)}^3 \phi_{l_3(e_3,jj)}^3 \approx \sum_{p=1}^{n_{IG}} \partial_\xi r_{e_3}^3(p) \phi_{ii}(p) \phi_{jj}(p),
\end{aligned}`,
    description: "From equation (19.4) we have and consequently Now, from equation (??) we have",
    references: ["19.4"],
    transform: "From (19.4)",
    hidden: false,
  },
  {
    id: '21.84',
    section: 'the_inflow_boundary_line_elements',
    label: "dg_{ii,jj,n_z}/dh",
    latex: String.raw`\begin{aligned}
f_{t_z,ii,jj}(e_3) &\approx \sum_{p=1}^{n_{IG}} \partial_\xi z_{e_3}^3(p) \phi_{ii}(p) \phi_{jj}(p),
\end{aligned}`,
    description: "From equation (19.4) we have and consequently Now, from equation (??) we have",
    references: ["19.4"],
    transform: "From (19.4)",
    hidden: false,
  },
  {
    id: '21.88',
    section: 'the_inflow_boundary_line_elements',
    label: "dc_{ii,jj,n_r}/dh",
    latex: String.raw`\begin{aligned}
f_{ii,jj,n_r}(e_3) &\approx \sum_{p=1}^{n_{IG}} \partial_\xi z_{e_3}^3(p) \phi_{ii}(p) \phi_{jj}(p),
\end{aligned}`,
    description: "From equation (19.4) we have and consequently Now, from equation (??) we have",
    references: ["19.4"],
    transform: "From (19.4)",
    hidden: false,
  },
  {
    id: '21.91',
    section: 'the_inflow_boundary_line_elements',
    label: "dc_{ii,jj,n_z}/dh",
    latex: String.raw`\begin{aligned}
f_{ii,jj,n_z}(e_3) &\approx -\sum_{p=1}^{n_{IG}} \partial_\xi r_{e_3}^3(p) \phi_{ii}(p) \phi_{jj}(p).
\end{aligned}`,
    description: "From equation (19.4) we have and consequently Now, from equation (??) we have",
    references: ["19.4"],
    transform: "From (19.4)",
    hidden: false,
  },
  {
    id: '21.92',
    section: 'derivatives_of_line_element_integrals',
    label: "dc_{ii,n_r}/dh",
    latex: String.raw`J_{e_i}^i(p) = \sqrt{ \left( \partial_{\xi_i} r_{e_i}^i(p) \right)^2 + \left( \partial_{\xi_i} z_{e_i}^i(p) \right)^2 }`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.94',
    section: 'derivatives_of_line_element_integrals',
    label: "dc_{ii,n_z}/dh",
    latex: String.raw`\partial_{h_q} J_{e_i}^i(p) = \frac{ \partial_{\xi_i} r_{e_i}^i(p) \partial_{h_q} \left( \partial_{\xi_i} r_{e_i}^i(p) \right) + \partial_{\xi_i} z_{e_i}^i(p) \partial_{h_q} \left( \partial_{\xi_i} z_{e_i}^i(p) \right) }{ J_{e_i}^i(p) }`,
    description: "We recall where for and for",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.97',
    section: 'derivatives_of_line_element_integrals',
    label: "d(ds^1)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} \left( \partial_{\xi_i} r_{e_i}^i \right) &= \sum_{mm=1}^3 \left( \partial_{\xi_i} \phi_{mm}^i \right) \left( \partial_{h_q} r_{e_i,mm}^i \right),
\end{aligned}`,
    description: "And we notice that which reduces the problem to finding",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.98',
    section: 'derivatives_of_line_element_integrals',
    label: "d(t_r^1)/dh, d(t_z^1)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} \left( \partial_{\xi_i} z_{e_i}^i \right) &= \sum_{mm=1}^3 \left( \partial_{\xi_i} \phi_{mm}^i \right) \left( \partial_{h_q} z_{e_i,mm}^i \right).
\end{aligned}`,
    description: "And we notice that which reduces the problem to finding",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.101',
    section: 'derivatives_of_c_terms',
    label: "d(n_r^1)/dh, d(n_z^1)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} c_{t_r,jj,ii}^{s}(e_1) &\approx \sum_{p=1}^{n_{IG}} \frac{ \phi_{jj}^1(p) \partial_\xi \phi_{ii}^1(p) \partial_{h_q} \partial_\xi r_{e_1}^1(p) }{ J_{e_1}^1(p) }
&\quad - \sum_{p=1}^{n_{IG}} \frac{ \phi_{jj}^1(p) \partial_\xi \phi_{ii}^1(p) \partial_\xi r_{e_1}^1(p) \partial_{h_q} J_{e_1}^1(p) }{ (J_{e_1}^1(p))^2 },
\end{aligned}`,
    description: "Which reduces the problem to finding",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.104',
    section: 'derivatives_of_c_terms',
    label: "d(dr^1/d\u03be)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} c_{t_z,jj,ii}^{s}(e_1) &\approx \sum_{p=1}^{n_{IG}} \frac{ \phi_{jj}^1(p) \partial_\xi \phi_{ii}^1(p) \partial_{h_q} \partial_\xi z_{e_1}^1(p) }{ J_{e_1}^1(p) }
&\quad - \sum_{p=1}^{n_{IG}} \frac{ \phi_{jj}^1(p) \partial_\xi \phi_{ii}^1(p) \partial_\xi z_{e_1}^1(p) \partial_{h_q} J_{e_1}^1(p) }{ (J_{e_1}^1(p))^2 },
\end{aligned}`,
    description: "Which reduces the problem to finding",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.107',
    section: 'derivatives_of_c_terms',
    label: "d(dz^1/d\u03be)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} c_{ii,jj,n_r}(e_1) &\approx -\sum_{p=1}^{n_{IG}} \frac{ \phi_{jj}^1(p) \partial_\xi \phi_{ii}^1(p) \partial_{h_q} \partial_\xi z_{e_1}^1(p) }{ J_{e_1}^1(p) }
&\quad + \sum_{p=1}^{n_{IG}} \frac{ \phi_{jj}^1(p) \partial_\xi \phi_{ii}^1(p) \partial_\xi z_{e_1}^1(p) \partial_{h_q} J_{e_1}^1(p) }{ (J_{e_1}^1(p))^2 },
\end{aligned}`,
    description: "Which reduces the problem to finding",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.110',
    section: 'derivatives_of_c_terms',
    label: "d(ds^2)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} c_{ii,jj,n_z}(e_1) &\approx \sum_{p=1}^{n_{IG}} \frac{ \phi_{jj}^1(p) \partial_\xi \phi_{ii}^1(p) \partial_{h_q} \partial_\xi r_{e_1}^1(p) }{ J_{e_1}^1(p) }
&\quad - \sum_{p=1}^{n_{IG}} \frac{ \phi_{jj}^1(p) \partial_\xi \phi_{ii}^1(p) \partial_\xi r_{e_1}^1(p) \partial_{h_q} J_{e_1}^1(p) }{ (J_{e_1}^1(p))^2 }.
\end{aligned}`,
    description: "Which reduces the problem to finding",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.113',
    section: 'derivatives_of_d_terms',
    label: "d(t_r^2)/dh, d(t_z^2)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} d_{t_r,t_r,ii,jj}(e_2) &\approx 2 \sum_{p=1}^{n_{IG}} \phi_{ii}^2(p) \phi_{jj}^2(p) \frac{ \partial_\eta r_{e_2}^2(p) \partial_{h_q} \partial_\eta r_{e_2}^2(p) }{ J_{e_2}^2(p) }
&\quad - \sum_{p=1}^{n_{IG}} \phi_{ii}^2(p) \phi_{jj}^2(p) \frac{ (\partial_\eta r_{e_2}^2(p))^2 \partial_{h_q} J_{e_2}^2(p) }{ (J_{e_2}^2(p))^2 },
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.116',
    section: 'derivatives_of_d_terms',
    label: "d(n_r^2)/dh, d(n_z^2)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} d_{t_r,t_z,ii,jj}(e_2) &\approx \sum_{p=1}^{n_{IG}} \phi_{ii}^2(p) \phi_{jj}^2(p) \frac{ \partial_\eta r_{e_2}^2(p) \partial_{h_q} \partial_\eta z_{e_2}^2(p) + \partial_\eta z_{e_2}^2(p) \partial_{h_q} \partial_\eta r_{e_2}^2(p) }{ J_{e_2}^2(p) }
&\quad - \sum_{p=1}^{n_{IG}} \phi_{ii}^2(p) \phi_{jj}^2(p) \frac{ (\partial_\eta r_{e_2}^2(p)) (\partial_\eta z_{e_2}^2(p)) \partial_{h_q} J_{e_2}^2(p) }{ (J_{e_2}^2(p))^2 },
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.119',
    section: 'derivatives_of_d_terms',
    label: "d(dr^2/d\u03be)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} d_{t_z,t_z,ii,jj}(e_2) &\approx 2 \sum_{p=1}^{n_{IG}} \phi_{ii}^2(p) \phi_{jj}^2(p) \frac{ \partial_\eta z_{e_2}^2(p) \partial_{h_q} \partial_\eta z_{e_2}^2(p) }{ J_{e_2}^2(p) }
&\quad - \sum_{p=1}^{n_{IG}} \phi_{ii}^2(p) \phi_{jj}^2(p) \frac{ (\partial_\eta z_{e_2}^2(p))^2 \partial_{h_q} J_{e_2}^2(p) }{ (J_{e_2}^2(p))^2 },
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.122',
    section: 'derivatives_of_d_terms',
    label: "d(dz^2/d\u03be)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} d_{ii,jj,n_r}(e_2) &\approx \sum_{p=1}^{n_{IG}} \phi_{ii}^2(p) \phi_{jj}^2(p) \frac{ \partial_{h_q} \partial_\eta z_{e_2}^2(p) }{ J_{e_2}^2(p) }
&\quad - \sum_{p=1}^{n_{IG}} \phi_{ii}^2(p) \phi_{jj}^2(p) \frac{ \partial_\eta z_{e_2}^2(p) \partial_{h_q} J_{e_2}^2(p) }{ (J_{e_2}^2(p))^2 },
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.125',
    section: 'derivatives_of_d_terms',
    label: "d(ds^3)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} d_{ii,jj,n_z}(e_2) &\approx - \sum_{p=1}^{n_{IG}} \phi_{ii}^2(p) \phi_{jj}^2(p) \frac{ \partial_{h_q} \partial_\eta r_{e_2}^2(p) }{ J_{e_2}^2(p) }
&\quad + \sum_{p=1}^{n_{IG}} \phi_{ii}^2(p) \phi_{jj}^2(p) \frac{ \partial_\eta r_{e_2}^2(p) \partial_{h_q} J_{e_2}^2(p) }{ (J_{e_2}^2(p))^2 }.
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.128',
    section: 'derivatives_of_f_terms',
    label: "d(t_r^3)/dh, d(t_z^3)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} f_{t_r,ii,jj}(e_3) &\approx \sum_{p=1}^{n_{IG}} \phi_{ii}^3(p) \phi_{jj}^3(p) \partial_{h_q} \partial_\xi r_{e_3}^3(p),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.131',
    section: 'derivatives_of_f_terms',
    label: "d(n_r^3)/dh, d(n_z^3)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} f_{t_z,ii,jj}(e_3) &\approx \sum_{p=1}^{n_{IG}} \phi_{ii}^3(p) \phi_{jj}^3(p) \partial_{h_q} \partial_\xi z_{e_3}^3(p),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.134',
    section: 'derivatives_of_f_terms',
    label: "d(dr^3/d\u03be)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} f_{ii,jj,n_r}(e_3) &\approx \sum_{p=1}^{n_{IG}} \phi_{ii}^3(p) \phi_{jj}^3(p) \partial_{h_q} \partial_\xi z_{e_3}^3(p),
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '21.137',
    section: 'derivatives_of_f_terms',
    label: "d(dz^3/d\u03be)/dh",
    latex: String.raw`\begin{aligned}
\partial_{h_q} f_{ii,jj,n_z}(e_3) &\approx -\sum_{p=1}^{n_{IG}} \phi_{ii}^3(p) \phi_{jj}^3(p) \partial_{h_q} \partial_\xi r_{e_3}^3(p).
\end{aligned}`,
    description: "",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '22.1',
    section: 'derivatives_of_r_and_z_with_respect_to_h',
    label: "dr/dh for Boundary 1",
    latex: String.raw`\begin{aligned}
r_{i,q} &= r_q - R_q \cos\left( \frac{\alpha_i^q h_q}{R_q} \right),
\end{aligned}`,
    description: "And, therefore, its coordinates are",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '22.2',
    section: 'derivatives_of_r_and_z_with_respect_to_h',
    label: "dz/dh for Boundary 1",
    latex: String.raw`\begin{aligned}
z_{i,q} &= R_q \sin\left( \frac{\alpha_i^q h_q}{R_q} \right),
\end{aligned}`,
    description: "And, therefore, its coordinates are",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '22.3',
    section: 'derivatives_of_r_and_z_with_respect_to_h',
    label: "dr/dh for Boundary 2",
    latex: String.raw`\begin{aligned}
\partial_{h_q} r_{i,q} &= \alpha_i^q \sin\left( \frac{\alpha_i^q h_q}{R_q} \right),
\end{aligned}`,
    description: "Consequently, we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '22.4',
    section: 'derivatives_of_r_and_z_with_respect_to_h',
    label: "dz/dh for Boundary 2",
    latex: String.raw`\begin{aligned}
\partial_{h_q} z_{i,q} &= \alpha_i^q \cos\left( \frac{\alpha_i^q h_q}{R_q} \right).
\end{aligned}`,
    description: "Consequently, we have",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '22.5',
    section: 'derivatives_of_r_and_z_with_respect_to_h',
    label: "dr/dh for Boundary 3",
    latex: String.raw`\begin{aligned}
r_{i,q} &= -f,
\end{aligned}`,
    description: "Consequently, we have The coordinates of the -th node along the last spine are given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '22.6',
    section: 'derivatives_of_r_and_z_with_respect_to_h',
    label: "dz/dh for Boundary 3",
    latex: String.raw`\begin{aligned}
z_{i,q} &= \alpha_i^q h_q,
\end{aligned}`,
    description: "Consequently, we have The coordinates of the -th node along the last spine are given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '22.7',
    section: 'derivatives_of_r_and_z_with_respect_to_h',
    label: "dr/dh for Bulk Nodes",
    latex: String.raw`\begin{aligned}
\partial_{h_q} r_{i,q} &= 0,
\end{aligned}`,
    description: "Consequently, we have The coordinates of the -th node along the last spine are given by and, therefore, derivatives with respect to the length of the last spine are simply given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '22.8',
    section: 'derivatives_of_r_and_z_with_respect_to_h',
    label: "dz/dh for Bulk Nodes",
    latex: String.raw`\begin{aligned}
\partial_{h_q} z_{i,q} &= \alpha_i^q.
\end{aligned}`,
    description: "Consequently, we have The coordinates of the -th node along the last spine are given by and, therefore, derivatives with respect to the length of the last spine are simply given by",
    references: [],
    transform: null,
    hidden: false,
  },
  {
    id: '22.9',
    section: 'derivatives_of_r_and_z_with_respect_to_h',
    label: "dr/dh, dz/dh Summary",
    latex: String.raw`\partial_f r \approx \frac{r^+ - r^-}{f^+ - f^-}`,
    description: "Spine number 1), we perturb the length of forward (see figure 11) and backward and we assess the differential quotient given by",
    references: [],
    transform: null,
    hidden: false,
  },
];

