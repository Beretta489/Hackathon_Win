import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  FlatList,
  Switch,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Easing,
  Alert
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Icon = ({ name, size, color }) => {
  let iconText = '⚠️';
  if (name === 'reciclagem') iconText = '♻️';
  if (name === 'compras') iconText = '🥕';
  if (name === 'lixeira') iconText = '🗑';
  if (name === 'carbono') iconText = '🚗';
  if (name === 'energia') iconText = '⚡';
  if (name === 'casa') iconText = '🏠';
  if (name === 'metas') iconText = '🎯';
  if (name === 'add') iconText = '➕';
  if (name === 'check') iconText = '✅';
  if (name === 'calendario') iconText = '📅';
  if (name === 'trofeu') iconText = '🏆';
  if (name === 'email-outline') iconText = '✉️';
  if (name === 'lock-outline') iconText = '🔒';
  if (name === 'eye-outline') iconText = '👁️';
  if (name === 'eye-off-outline') iconText = '👁️‍🗨️';
  return (
    <Text style={{ fontSize: size, color: color }}>{iconText}</Text>
  );
};

const Animatable = {
  View: ({ animation, duration, delay, style, children }) => (
    <View style={style}>
      {children}
    </View>
  ),
  Text: ({ animation, duration, delay, style, children }) => (
    <Text style={style}>
      {children}
    </Text>
  ),
};


//Tela de Login
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    
    navigation.replace('Main');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animatable.View animation="fadeIn" duration={1000} style={styles.logoContainer}>
          <Image
            
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>Sustenta app</Text>
        </Animatable.View>
        
        <Animatable.View animation="fadeInUp" duration={1000} style={styles.formContainer}>
          <Text style={styles.title}>Bem-vindo</Text>
          <Text style={styles.subtitle}>uma vida mais sustentavel</Text>
          
          <View style={styles.inputContainer}>
            <Icon name="email-outline" size={20} color="#4ceb34" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#B8A79E"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Icon name="lock-outline" size={20} color="#6F4E37" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#B8A79E"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <Icon
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color="#4ceb34"
              />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
          
          <View style={styles.orContainer}>
            <View style={styles.divider} />
            <Text style={styles.orText}>ou</Text>
            <View style={styles.divider} />
          </View>
          
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
              <Icon name="google" size={20} color="#DB4437" />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
              <Icon name="facebook" size={20} color="#4267B2" />
              <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.registerContainer}>
            <Text style={styles.noAccountText}>Não tem uma conta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerText}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// Tela de Cadastro
const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    
    navigation.replace('Main');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={24} color="#6F4E37" />
        </TouchableOpacity>
        
        <Animatable.View animation="fadeIn" duration={1000} style={styles.logoContainer}>
          <Image
            
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>Sustenta app</Text>
        </Animatable.View>
        
        <Animatable.View animation="fadeInUp" duration={1000} style={styles.formContainer}>
          <Text style={styles.title}>Criar Conta</Text>
          <Text style={styles.subtitle}>Preencha os dados para se cadastrar</Text>
          
          <View style={styles.inputContainer}>
            <Icon name="account-outline" size={20} color="#4ceb34" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Nome completo"
              placeholderTextColor="#B8A79E"
              value={name}
              onChangeText={setName}
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Icon name="email-outline" size={20} color="#4ceb34" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#B8A79E"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Icon name="lock-outline" size={20} color="#4ceb34" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#B8A79E"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <Icon
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color="#4ceb34"
              />
            </TouchableOpacity>
          </View>
          
          <View style={styles.inputContainer}>
            <Icon name="lock-check-outline" size={20} color="#4ceb34" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Confirmar senha"
              placeholderTextColor="#B8A79E"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
              <Icon
                name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color="#4ceb34"
              />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Cadastrar</Text>
          </TouchableOpacity>
          
          <View style={styles.orContainer}>
            <View style={styles.divider} />
            <Text style={styles.orText}>ou</Text>
            <View style={styles.divider} />
          </View>
          
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
              <Icon name="google" size={20} color="#DB4437" />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
              <Icon name="facebook" size={20} color="#4267B2" />
              <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.loginContainer}>
            <Text style={styles.alreadyAccountText}>Já tem uma conta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};


// Tela de Energia
const EnergyScreen = () => {
  const [currentUsage, setCurrentUsage] = useState(320);
  const [lastMonth, setLastMonth] = useState(380);
  const [goal, setGoal] = useState(300);
  const [meterReading, setMeterReading] = useState('');
  
  const energyData = [
    { month: 'Jan', value: 410 },
    { month: 'Fev', value: 380 },
    { month: 'Mar', value: 350 },
    { month: 'Abr', value: 320 },
  ];
  
  const tips = [
    "Desligue aparelhos em modo standby",
    "Use lâmpadas LED de alta eficiência",
    "Regule a temperatura do ar-condicionado",
    "Aproveite a luz natural sempre que possível"
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Consumo de Energia</Text>
        <Icon name="energia" size={30} color="#4ceb34" />
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Consumo Atual</Text>
          <Text style={styles.statValue}>{currentUsage} kWh</Text>
          <Text style={styles.statComparison}>
            {currentUsage < lastMonth ? "↓" : "↑"} 
            {Math.abs(((currentUsage - lastMonth) / lastMonth) * 100).toFixed(1)}% em relação ao mês anterior
          </Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Meta Mensal</Text>
          <Text style={styles.statValue}>{goal} kWh</Text>
          <View style={styles.progressContainer}>
            <View style={[styles.progressBar, { width: `${Math.min(100, (currentUsage/goal) * 100)}%` }]} />
          </View>
          <Text style={styles.progressText}>
            {currentUsage >= goal 
              ? `${Math.abs(currentUsage - goal)} kWh acima da meta` 
              : `${Math.abs(goal - currentUsage)} kWh abaixo da meta`}
          </Text>
        </View>
      </View>
      
      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>Histórico de Consumo</Text>
        <View style={styles.chartPlaceholder}>
          {energyData.map((item, index) => (
            <View key={index} style={styles.chartBarContainer}>
              <View 
                style={[
                  styles.chartBar, 
                  { 
                    height: (item.value / 450) * 150,
                    backgroundColor: item.month === 'Abr' ? '#4ceb34' : '#A3E4D7'
                  }
                ]} 
              />
              <Text style={styles.chartLabel}>{item.month}</Text>
              <Text style={styles.chartValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      </View>
      
      <View style={styles.inputSection}>
        <Text style={styles.sectionTitle}>Registrar Leitura</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite a leitura do medidor"
            keyboardType="numeric"
            value={meterReading}
            onChangeText={setMeterReading}
            placeholderTextColor="#B8A79E"
          />
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.tipsSection}>
        <Text style={styles.sectionTitle}>Dicas de Economia</Text>
        {tips.map((tip, index) => (
          <View key={index} style={styles.tipItem}>
            <Icon name="check" size={18} color="#4ceb34" />
            <Text style={styles.tipText}>{tip}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

// Tela de  Reciclagem
const RecyclingScreen = () => {
  const [materials, setMaterials] = useState([
    { id: '1', name: 'Papel', amount: 5.2, unit: 'kg', icon: '📄' },
    { id: '2', name: 'Plástico', amount: 3.8, unit: 'kg', icon: '🧴' },
    { id: '3', name: 'Vidro', amount: 2.1, unit: 'kg', icon: '🧪' },
    { id: '4', name: 'Metal', amount: 1.5, unit: 'kg', icon: '🥫' },
  ]);
  const [newMaterial, setNewMaterial] = useState('');
  const [newAmount, setNewAmount] = useState('');
  
  const totalRecycled = materials.reduce((sum, item) => sum + item.amount, 0);
  
  const stats = [
    { label: 'Total Reciclado', value: `${totalRecycled.toFixed(1)} kg` },
    { label: 'Árvores Salvas', value: '3' },
    { label: 'CO₂ Evitado', value: '12.5 kg' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Rastreamento de Reciclagem</Text>
        <Icon name="reciclagem" size={30} color="#4ceb34" />
      </View>
      
      <View style={styles.statsRow}>
        {stats.map((item, index) => (
          <View key={index} style={styles.statBox}>
            <Text style={styles.statBoxValue}>{item.value}</Text>
            <Text style={styles.statBoxLabel}>{item.label}</Text>
          </View>
        ))}
      </View>
      
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Materiais Reciclados</Text>
        
        {materials.map((item) => (
          <View key={item.id} style={styles.materialItem}>
            <Text style={styles.materialIcon}>{item.icon}</Text>
            <View style={styles.materialInfo}>
              <Text style={styles.materialName}>{item.name}</Text>
              <Text style={styles.materialDate}>Última atualização: 3 dias atrás</Text>
            </View>
            <Text style={styles.materialAmount}>{item.amount} {item.unit}</Text>
          </View>
        ))}
      </View>
      
      <View style={styles.inputSection}>
        <Text style={styles.sectionTitle}>Adicionar Reciclagem</Text>
        <View style={styles.inputRow}>
          <View style={[styles.inputContainer, { flex: 2, marginRight: 10 }]}>
            <TextInput
              style={styles.input}
              placeholder="Material"
              value={newMaterial}
              onChangeText={setNewMaterial}
              placeholderTextColor="#B8A79E"
            />
          </View>
          <View style={[styles.inputContainer, { flex: 1 }]}>
            <TextInput
              style={styles.input}
              placeholder="Kg"
              keyboardType="numeric"
              value={newAmount}
              onChangeText={setNewAmount}
              placeholderTextColor="#B8A79E"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.fullWidthButton}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Seu Impacto</Text>
        <Text style={styles.infoDescription}>
          Você já evitou a emissão de 12.5kg de CO₂ com sua reciclagem! Continue assim e alcance a meta mensal de 20kg.
        </Text>
      </View>
    </ScrollView>
  );
};

// Tela de Compras 
const ShoppingScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    { id: '1', name: 'Alimentos', icon: '🥕' },
    { id: '2', name: 'Limpeza', icon: '🧴' },
    { id: '3', name: 'Higiene', icon: '🧼' },
    { id: '4', name: 'Vestuário', icon: '👕' },
  ];
  
  const products = [
    { 
      id: '1', 
      name: 'Detergente Ecológico', 
      rating: 4.5,
      ecoScore: 'A',
      price: 'R$ 12,90',
      image: '🧴',
      features: ['Biodegradável', 'Embalagem reciclada', 'Sem testes animais']
    },
    { 
      id: '2', 
      name: 'Esponja Vegetal', 
      rating: 4.8,
      ecoScore: 'A+',
      price: 'R$ 7,50',
      image: '🧽',
      features: ['Compostável', 'Material natural', 'Zero resíduos']
    },
    { 
      id: '3', 
      name: 'Shampoo Sólido', 
      rating: 4.3,
      ecoScore: 'A',
      price: 'R$ 24,90',
      image: '🧴',
      features: ['Zero plástico', 'Vegano', 'Longa duração']
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Compras Sustentáveis</Text>
        <Icon name="compras" size={30} color="#4ceb34" />
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar produtos sustentáveis..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#B8A79E"
        />
      </View>
      
      <Text style={styles.sectionTitle}>Categorias</Text>
      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryItem}>
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <Text style={styles.sectionTitle}>Produtos Recomendados</Text>
      {products.map((product) => (
        <View key={product.id} style={styles.productCard}>
          <View style={styles.productHeader}>
            <Text style={styles.productImage}>{product.image}</Text>
            <View style={styles.productHeaderInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>{product.rating} ★</Text>
              </View>
            </View>
            <View style={[styles.ecoScoreBadge, 
              { backgroundColor: product.ecoScore === 'A+' ? '#4ceb34' : '#8BEE7C' }]}>
              <Text style={styles.ecoScoreText}>{product.ecoScore}</Text>
            </View>
          </View>
          
          <View style={styles.productFeatures}>
            {product.features.map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <Icon name="check" size={14} color="#4ceb34" />
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
          
          <View style={styles.productFooter}>
            <Text style={styles.productPrice}>{product.price}</Text>
            <TouchableOpacity style={styles.productButton}>
              <Text style={styles.productButtonText}>Ver Detalhes</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Dica de Sustentabilidade</Text>
        <Text style={styles.infoDescription}>
          Produtos com EcoScore A ou A+ têm menor impacto ambiental e são produzidos com responsabilidade social.
        </Text>
      </View>
    </ScrollView>
  );
};

// Tela de Emissões de Carbono
const CarbonScreen = () => {
  const [transport, setTransport] = useState(125.8);
  const [energy, setEnergy] = useState(87.2);
  const [food, setFood] = useState(64.3);
  const [total, setTotal] = useState(transport + energy + food);
  const [transportMethod, setTransportMethod] = useState('');
  const [distance, setDistance] = useState('');
  
  const emissions = [
    { date: '05/04', value: 8.2, category: 'Transporte' },
    { date: '06/04', value: 3.1, category: 'Energia' },
    { date: '07/04', value: 4.8, category: 'Alimentação' },
    { date: '08/04', value: 7.5, category: 'Transporte' },
    { date: '09/04', value: 2.9, category: 'Energia' },
  ];

  const transportOptions = [
    { name: 'Carro', icon: '🚗', carbonPerKm: 120 },
    { name: 'Ônibus', icon: '🚌', carbonPerKm: 60 },
    { name: 'Metrô', icon: '🚇', carbonPerKm: 30 },
    { name: 'Bicicleta', icon: '🚲', carbonPerKm: 0 },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Emissões de Carbono</Text>
        <Icon name="carbono" size={30} color="#4ceb34" />
      </View>
      
      <View style={styles.carbonOverview}>
        <View style={styles.carbonTotalContainer}>
          <Text style={styles.carbonTotalLabel}>Sua pegada de carbono mensal</Text>
          <Text style={styles.carbonTotalValue}>{total.toFixed(1)} kg CO₂</Text>
          <Text style={styles.carbonTotalSub}>Abaixo da média nacional (320 kg)</Text>
        </View>
        
        <View style={styles.carbonSourcesContainer}>
          <Text style={styles.sectionTitle}>Principais Fontes</Text>
          
          <View style={styles.carbonSource}>
            <View style={styles.carbonSourceLabel}>
              <Text style={styles.carbonSourceIcon}>🚗</Text>
              <Text style={styles.carbonSourceText}>Transporte</Text>
            </View>
            <Text style={styles.carbonSourceValue}>{transport.toFixed(1)} kg</Text>
          </View>
          
          <View style={styles.carbonSource}>
            <View style={styles.carbonSourceLabel}>
              <Text style={styles.carbonSourceIcon}>⚡</Text>
              <Text style={styles.carbonSourceText}>Energia</Text>
            </View>
            <Text style={styles.carbonSourceValue}>{energy.toFixed(1)} kg</Text>
          </View>
          
          <View style={styles.carbonSource}>
            <View style={styles.carbonSourceLabel}>
              <Text style={styles.carbonSourceIcon}>🍽️</Text>
              <Text style={styles.carbonSourceText}>Alimentação</Text>
            </View>
            <Text style={styles.carbonSourceValue}>{food.toFixed(1)} kg</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Registrar Deslocamento</Text>
        
        <View style={styles.transportOptionsContainer}>
          {transportOptions.map((option, index) => (
            <TouchableOpacity 
              key={index} 
              style={[
                styles.transportOption,
                transportMethod === option.name && styles.transportOptionSelected
              ]}
              onPress={() => setTransportMethod(option.name)}
            >
              <Text style={styles.transportOptionIcon}>{option.icon}</Text>
              <Text style={[
                styles.transportOptionText,
                transportMethod === option.name && styles.transportOptionTextSelected
              ]}>
                {option.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Distância (km)"
            keyboardType="numeric"
            value={distance}
            onChangeText={setDistance}
            placeholderTextColor="#B8A79E"
          />
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Calcular</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.recentEmissionsContainer}>
        <Text style={styles.sectionTitle}>Emissões Recentes</Text>
        
        {emissions.map((item, index) => (
          <View key={index} style={styles.emissionItem}>
            <View style={styles.emissionItemLeft}>
              <Text style={styles.emissionDate}>{item.date}</Text>
              <Text style={styles.emissionCategory}>{item.category}</Text>
            </View>
            <Text style={styles.emissionValue}>{item.value} kg CO₂</Text>
          </View>
        ))}
      </View>
      
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Dica para Reduzir Emissões</Text>
        <Text style={styles.infoDescription}>
          Escolha meios de transporte com menor pegada de carbono, como bicicleta, 
          transporte público ou compartilhe caronas!
        </Text>
      </View>
    </ScrollView>
  );
};

// Tela de Metas e Desafios
const GoalsScreen = () => {
  const [activeTab, setActiveTab] = useState('goals');
  
  const goals = [
    { 
      id: '1', 
      title: 'Reduzir consumo de energia', 
      target: 'Diminuir 20% até final do mês',
      progress: 65,
      icon: '⚡' 
    },
    { 
      id: '2', 
      title: 'Reciclar mais plástico', 
      target: '5kg por semana',
      progress: 40,
      icon: '♻️' 
    },
    { 
      id: '3', 
      title: 'Transporte sustentável', 
      target: '3 dias por semana sem carro',
      progress: 90,
      icon: '🚲' 
    },
  ];
  
  const challenges = [
    { 
      id: '1', 
      title: 'Zero Resíduos', 
      description: 'Não gere lixo não reciclável por 7 dias',
      duration: '7 dias',
      participants: 234,
      icon: '🗑️' 
    },
    { 
      id: '2', 
      title: 'Economia de Água', 
      description: 'Reduza o consumo de água em 30%',
      duration: '30 dias',
      participants: 587,
      icon: '💧' 
    },
    { 
      id: '3', 
      title: 'Semana Vegana', 
      description: 'Alimente-se apenas com produtos vegetais',
      duration: '7 dias',
      participants: 412,
      icon: '🥗' 
    },
  ];
  
  const achievements = [
    { title: 'Mestre da Reciclagem', date: '02/04/2025', icon: '🏆' },
    { title: 'Economia de Energia', date: '27/03/2025', icon: '🏅' },
    { title: 'Consumo Consciente', date: '15/03/2025', icon: '🥇' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Metas e Desafios</Text>
        <Icon name="metas" size={30} color="#4ceb34" />
      </View>
      
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'goals' && styles.activeTab]}
          onPress={() => setActiveTab('goals')}
        >
          <Text 
            style={[styles.tabText, activeTab === 'goals' && styles.activeTabText]}
          >
            Minhas Metas
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'challenges' && styles.activeTab]}
          onPress={() => setActiveTab('challenges')}
        >
          <Text 
            style={[styles.tabText, activeTab === 'challenges' && styles.activeTabText]}
          >
            Desafios
          </Text>
        </TouchableOpacity>
      </View>
      
      {activeTab === 'goals' ? (
        <View style={styles.sectionContainer}>
          {goals.map((goal) => (
            <View key={goal.id} style={styles.goalCard}>
              <View style={styles.goalHeader}>
                <Text style={styles.goalIcon}>{goal.icon}</Text>
                <View style={styles.goalInfo}>
                  <Text style={styles.goalTitle}>{goal.title}</Text>
                  <Text style={styles.goalTarget}>{goal.target}</Text>
                </View>
              </View>
              
              <View style={styles.goalProgressContainer}>
                <View style={styles.goalProgressBar}>
                  <View 
                    style={[styles.goalProgress, { width: `${goal.progress}%` }]} 
                  />
                </View>
                <Text style={styles.goalProgressText}>{goal.progress}%</Text>
              </View>
            </View>
          ))}
          
          <TouchableOpacity style={styles.addButton}>
            <Icon name="add" size={20} color="#FFFFFF" />
            <Text style={styles.addButtonText}>Nova Meta</Text>
          </TouchableOpacity>
          
          <View style={styles.achievementsContainer}>
            <Text style={styles.sectionTitle}>Conquistas Recentes</Text>
            
            {achievements.map((achievement, index) => (
              <View key={index} style={styles.achievementItem}>
                <Text style={styles.achievementIcon}>{achievement.icon}</Text>
                <View style={styles.achievementInfo}>
                  <Text style={styles.achievementTitle}>{achievement.title}</Text>
                  <Text style={styles.achievementDate}>{achievement.date}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      ) : (
        <View style={styles.sectionContainer}>
          {challenges.map((challenge) => (
            <View key={challenge.id} style={styles.challengeCard}>
              <View style={styles.challengeHeader}>
                <Text style={styles.challengeIcon}>{challenge.icon}</Text>
                <View style={styles.challengeInfo}>
                  <Text style={styles.challengeTitle}>{challenge.title}</Text>
                  <Text style={styles.challengeDescription}>{challenge.description}</Text>
                </View>
              </View>
              
              <View style={styles.challengeFooter}>
                <View style={styles.challengeDetails}>
                  <View style={styles.challengeDetail}>
                    <Icon name="calendario" size={14} color="#666666" />
                    <Text style={styles.challengeDetailText}>{challenge.duration}</Text>
                  </View>
                  <View style={styles.challengeDetail}>
                    <Icon name="trofeu" size={14} color="#666666" />
                    <Text style={styles.challengeDetailText}>{challenge.participants} participantes</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.joinButton}>
                  <Text style={styles.joinButtonText}>Participar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

// Main Tabbar 
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Energia') {
            iconName = 'energia';
          } else if (route.name === 'Reciclagem') {
            iconName = 'reciclagem';
          } else if (route.name === 'Compras') {
            iconName = 'compras';
          } else if (route.name === 'Carbono') {
            iconName = 'carbono';
          } else if (route.name === 'Metas') {
            iconName = 'metas';
          }
          
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4ceb34',
        tabBarInactiveTintColor: '#B8A79E',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        }
      })}
    >
      <Tab.Screen name="Energia" component={EnergyScreen} />
      <Tab.Screen name="Reciclagem" component={RecyclingScreen} />
      <Tab.Screen name="Compras" component={ShoppingScreen} />
      <Tab.Screen name="Carbono" component={CarbonScreen} />
      <Tab.Screen name="Metas" component={GoalsScreen} />
    </Tab.Navigator>
  );
};


const Stack = createStackNavigator();




// Component Principal
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        
        {}
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F3F0',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  

  
  // Estilos para o Login e Registro
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4ceb34',
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F3F0',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 55,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333333',
  },
  eyeIcon: {
    padding: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 25,
  },
  forgotPasswordText: {
    color: '#4ceb34',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#4ceb34',
    borderRadius: 10,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#4ceb34',
    borderRadius: 10,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0D8D0',
  },
  orText: {
    color: '#999999',
    paddingHorizontal: 10,
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#E0D8D0',
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
  },
  facebookButton: {
    backgroundColor: '#FFFFFF',
  },
  socialButtonText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  noAccountText: {
    color: '#666666',
    marginRight: 5,
  },
  registerText: {
    color: '#4ceb34',
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  alreadyAccountText: {
    color: '#666666',
    marginRight: 5,
  },
  loginText: {
    color: '#4ceb34',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F3F0',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4ceb34',
  },
  
  // Estilos para header 
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  
  // Estilos para seções e cards
  sectionContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  statComparison: {
    fontSize: 12,
    color: '#4ceb34',
  },
  
  // Progresso
  progressContainer: {
    height: 6,
    backgroundColor: '#F0F0F0',
    borderRadius: 3,
    marginVertical: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4ceb34',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#666666',
  },
  
  // Gráficos
  chartContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  chartPlaceholder: {
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingVertical: 20,
  },
  chartBarContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 50,
  },
  chartBar: {
    width: 30,
    borderRadius: 15,
  },
  chartLabel: {
    marginTop: 8,
    fontSize: 12,
    color: '#666666',
  },
  chartValue: {
    marginTop: 4,
    fontSize: 10,
    color: '#999999',
  },
  
  // Input sections
  inputSection: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333333',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  actionButton: {
    backgroundColor: '#4ceb34',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  
  // Tips Section
  tipsSection: {
    marginBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  tipText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333333',
    flex: 1,
  },
  
  // Stats Row
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statBoxValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  statBoxLabel: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
  },
  
  // Material Items
  materialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  materialIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  materialInfo: {
    flex: 1,
  },
  materialName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 2,
  },
  materialDate: {
    fontSize: 12,
    color: '#999999',
  },
  materialAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4ceb34',
  },
  
  // Buttons
  fullWidthButton: {
    backgroundColor: '#4ceb34',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
  // Info Card
  infoCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#E8F7E8',
    borderRadius: 15,
    padding: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#4ceb34',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  infoDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  
  // Search
  searchContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  
  // Categories
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  categoryItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '23%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
  },
  
  // Product Cards
  productCard: {
    marginHorizontal: 20,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productImage: {
    fontSize: 40,
    marginRight: 15,
  },
  productHeaderInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: '#FFB800',
    marginRight: 5,
  },
  ecoScoreBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: '#4ceb34',
  },
  ecoScoreText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  productFeatures: {
    marginBottom: 15,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  featureText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#666666',
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 15,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  productButton: {
    backgroundColor: '#4ceb34',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  productButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  
  // Carbon Emissions
  carbonOverview: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  carbonTotalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  carbonTotalLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  carbonTotalValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  carbonTotalSub: {
    fontSize: 12,
    color: '#4ceb34',
  },
  carbonSourcesContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  carbonSource: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  carbonSourceLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carbonSourceIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  carbonSourceText: {
    fontSize: 16,
    color: '#333333',
  },
  carbonSourceValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  
  // Transport Options
  transportOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  transportOption: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: '23%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  transportOptionSelected: {
    backgroundColor: '#E8F7E8',
    borderWidth: 1,
    borderColor: '#4ceb34',
  },
  transportOptionIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  transportOptionText: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
  },
  transportOptionTextSelected: {
    color: '#4ceb34',
    fontWeight: 'bold',
  },
  
  // Emissions Items
  recentEmissionsContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  emissionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  emissionItemLeft: {
    flexDirection: 'column',
  },
  emissionDate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 2,
  },
  emissionCategory: {
    fontSize: 12,
    color: '#666666',
  },
  emissionValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  
  // Tabs
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',
  },
  activeTab: {
    borderBottomColor: '#4ceb34',
  },
  tabText: {
    fontSize: 16,
    color: '#666666',
  },
  activeTabText: {
    color: '#4ceb34',
    fontWeight: 'bold',
  },
  
  // Goals
  goalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  goalIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  goalInfo: {
    flex: 1,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 2,
  },
  goalTarget: {
    fontSize: 14,
    color: '#666666',
  },
  goalProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goalProgressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    marginRight: 10,
    overflow: 'hidden',
  },
  goalProgress: {
    height: '100%',
    backgroundColor: '#4ceb34',
    borderRadius: 4,
  },
  goalProgressText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4ceb34',
    width: 40,
    textAlign: 'right',
  },
  
  // Add Button
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4ceb34',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  
  // Achievements
  achievementsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  achievementIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 2,
  },
  achievementDate: {
    fontSize: 12,
    color: '#999999',
  },
  
  // Challenges
  challengeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  challengeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  challengeIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  challengeInfo: {
    flex: 1,
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  challengeDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  challengeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 15,
  },
  challengeDetails: {
    flex: 1,
  },
  challengeDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  challengeDetailText: {
    fontSize: 12,
    color: '#666666',
    marginLeft: 5,
  },
  joinButton: {
    backgroundColor: '#4ceb34',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  joinButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  });